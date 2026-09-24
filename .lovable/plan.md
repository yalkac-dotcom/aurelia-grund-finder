# Finish the current website state

## Scope
- Preserve all selected imagery, copy, layouts, navigation, forms, and existing design decisions.
- Do not source, generate, purchase, or introduce any new image.
- Complete only missing image wiring, responsive crops, required AI labels, and factual image credits.

## Implementation
- Inventory every image currently rendered across the site and reconcile it with the image-credits page in all seven languages.
- Keep or add the existing localized AI disclosure variants only where required; remove neither valid labels nor labels from unrelated images.
- Adjust only image-specific crop positions or existing local overlays when viewport checks reveal a concrete issue at approximately 390, 768, or 1440 px.
- Correct broken or incomplete image paths and remove stale credit entries only when confirmed unused.
- Preserve the German homepage and all unrelated content and styling.

## Verification
- Exercise all current routes at 390, 768, and 1440 px, including image loading, clipping, overlaps, and control fit.
- Verify navigation and all seven language selections remain functional.
- Confirm no image request returns 404 and no used image is absent from credits.
- Run the TypeScript typecheck and report any remaining concrete issue.
- Do not publish or deploy.
