/**
 * WordAnalyzer can be used to extract words, count words and,
 * to calculate word length statistics...
 */
export class WordAnalyzer {
  #text

  /**
   * Creates a WordAnalyzer for the provided text.
   *
   * @param {string} text - The text to analyze.
   */
  constructor(text) {
    this.#text = text
  }

  /**
   * Extracts words from the text.
   *
   * Words consist of one or more letters from the Swedish alphabet.
   * Characters outside the Swedish alphabet are treated as word separators.
   *
   * @returns {string[]} The words in the text.
   */
  getWords() {
    return this.#text.match(/[A-ZÅÄÖ]+/gi) || []
  }

  /**
   * Counts the number of words in the text.
   *
   * @returns {number} The number of words in the text.
   */
  getWordCount() {
    const words = this.getWords()

    return words.length
  }

  /**
   * Gets the longest words in the text.
   *
   * @returns {string[]} The longest words in the text.
   */
  getLongestWords() {
    const words = this.getWords()
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
   * @returns {string[]} The shortest words in the text.
   */
  getShortestWords() {
    const words = this.getWords()
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
   * @returns {number} The rounded average word length.
   */
  getAverageWordLength() {
    const words = this.getWords()

    if (words.length === 0) {
      return 0
    }

    let totalWordLength = 0

    for (const word of words) {
      totalWordLength += word.length
    }

    return Math.round(totalWordLength / words.length)
  }
  
  /**
   * Gets the most common words in the text.
   *
   * Words are compared case-insensitively and returned in lowercase.
   *
   * @returns {string[]} The most common words in the text.
   */
  getMostCommonWords() {
    const words = this.getWords()
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
