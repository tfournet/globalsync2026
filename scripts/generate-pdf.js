// Builds the deck, serves the production build, renders every slide stacked
// in print mode (see src/PrintDeck.jsx), and captures it as one PDF with
// Playwright's native page.pdf() -- one PDF page per slide, no separate
// screenshot-merging step or extra PDF library required.
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs/promises'
import { build, preview } from 'vite'
import { chromium } from 'playwright'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const NOTES = process.argv.includes('--notes')
const OUT_PATH = path.join(root, 'docs', 'export', NOTES ? 'presentation-notes.pdf' : 'presentation.pdf')
const PORT = NOTES ? 4176 : 4173

function countPdfPages(bytes) {
  const text = bytes.toString('latin1')
  const matches = text.match(/\/Type\s*\/Page[^s]/g) || []
  return matches.length
}

async function main() {
  await build({ root })

  const server = await preview({ root, preview: { port: PORT, strictPort: true } })
  const url = `http://localhost:${PORT}/?print=1${NOTES ? '&notes=1' : ''}`

  const browser = await chromium.launch()
  try {
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } })
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.waitForTimeout(300)

    await fs.mkdir(path.dirname(OUT_PATH), { recursive: true })
    await page.pdf({
      path: OUT_PATH,
      width: '1920px',
      height: '1080px',
      printBackground: true,
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
    })
  } finally {
    await browser.close()
    await new Promise((resolve) => server.httpServer.close(resolve))
  }

  const bytes = await fs.readFile(OUT_PATH)
  const pageCount = countPdfPages(bytes)
  console.log(`Wrote ${path.relative(root, OUT_PATH)} (${pageCount} pages)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
