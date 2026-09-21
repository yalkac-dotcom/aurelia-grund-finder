DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'storage'
      AND tablename = 'objects'
      AND policyname = 'Anyone can upload Turkey property documents'
  ) THEN
    CREATE POLICY "Anyone can upload Turkey property documents"
    ON storage.objects
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (
      bucket_id = 'turkey-property-documents'
      AND lower(storage.extension(name)) IN ('pdf', 'jpg', 'jpeg', 'png')
    );
  END IF;
END $$;