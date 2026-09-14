# Asset provenance

## Fonts

The pptx template uses Calibri. For the web we bundle Carlito, the standard
open metric-compatible clone of Calibri, as local woff2 files under
`src/fonts/`. No CDN is used.

- `carlito-regular.woff2`, `carlito-bold.woff2`, `carlito-italic.woff2`,
  `carlito-bolditalic.woff2`
- Converted from the `google-crosextra-carlito` TTF package already present
  on this machine (via a Flatpak runtime font cache) using `woff2_compress`.
- Upstream source if these files ever need to be regenerated: the
  `google-crosextra-carlito` package (Google's Chrome OS extra fonts),
  available from most Linux distro repos or
  https://github.com/googlefonts/carlito. License: SIL Open Font License 1.1.

## Logo

`public/brand/rff-logo.png` was extracted directly from
the RFF template pptx, kept outside the repo at ~/code/globalsync2026-private (`ppt/media/image4.png`,
720x720, the highest-resolution copy of the rocket logo in the deck). No
placeholder was needed.

## Rewst logo (presenter and closing slides only)

Source: rewst.io site header and footer SVGs, matching the primary logo on
styleguide.rewst.io/logos (Stewart mascot plus black wordmark on light;
white wordmark on dark). Rules from the styleguide: horizontal primary logo
preferred, minimum 100px wide, clearspace equal to the lowercase "e", no
grayscale, no rotation, no drop shadow, no recoloring, mascot never paired
with a custom variant. Files:

- public/brand/rewst-logo-on-light.svg (black wordmark, use on white)
- public/brand/rewst-logo-on-dark.svg (white wordmark, use on navy)
