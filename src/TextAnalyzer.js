/**
 * Analyzes a text and provides statistics about its contents.
 *
 * TextAnalyzer can be used to count words.
 *
 * @example
 * const analyzer = new TextAnalyzer('Hello world!')
 * analyzer.getWordCount() // Returns 2
 * @param {string} text - The text to analyze.
 */
export class TextAnalyzer {
  #text

  /**
   * Creates a TextAnalyzer for the provided text.
   *
   * @param {string} text - The text to analyze.
   */
  constructor(text) {
    this.#text = text
  }

  /**
   * Counts the number of words in the text.
   *
   * Words are separated by one or more whitespace characters,
   * such as spaces, tabs or line breaks.
   *
   * @returns {number} The number of words in the text.
   */
  getWordCount() {
    const words = this.#text.split(/\s+/)

    let wordCount = 0

    for (const word of words) {
      if (word !== '') {
        wordCount++
      }
    }

    return wordCount
  }
}
