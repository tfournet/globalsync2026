// Builds the deck, serves the production build, and screenshots every
// registered slide at 1920x1080 into docs/screenshots/NN.png using the same
// print-only render path as the PDF export (see src/PrintDeck.jsx).
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs/promises'
import { build, preview } from 'vite'
import { chromium } from 'playwright'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const ALT = process.argv.includes('--alt')
const OUT_DIR = path.join(root, 'docs', ALT ? 'alternatives' : 'screenshots')
const PORT = parseInt(process.env.SHOT_PORT || (ALT ? '4175' : '4174'), 10)
const OUT_DIST = ALT ? `dist-alt-${PORT}` : 'dist'

async function main() {
  await build({ root, build: { outDir: OUT_DIST }, logLevel: 'warn' })

  const server = await preview({ root, build: { outDir: OUT_DIST }, preview: { port: PORT, strictPort: true } })
  const url = `http://localhost:${PORT}/?print=1${ALT ? '&alt=1' : ''}`

  const browser = await chromium.launch()
  try {
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } })
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.waitForTimeout(300)

    await fs.mkdir(OUT_DIR, { recursive: true })
    if (!ALT) {
      for (const f of await fs.readdir(OUT_DIR)) {
        if (f.endsWith('.png')) await fs.rm(path.join(OUT_DIR, f))
      }
    }

    const slideEls = await page.locator(ALT ? '[data-shot]' : '#root > div > div').all()
    for (let i = 0; i < slideEls.length; i++) {
      const name = ALT ? `${await slideEls[i].getAttribute('data-shot')}.png` : `${String(i + 1).padStart(2, '0')}.png`
      await slideEls[i].screenshot({ path: path.join(OUT_DIR, name) })
    }
    console.log(`Wrote ${slideEls.length} screenshot(s) to ${path.relative(root, OUT_DIR)}`)
  } finally {
    await browser.close()
    await new Promise((resolve) => server.httpServer.close(resolve))
    if (ALT) await fs.rm(path.join(root, OUT_DIST), { recursive: true, force: true })
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
