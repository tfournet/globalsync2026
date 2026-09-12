# Global Sync 2026

Web-based slide deck for Tim Fournet's (Rewst) talk "Doing more without
adding bodies" at Global Sync Meetup NYC, 17 September 2026. Built to the
Rocket Fuel Factory (RFF) brand template. See `docs/reference/BRIEF.md` for
the full brief and `AGENTS.md` for the architecture rules.

## Quick start

```bash
npm install
npm run dev      # http://localhost:1745
```

## Scripts

- `npm run dev` — start the dev server on port 1745
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build
- `npm run pdf` — build the deck and export `dist/presentation.pdf`
- `npm test` — brand copy lint plus the Vitest smoke suite

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| `ArrowRight` / `Space` | Next slide |
| `ArrowLeft` | Previous slide |
| `Home` / `End` | Jump to first / last slide |
| Number keys, then `Enter` | Jump to slide N |
| `N` | Toggle the presenter HUD (slide index, timer, notes) |
| `G` | Toggle the slide overview grid |
| `T` | Start or stop the timer |
| `R` | Reset the timer |
| `B` | Jump to the break slide |
| `F` | Toggle fullscreen |
| `Escape` | Close the presenter HUD or the slide overview grid |

The presenter HUD is a drawer in the bottom right corner of the stage. When
the timer is running and the HUD is hidden, a small dot in the bottom right
corner of the viewport shows the timer state at a glance (its color turns
orange at 25 minutes and red at 30). The slide overview grid shows every
slide as a scaled-down thumbnail; click one, or focus it and press `Enter`,
to jump straight to it.

The current slide is reflected in the URL as `#/7`, so reloading or sharing
a link returns to the same slide.

## How to add a slide

1. Pick the layout under `src/components/layouts/` that matches the content
   shape. Add a new layout component there only if none of the existing ones
   fit (see `AGENTS.md` for the full layout list).
2. Create `src/components/slides/NNN-Name.jsx`. Start the file with a
   `// PLACEHOLDER` comment if the copy is not final. Hardcode all copy in
   this file, imported into the layout component as props.
3. Register it in `src/data/slides.jsx`: add `{ id, component, notesKey }` in
   the position you want it to appear.
4. Optionally add a `notes[id]` entry in `src/data/notes.js` for the
   presenter notes drawer.
5. Run `npm test` and `npm run pdf` before committing.

## How to build the PDF

```bash
npm run pdf
```

This builds the app, serves the production build, renders every registered
slide stacked in a print-only mode (`?print=1`, see `src/PrintDeck.jsx`), and
captures it with Playwright's `page.pdf()` into `dist/presentation.pdf`, one
PDF page per slide.
