// Brand rule lint: no em dashes, no exclamation points, no emoji in slide
// copy. Scans string literals and JSX text in src/components/slides/*.jsx.
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const slidesDir = path.join(root, 'src', 'components', 'slides')

const EM_DASH = /—/u
const EXCLAMATION = /!/u
// Common emoji ranges; deliberately conservative to avoid false positives on plain text.
const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u

function lintFile(filePath) {
  const contents = readFileSync(filePath, 'utf8')
  const issues = []
  contents.split('\n').forEach((line, i) => {
    if (EM_DASH.test(line)) issues.push({ line: i + 1, rule: 'em dash', text: line.trim() })
    if (EXCLAMATION.test(line)) issues.push({ line: i + 1, rule: 'exclamation point', text: line.trim() })
    if (EMOJI.test(line)) issues.push({ line: i + 1, rule: 'emoji', text: line.trim() })
  })
  return issues
}

function main() {
  const files = readdirSync(slidesDir)
    .filter((f) => f.endsWith('.jsx'))
    .map((f) => path.join(slidesDir, f))

  let total = 0
  for (const file of files) {
    const issues = lintFile(file)
    if (issues.length > 0) {
      total += issues.length
      console.error(`\n${path.relative(root, file)}`)
      for (const issue of issues) {
        console.error(`  line ${issue.line}: ${issue.rule} -- ${issue.text}`)
      }
    }
  }

  if (total > 0) {
    console.error(`\nlint-copy: ${total} brand rule violation(s) found.`)
    process.exit(1)
  }

  console.log(`lint-copy: ${files.length} slide file(s) clean.`)
}

main()
