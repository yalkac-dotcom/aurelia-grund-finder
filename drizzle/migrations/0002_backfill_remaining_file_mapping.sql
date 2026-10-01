INSERT INTO public.submission_files (submission_id, object_path, file_name, created_at)
SELECT s.id, o.name, split_part(o.name, '/', 2), o.created_at
FROM storage.objects o
JOIN public.contact_submissions s
  ON s.created_at BETWEEN o.created_at AND o.created_at + interval '5 seconds'
 AND s.message LIKE 'Immobilienanfrage –%'
WHERE o.bucket_id = 'turkey-property-documents'
  AND NOT EXISTS (SELECT 1 FROM public.submission_files f WHERE f.object_path = o.name)
ON CONFLICT (object_path) DO NOTHING;