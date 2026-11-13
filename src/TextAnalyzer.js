import { WordAnalyzer } from './WordAnalyzer.js'
import { SentenceAnalyzer } from './SentenceAnalyzer.js'
import { CharacterAnalyzer } from './CharacterAnalyzer.js'

/**
 * Analyzes a text and provides statistics about its contents.
 *
 * TextAnalyzer can be used to get words, count words, count sentences, count upper- and lower letters,
 * get longest and shortest words, get average word length, get average words per sentence,
 * count characters, with or without whitespace, count numbers, count letters and get most common words. 
 *
 * @example
 * const analyzer = new TextAnalyzer('Hello world!')
 * analyzer.getWordCount() // Returns 2
 * @param {string} text - The text to analyze.
 */
export class TextAnalyzer {
  #wordAnalyzer
  #sentenceAnalyzer
  #characterAnalyzer

  /**
   * Creates a TextAnalyzer for the provided text.
   *
   * @param {string} text - The text to analyze.
   */
  constructor(text) {
    this.#wordAnalyzer = new WordAnalyzer(text)
    this.#sentenceAnalyzer = new SentenceAnalyzer(text)
    this.#characterAnalyzer = new CharacterAnalyzer(text)
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
    return this.#sentenceAnalyzer.getSentenceCount()
  }

  /**
   * Counts the number of uppercase letters in the text.
   *
   * @returns {number} The number of uppercase letters in the text.
   */
  getUppercaseCount() {
    return this.#characterAnalyzer.getUppercaseCount()
  }

  /**
   * Counts the number of lowercase letters in the text.
   *
   * @returns {number} The number of lowercase letters in the text.
   */
  getLowercaseCount() {
    return this.#characterAnalyzer.getLowercaseCount()
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
    return this.#characterAnalyzer.getCharacterCount()
  }

  /**
   * Counts the number of UTF-16 code units in the text excluding,
   * whitespace characters, such as spaces, tabs or line breaks.
   *
   * @returns {number} The number of UTF-16 code units in the text,
   * excluding whitespace characters.
   */
  getCharacterCountWithoutWhitespace() {
    return this.#characterAnalyzer.getCharacterCountWithoutWhitespace()
  }

  /**
   * Counts the number of numeric characters in the text.
   *
   * @returns {number} The number of numeric characters in the text.
   */
  getNumberCount() {
    return this.#characterAnalyzer.getNumberCount()
  }

  /**
   * Counts the number of letters in the text.
   *
   * @returns {number} The number of letters in the text.
   */
  getLetterCount() {
    return this.#characterAnalyzer.getLetterCount()
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
