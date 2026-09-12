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
`docs/reference/RFF-Presentation-Template.pptx` (`ppt/media/image4.png`,
720x720, the highest-resolution copy of the rocket logo in the deck). No
placeholder was needed.
