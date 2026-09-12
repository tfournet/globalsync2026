// Builds the deck, serves the production build, and screenshots every
// registered slide at 1920x1080 into docs/screenshots/NN.png using the same
// print-only render path as the PDF export (see src/PrintDeck.jsx).
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs/promises'
import { build, preview } from 'vite'
import { chromium } from 'playwright'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const OUT_DIR = path.join(root, 'docs', 'screenshots')
const PORT = 4174

async function main() {
  await build({ root })

  const server = await preview({ root, preview: { port: PORT, strictPort: true } })
  const url = `http://localhost:${PORT}/?print=1`

  const browser = await chromium.launch()
  try {
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } })
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.waitForTimeout(300)

    await fs.mkdir(OUT_DIR, { recursive: true })
    for (const f of await fs.readdir(OUT_DIR)) {
      if (f.endsWith('.png')) await fs.rm(path.join(OUT_DIR, f))
    }

    const slideEls = await page.locator('#root > div > div').all()
    for (let i = 0; i < slideEls.length; i++) {
      const name = `${String(i + 1).padStart(2, '0')}.png`
      await slideEls[i].screenshot({ path: path.join(OUT_DIR, name) })
    }
    console.log(`Wrote ${slideEls.length} screenshot(s) to ${path.relative(root, OUT_DIR)}`)
  } finally {
    await browser.close()
    await new Promise((resolve) => server.httpServer.close(resolve))
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
