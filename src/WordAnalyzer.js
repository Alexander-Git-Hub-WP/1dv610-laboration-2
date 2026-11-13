/**
 * WordAnalyzer can be used to extract words, get words, count words,
 * get longest and shortest words, get average word length, and most common words.
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
   * Gets words from the text.
   *
   * Words consist of one or more letters from the Swedish alphabet (case-insensitive).
   * Characters outside the Swedish alphabet are treated as word separators.
   *
   * @returns {string[]} The extracted words.
   */
  getWords() {
    return this.#extractWords()
  }

  /**
   * Counts the number of words in the text.
   *
   * @returns {number} The number of words in the text.
   */
  getWordCount() {
    return this.#extractWords().length
  }

  /**
   * Gets the longest words in the text.
   *
   * @returns {string[]} The longest words in the text.
   */
  getLongestWords() {
    return this.#findLongestOrShortestWords('longest')
  }

  /**
   * Gets the shortest words in the text.
   *
   * @returns {string[]} The shortest words in the text.
   */
  getShortestWords() {
    return this.#findLongestOrShortestWords('shortest')
  }

  /**
   * Gets the average length of all words in the text.
   * The result is rounded to the nearest whole number.
   *
   * @returns {number} The rounded average word length.
   */
  getAverageWordLength() {
    const words = this.#extractWords()

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
    const wordCounts = this.#findWordFrequencies()
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

  /**
   * Helper method to extract words from the text.
   *
   * Words consist of one or more letters from the Swedish alphabet (case-insensitive).
   * Characters outside the Swedish alphabet are treated as word separators.
   *
   * @returns {string[]} The extracted words.
   */
  #extractWords() {
    return this.#text.match(/[A-ZÅÄÖ]+/gi) || []
  }

  /**
   * Helper method to find either the longest or shortest words.
   *
   * @param {string} target - 'longest' or 'shortest'
   * @returns {string[]} - The matching words.
   */
  #findLongestOrShortestWords(target) {
    const words = this.#findUniqueWords()

    if (words.length === 0) {
      return []
    }

    let targetLength = words[0].length
    const result = []

    for (const word of words) {
      if (target === 'longest') {
        if (word.length > targetLength) {
          targetLength = word.length
          result.length = 0
          result.push(word)
        } else if (word.length === targetLength) {
          result.push(word)
        }
      }

      if (target === 'shortest') {
        if (word.length < targetLength) {
          targetLength = word.length
          result.length = 0
          result.push(word)
        } else if (word.length === targetLength) {
          result.push(word)
        }
      }
    }

    return result
  }

  /**
   * Helper method to find word frequencies from the text.
   *
   * @returns {{ [word: string]: number}} Each word (case-insensitive) with its frequency count
   */
  #findWordFrequencies() {
  const words = this.#extractWords()
  const wordCounts = {}

    for (const word of words) {
        const normalizedWord = word.toLowerCase()

        if (wordCounts[normalizedWord]) {
          wordCounts[normalizedWord]++
        } else {
          wordCounts[normalizedWord] = 1
        }
    }

    return wordCounts
  }

  /**
   * Helper method to find unique words from the text.
   *
   * @returns {string[]} Each unique word (case-insensitive)
   */
  #findUniqueWords() {
    const words = this.#extractWords()
    const uniqueWords = []

    for (const word of words) {
      const normalizedWord = word.toLowerCase()

      if (!uniqueWords.includes(normalizedWord)) {
        uniqueWords.push(normalizedWord)
      }
    }
    return uniqueWords
  }
}
