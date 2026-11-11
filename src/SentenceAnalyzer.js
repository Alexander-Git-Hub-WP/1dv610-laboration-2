/**
 * SentenceAnalyzer can be used to count sentences and,
 * to calculate word length statistics...
 */
export class SentenceAnalyzer {
  #text

  /**
   * Creates a SentenceAnalyzer for the provided text.
   *
   * @param {string} text - The text to analyze.
   */
  constructor(text) {
    this.#text = text
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
    const sentences = this.#extractSentences()
    let sentenceCount = 0

    for (const sentence of sentences) {
      if (/[A-ZÅÄÖ]/i.test(sentence)) {
        sentenceCount++
      }
    }

    return sentenceCount
  }

  /**
   * Helper method to split and extract sentences from the text.
   *
   * @returns {string[]} The extracted sentences.
   */
  #extractSentences() {
    return this.#text.split(/[.!?]+/)
  }
}
