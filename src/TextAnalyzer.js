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
   * Words consist of one or more letters. Non-letter characters
   * are treated as word separators.
   *
   * @returns {number} The number of words in the text.
   */
  getWordCount() {
    const words = this.#text.match(/[A-ZÅÄÖ]+/gi) || []

    return words.length
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
   * Gets the longest words in the text.
   *
   * Words consist of one or more letters. Non-letters characters
   * are treated as word separators.
   *
   * @returns {string[]} The longest words in the text.
   */
  getLongestWords() {
    const words = this.#text.match(/[A-ZÅÄÖ]+/gi) || []
    if (words.length === 0) {
      return []
    }

    let longestLength = words[0].length
    const longestWords = []

    for (const word of words) {
      if (word.length > longestLength) {
        longestLength = word.length
        longestWords.length = 0
        longestWords.push(word)
      } else if (word.length === longestLength) {
        longestWords.push(word)
      }
    }

    return longestWords
  }

  /**
   * Gets the shortest words in the text.
   *
   * Words consist of one or more letters. Non-letters characters
   * are treated as word separators.
   *
   * @returns {string[]} The shortest words in the text.
   */
  getShortestWords() {
    const words = this.#text.match(/[A-ZÅÄÖ]+/gi) || []

    if (words.length === 0) {
      return []
    }

    let shortestLength = words[0].length
    const shortestWords = []

    for (const word of words) {
      if (word.length < shortestLength) {
        shortestLength = word.length
        shortestWords.length = 0
        shortestWords.push(word)
      } else if (word.length === shortestLength) {
        shortestWords.push(word)
      }
    }

    return shortestWords
  }

  /**
   * Gets the average length of all words in the text.
   * The result is rounded to the nearest whole number.
   *
   * Words consist of one or more letters. Non-letter characters
   * are treated as word separators.
   *
   * @returns {number} The rounded average word length
   */
  getAverageWordLength() {
    const words = this.#text.match(/[A-ZÅÄÖ]+/gi) || []
    const wordCount = this.getWordCount()

    if (wordCount === 0) {
      return 0
    }

    let totalWordLength = 0

    for (const word of words) {
      totalWordLength += word.length
    }

    return Math.round(totalWordLength / wordCount)
  }

  /**
   * Gets the average number of words in each sentence.
   * The result is rounded to the nearest whole number.
   *
   * @returns {number} The rounded average number of words per sentence
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
   * Counts the number of all characters in the text including,
   * whitespace characters, such as spaces, tabs or line breaks.
   *
   * @returns {number} The number of characters in the text.
   */
  getCharacterCount() {
    return this.#text.length
  }

  /**
   * Counts the number of all characters in the text excluding,
   * whitespace characters, such as spaces, tabs or line breaks.
   *
   * @returns {number} The number of characters in the text.
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
   * Words consist of one or more letters. Non-letter characters
   * are treated as word separators. Words are compared case-insensitively.
   *
   * @returns {string[]} The most common words in the text.
   */
  getMostCommonWords() {
    const words = this.#text.match(/[A-ZÅÄÖ]+/gi) || []
    const wordCounts = {}

    for (const word of words) {
      const normalizedWord = word.toLowerCase()

      if (wordCounts[normalizedWord]) {
        wordCounts[normalizedWord]++
      } else {
        wordCounts[normalizedWord] = 1
      }
    }

    let highestCount = 0
    const mostCommonWords = []

    for (const word in wordCounts) {
      if (wordCounts[word] > highestCount) {
        highestCount = wordCounts[word]
        mostCommonWords.length = 0
        mostCommonWords.push(word)
      } else if (wordCounts[word] === highestCount) {
        mostCommonWords.push(word)
      }
    }

    return mostCommonWords
  }
}
