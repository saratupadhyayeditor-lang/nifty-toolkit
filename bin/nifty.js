import { slugify } from '../lib/slugify.js'
import { wordCount } from '../lib/wordcount.js'

const HELP = `
nifty-toolkit v1.0.0

Usage:
  nifty <command> [args]

Commands:
  slug <text>          Convert text into a URL-friendly slug
  words <text>         Count words, lines, and characters in text
  help                 Show this help message

Examples:
  nifty slug "Hello, World!"
  nifty words "The quick brown fox"
`

const args = process.argv.slice(2)
const command = args[0]
const rest = args.slice(1)

switch (command) {
  case 'slug':
    if (rest.length === 0) {
      console.error('Error: missing text argument')
      process.exit(1)
    }
    console.log(slugify(rest.join(' ')))
    break
  case 'words':
    if (rest.length === 0) {
      console.error('Error: missing text argument')
      process.exit(1)
    }
    console.log(JSON.stringify(wordCount(rest.join(' ')), null, 2))
    break
  case 'help':
  case undefined:
    console.log(HELP)
    break
  default:
    console.error(`Unknown command: ${command}`)
    console.log(HELP)
    process.exit(1)
}
