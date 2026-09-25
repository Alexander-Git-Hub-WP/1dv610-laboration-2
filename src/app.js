#!/usr/bin/env node

import { TextAnalyzer } from './TextAnalyzer.js'

/**
 * Extracts the text argument from the command line.
 *
 * @example
 * parseArgs(['Ada Lovelace']) // Returns 'Ada Lovelace'
 * parseArgs([]) // Returns undefined
 * @param {string[]} argv - Command-line arguments, excluding the node
 *   executable and script path (i.e. `process.argv.slice(2)`).
 * @returns {string|undefined} The first text argument, if any.
 */
export function parseArgs(argv) {
  return argv[0]
}

/**
 * Execution entry point.
 */
function main() {
  console.log('📊 Text Analyzer')

  try {
    const text = parseArgs(process.argv.slice(2))

    if (!text) {
      console.error('Please provide some text to analyze.')
      process.exitCode = 1
      return
    }

    const analyzer = new TextAnalyzer(text)

    console.log(`\nText: ${text}`)
    console.log(`Words: ${analyzer.getWordCount()}`)
    console.log(`Sentences: ${analyzer.getSentenceCount()}`)
    console.log(`Uppercase: ${analyzer.getUppercaseCount()}`)
    console.log(`Lowercase: ${analyzer.getLowercaseCount()}`)
    console.log(`Longest word: ${analyzer.getLongestWord()}`)
    console.log(`Shortest word: ${analyzer.getShortestWord()}`)
    console.log(`Average word length: ${analyzer.getAverageWordLength()}`)
    console.log(`Average words per sentence: ${analyzer.getAverageWordsPerSentence()}`)
    console.log(`Characters: ${analyzer.getCharacterCount()}`)
    console.log(`Characters without whitespace: ${analyzer.getCharacterCountWithoutWhitespace()}`)
    console.log(`Numbers: ${analyzer.getNumberCount()}`)
  } catch (error) {
    console.error(
      'An unexpected error occurred during execution:',
      error.message
    )

    process.exitCode = 1
  }
}

main()
