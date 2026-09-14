// Brand rule lint: no em dashes, no exclamation points, no emoji in slide
// copy. Scans string literals and JSX text in src/components/slides/*.jsx.
// Chrome and shell code (src/components/**, src/PresentationApp.jsx) is also
// scanned, but only for em dashes, since that code is UI copy rather than
// session content and can legitimately contain "!" (JS operators, etc).
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const slidesDir = path.join(root, 'src', 'components', 'slides')
const alternativesDir = path.join(root, 'src', 'components', 'alternatives')
const componentsDir = path.join(root, 'src', 'components')
const presentationApp = path.join(root, 'src', 'PresentationApp.jsx')

const EM_DASH = /—/u
const EXCLAMATION = /!/u
// Common emoji ranges; deliberately conservative to avoid false positives on plain text.
const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u

function listFilesRecursive(dir) {
  const entries = readdirSync(dir)
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry)
    if (statSync(full).isDirectory()) {
      files.push(...listFilesRecursive(full))
    } else if (entry.endsWith('.jsx')) {
      files.push(full)
    }
  }
  return files
}

function lintFile(filePath, { emDashOnly = false } = {}) {
  const contents = readFileSync(filePath, 'utf8')
  const issues = []
  contents.split('\n').forEach((line, i) => {
    if (EM_DASH.test(line)) issues.push({ line: i + 1, rule: 'em dash', text: line.trim() })
    if (!emDashOnly && EXCLAMATION.test(line)) issues.push({ line: i + 1, rule: 'exclamation point', text: line.trim() })
    if (!emDashOnly && EMOJI.test(line)) issues.push({ line: i + 1, rule: 'emoji', text: line.trim() })
  })
  return issues
}

function report(file, issues) {
  if (issues.length === 0) return 0
  console.error(`\n${path.relative(root, file)}`)
  for (const issue of issues) {
    console.error(`  line ${issue.line}: ${issue.rule} -- ${issue.text}`)
  }
  return issues.length
}

function main() {
  const slideFiles = [slidesDir, alternativesDir]
    .filter((dir) => existsSync(dir))
    .flatMap((dir) => readdirSync(dir).filter((f) => f.endsWith('.jsx')).map((f) => path.join(dir, f)))

  let total = 0
  let filesChecked = 0

  for (const file of slideFiles) {
    total += report(file, lintFile(file))
    filesChecked += 1
  }

  const chromeFiles = listFilesRecursive(componentsDir).filter((f) => !f.startsWith(slidesDir) && !f.startsWith(alternativesDir))
  for (const file of [...chromeFiles, presentationApp]) {
    total += report(file, lintFile(file, { emDashOnly: true }))
    filesChecked += 1
  }

  if (total > 0) {
    console.error(`\nlint-copy: ${total} brand rule violation(s) found.`)
    process.exit(1)
  }

  console.log(`lint-copy: ${filesChecked} file(s) clean.`)
}

main()
