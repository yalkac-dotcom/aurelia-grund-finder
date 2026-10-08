# Project architecture rules

- Keep the shared site header viewport-fixed in `Header` and reserve its responsive 64/80 px height centrally in `Layout`, so every route and language retains identical unobscured navigation.
- Property-offer country choices show radio + country name only (no flag images), identical across all seven languages.
- Keep all seven homepages on one shared structure fed by `src/i18n/homeMaster.ts` (German is the master), so languages cannot drift apart structurally.
- Keep ordinary content sections auto-height with compact responsive outer spacing; reserve fixed or minimum heights for intentional hero and functional regions only.
- Ship no analytics, tracking or consent-banner code; the site only uses technically necessary storage, so no consent management is required.
- Inquiries are stored and reviewable in the hidden, noindex `/verwaltung` area (admin role via `user_roles`, signups disabled); forms insert with a client-generated id so files link via `submission_files`; the notification function receives only that id, reads the row server-side and mails the full inquiry (Reply-To = enquirer) to the internal inbox, but never documents, filenames or download links — only a file count and a login-protected deep link `/verwaltung?anfrage=<id>` (no confirmation mails to enquirers) — the client can't inject mail content and documents stay inside the backend.
- Form free texts never use silent truncation (no maxLength, no slice): visible counter via `TextLimit` plus blocking error, and the composed message must fit the 5000-char DB limit — so no inquiry text is lost unnoticed.
