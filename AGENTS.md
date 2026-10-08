# Project architecture rules

- Keep the shared site header viewport-fixed in `Header` and reserve its responsive 64/80 px height centrally in `Layout`, so every route and language retains identical unobscured navigation.
- Property-offer country choices show radio + country name only (no flag images), identical across all seven languages.
- Keep all seven homepages on one shared structure fed by `src/i18n/homeMaster.ts` (German is the master), so languages cannot drift apart structurally.
- Keep ordinary content sections auto-height with compact responsive outer spacing; reserve fixed or minimum heights for intentional hero and functional regions only.
- Ship no analytics, tracking or consent-banner code; the site only uses technically necessary storage, so no consent management is required.
- Inquiries are reviewed only in the hidden, noindex `/verwaltung` area (admin role via `user_roles`, signups disabled); forms insert with a client-generated id so files link via `submission_files`; the notification function receives only that id and sends Resend only allow-listed, non-confidential key facts plus a login-protected deep link `/verwaltung?anfrage=<id>` (never names, contact data, free text, personal circumstances or documents; no confirmation mails to enquirers) — keeps personal data inside the backend.
