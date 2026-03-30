
ALTER TABLE public.contact_submissions 
  ALTER COLUMN last_name SET DEFAULT '',
  ALTER COLUMN last_name DROP NOT NULL,
  ADD COLUMN IF NOT EXISTS phone text,
  ADD COLUMN IF NOT EXISTS property_type text;
