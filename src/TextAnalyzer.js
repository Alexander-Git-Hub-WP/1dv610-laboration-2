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

  /**
   * Counts the number of sentences in the text.
   *
   * A sentence ends with a period, exclamation mark or question mark.
   *
   * @returns {number} The number of sentences in the text.
   */
  getSentenceCount() {
    const sentences = this.#text.split(/[.!?]+/)

    let sentenceCount = 0

    for (const sentence of sentences) {
      if (sentence !== '') {
        sentenceCount++
      }
    }

    return sentenceCount
  }

  /**
   * Counts the number of uppercase letters in the text.
   *
   * @returns {number} The number of uppercase letters in the text.
   */
  getUppercaseCount() {
    const uppercases = this.#text.match(/[A-ZÅÄÖ]/g) || []

    return uppercases.length
  }

  /**
   * Counts the number of lowercase letters in the text.
   *
   * @returns {number} The number of lowercase letters in the text.
   */
  getLowercaseCount() {
    const lowercases = this.#text.match(/[a-zåäö]/g) || []

    return lowercases.length
  }

  /**
   * Gets the longest word in the text.
   *
   * @returns {string} The longest word in the text.
   */
  getLongestWord() {
    const words = this.#text.split(/\s+/)

    let longestWord = ''

    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word
      }
    }

    return longestWord
  }
  
  /**
   * Gets the average length of all words in the text.
   *
   * @returns {number} The average length of all words in the text.
   */
  getAverageWordLength() {
    const words = this.#text.split(/\s+/)
    const wordCount = this.getWordCount()

    let totalWordLength = 0

    for (const word of words) {
      if (word !== '') {
        totalWordLength += word.length
      }
    }

    return totalWordLength / wordCount
  }
  
}
