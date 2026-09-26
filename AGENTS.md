# Project architecture rules

- Keep the shared site header viewport-fixed in `Header` and reserve its responsive 64/80 px height centrally in `Layout`, so every route and language retains identical unobscured navigation.
- Keep property-offer country flags as local SVG assets in `src/assets/flags` and map them by country key, so all seven language views reuse the same vector artwork.