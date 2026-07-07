-- Replace permissive WITH CHECK (true) policies with validated constraints

DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  first_name IS NOT NULL
  AND length(btrim(first_name)) BETWEEN 1 AND 100
  AND email IS NOT NULL
  AND length(email) BETWEEN 5 AND 254
  AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND message IS NOT NULL
  AND length(message) BETWEEN 1 AND 5000
  AND (last_name IS NULL OR length(last_name) <= 100)
  AND (phone IS NULL OR length(phone) <= 40)
  AND (subject IS NULL OR length(subject) <= 200)
  AND (property_type IS NULL OR length(property_type) <= 100)
  AND (salutation IS NULL OR length(salutation) <= 40)
);

DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON public.newsletter_subscriptions;
CREATE POLICY "Anyone can subscribe to newsletter"
ON public.newsletter_subscriptions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  email IS NOT NULL
  AND length(email) BETWEEN 5 AND 254
  AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND language IN ('de','en','nl','it','es','tr')
  AND confirmed = false
  AND confirmed_at IS NULL
  AND (source IS NULL OR length(source) <= 100)
);