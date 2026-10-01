-- Roles
CREATE TYPE public.app_role AS ENUM ('admin');
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

-- Status / retention columns (existing rows default to 'offen')
CREATE TYPE public.submission_status AS ENUM ('offen', 'abgeschlossen', 'aufbewahren');
ALTER TABLE public.contact_submissions
  ADD COLUMN status public.submission_status NOT NULL DEFAULT 'offen',
  ADD COLUMN closed_at timestamptz,
  ADD COLUMN last_contact_at date,
  ADD COLUMN form_type text,
  ADD COLUMN country text;

GRANT SELECT, UPDATE ON public.contact_submissions TO authenticated;
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

CREATE POLICY "Admins can read submissions" ON public.contact_submissions
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update submission status" ON public.contact_submissions
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Insert: visitors can never set status/retention fields
CREATE OR REPLACE FUNCTION public.contact_submissions_before_insert()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  NEW.status := 'offen';
  NEW.closed_at := NULL;
  NEW.last_contact_at := NULL;
  IF NEW.form_type IS NOT NULL AND NEW.form_type NOT IN ('general_contact','germany_property','turkey_property','buyer_interest') THEN
    RAISE EXCEPTION 'invalid form_type';
  END IF;
  IF NEW.country IS NOT NULL AND length(NEW.country) > 40 THEN
    RAISE EXCEPTION 'invalid country';
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER contact_submissions_before_insert BEFORE INSERT ON public.contact_submissions
  FOR EACH ROW EXECUTE FUNCTION public.contact_submissions_before_insert();

-- Update: only status fields may change; closing sets closed_at
CREATE OR REPLACE FUNCTION public.contact_submissions_before_update()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  IF ROW(NEW.id, NEW.salutation, NEW.first_name, NEW.last_name, NEW.email, NEW.subject, NEW.message,
         NEW.callback_requested, NEW.created_at, NEW.phone, NEW.property_type, NEW.form_type, NEW.country)
     IS DISTINCT FROM
     ROW(OLD.id, OLD.salutation, OLD.first_name, OLD.last_name, OLD.email, OLD.subject, OLD.message,
         OLD.callback_requested, OLD.created_at, OLD.phone, OLD.property_type, OLD.form_type, OLD.country) THEN
    RAISE EXCEPTION 'submission content is read-only';
  END IF;
  IF NEW.status = 'abgeschlossen' AND OLD.status IS DISTINCT FROM 'abgeschlossen' AND NEW.closed_at IS NULL THEN
    NEW.closed_at := now();
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER contact_submissions_before_update BEFORE UPDATE ON public.contact_submissions
  FOR EACH ROW EXECUTE FUNCTION public.contact_submissions_before_update();

-- File ↔ submission mapping
CREATE TABLE public.submission_files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid NOT NULL REFERENCES public.contact_submissions(id) ON DELETE CASCADE,
  object_path text NOT NULL UNIQUE,
  file_name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.submission_files TO authenticated;
GRANT ALL ON public.submission_files TO service_role;
ALTER TABLE public.submission_files ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can read submission files" ON public.submission_files
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Backfill mapping for existing uploads (file name appears in the submission message, submission within 10 min after upload)
INSERT INTO public.submission_files (submission_id, object_path, file_name, created_at)
SELECT m.sid, o.name, split_part(o.name, '/', 2), o.created_at
FROM storage.objects o
CROSS JOIN LATERAL (
  SELECT s.id AS sid FROM public.contact_submissions s
  WHERE s.created_at BETWEEN o.created_at - interval '1 minute' AND o.created_at + interval '10 minutes'
    AND s.message ILIKE '%' || split_part(o.name, '/', 2) || '%'
  ORDER BY s.created_at ASC LIMIT 1
) m
WHERE o.bucket_id = 'turkey-property-documents'
ON CONFLICT (object_path) DO NOTHING;

-- Admins may read (sign) documents; still no public access
CREATE POLICY "Admins can read property documents" ON storage.objects
  FOR SELECT TO authenticated USING (bucket_id = 'turkey-property-documents' AND public.has_role(auth.uid(), 'admin'));

-- Retention basis (NOT scheduled; no automatic deletion active)
CREATE OR REPLACE FUNCTION public.submissions_due_for_deletion()
RETURNS TABLE (id uuid, created_at timestamptz, closed_at timestamptz, last_contact_at date, due_since date)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT s.id, s.created_at, s.closed_at, s.last_contact_at,
         (COALESCE(s.last_contact_at, s.closed_at::date) + interval '12 months')::date
  FROM public.contact_submissions s
  WHERE public.has_role(auth.uid(), 'admin')
    AND s.status = 'abgeschlossen'
    AND COALESCE(s.last_contact_at, s.closed_at::date) IS NOT NULL
    AND COALESCE(s.last_contact_at, s.closed_at::date) + interval '12 months' < now()
$$;
REVOKE EXECUTE ON FUNCTION public.submissions_due_for_deletion() FROM anon, public;
GRANT EXECUTE ON FUNCTION public.submissions_due_for_deletion() TO authenticated;