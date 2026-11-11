import { WordAnalyzer } from './WordAnalyzer.js'

/**
 * Analyzes a text and provides statistics about its contents.
 *
 * TextAnalyzer can be used to count words, sentences, characters and letters,
 * and to calculate word length statistics.
 *
 * @example
 * const analyzer = new TextAnalyzer('Hello world!')
 * analyzer.getWordCount() // Returns 2
 * @param {string} text - The text to analyze.
 */
export class TextAnalyzer {
  #text
  #wordAnalyzer

  /**
   * Creates a TextAnalyzer for the provided text.
   *
   * @param {string} text - The text to analyze.
   */
  constructor(text) {
    this.#text = text
    this.#wordAnalyzer = new WordAnalyzer(text)
  }

  /**
   * Gets words from the text.
   * 
   * Words consist of one or more letters from the Swedish alphabet (case-insensitive).
   * Characters outside the Swedish alphabet are treated as word separators.
   *
   * @returns {string[]} The words in the text.
   */
  getWords() {
    return this.#wordAnalyzer.getWords()
  }

  /**
   * Counts the number of words in the text.
   *
   * @returns {number} The number of words in the text.
   */
  getWordCount() {
    return this.#wordAnalyzer.getWordCount()
  }

  /**
   * Counts the number of sentences in the text.
   * 
   * A sentence ends with a period, exclamation mark or question mark.
   * Only sentences containing at least one letter from the Swedish alphabet are counted.   
   *
   * @returns {number} The number of sentences in the text.
   */
  getSentenceCount() {
    return this.#wordAnalyzer.getSentenceCount()
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
   * Gets the longest words in the text.
   *
   * @returns {string[]} The longest words in the text.
   */
  getLongestWords() {
    return this.#wordAnalyzer.getLongestWords()
  }

  /**
   * Gets the shortest words in the text.
   *
   * @returns {string[]} The shortest words in the text.
   */
  getShortestWords() {
    return this.#wordAnalyzer.getShortestWords()
  }

  /**
   * Gets the average length of all words in the text.
   * 
   * The result is rounded to the nearest whole number.
   *
   * @returns {number} The rounded average word length.
   */
  getAverageWordLength() {
    return this.#wordAnalyzer.getAverageWordLength()
  }

  /**
   * Gets the average number of words in each sentence.
   * 
   * The result is rounded to the nearest whole number.
   *
   * @returns {number} The rounded average number of words per sentence.
   */
  getAverageWordsPerSentence() {
    const wordCount = this.getWordCount()
    const sentenceCount = this.getSentenceCount()

    if (sentenceCount === 0) {
      return 0
    }

    return Math.round(wordCount / sentenceCount)
  }

  /**
   * Counts the number of UTF-16 code units in the text including,
   * whitespace characters, such as spaces, tabs or line breaks.
   *
   * @returns {number} The number of UTF-16 code units in the text.
   */
  getCharacterCount() {
    return this.#text.length
  }

  /**
   * Counts the number of UTF-16 code units in the text excluding,
   * whitespace characters, such as spaces, tabs or line breaks.
   *
   * @returns {number} The number of UTF-16 code units in the text,
   * excluding whitespace characters.
   */
  getCharacterCountWithoutWhitespace() {
    const characters = this.#text.replace(/\s+/g, '')

    return characters.length
  }

  /**
   * Counts the number of numeric characters in the text.
   *
   * @returns {number} The number of numeric characters in the text.
   */
  getNumberCount() {
    const numbers = this.#text.match(/\d/g) || []

    return numbers.length
  }

  /**
   * Counts the number of letters in the text.
   *
   * @returns {number} The number of letters in the text.
   */
  getLetterCount() {
    const uppercaseCount = this.getUppercaseCount()
    const lowercaseCount = this.getLowercaseCount()

    return uppercaseCount + lowercaseCount
  }

  /**
   * Gets the most common words in the text.
   * 
   * Words are compared case-insensitively and returned in lowercase.
   *
   * @returns {string[]} The most common words in the text.
   */
  getMostCommonWords() {
    return this.#wordAnalyzer.getMostCommonWords()
  }
}
