/**
 * CharacterAnalyzer can be used to extract words, count words and,
 * to calculate word length statistics...
 */
export class CharacterAnalyzer {
  #text

  /**
   * Creates a CharacterAnalyzer for the provided text.
   *
   * @param {string} text - The text to analyze.
   */
  constructor(text) {
    this.#text = text
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
    return this.#extractCharacters(/\S/g).length
  }

  /**
   * Counts the number of numeric characters in the text.
   *
   * @returns {number} The number of numeric characters in the text.
   */
  getNumberCount() {
    return this.#extractCharacters(/\d/g).length
  }

  /**
   * Counts the number of letters in the text.
   *
   * @returns {number} The number of letters in the text.
   */
  getLetterCount() {
    return this.#extractCharacters(/[a-zåäö]/gi).length
  }

  /**
   * Counts the number of uppercase letters in the text.
   *
   * @returns {number} The number of uppercase letters in the text.
   */
  getUppercaseCount() {
    return this.#extractCharacters(/[A-ZÅÄÖ]/g).length
  }

  /**
   * Counts the number of lowercase letters in the text.
   *
   * @returns {number} The number of lowercase letters in the text.
   */
  getLowercaseCount() {
    return this.#extractCharacters(/[a-zåäö]/g).length
  }

  /**
   * Helper method to extract characters matching a regex.
   *
   * @param {RegExp} regex - The regular expression to match.
   * @returns {string[]} The extracted characters.
   */
  #extractCharacters(regex) {
    return this.#text.match(regex) || []
  }
}
