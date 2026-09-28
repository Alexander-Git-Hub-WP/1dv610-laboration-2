import { describe, it, expect } from 'vitest'
import { TextAnalyzer } from "./TextAnalyzer"

describe('getWordCount()', () => {
  it('should count the number of words', () => {
    const analyzer = new TextAnalyzer('Hello my beautiful world')
    const result = analyzer.getWordCount()
    expect(result).toBe(4)
  })

  it('should return zero when the text input is empty', () => {
    const analyzer = new TextAnalyzer('')
    const result = analyzer.getWordCount()
    expect(result).toBe(0)
  })

  it('should count multiple spaces between words as one separator', () => {
    const analyzer = new TextAnalyzer('Hello  my   world')
    const result = analyzer.getWordCount()
    expect(result).toBe(3)
  })

  it('should treat tabs and line breaks as word separators', () => {
    const analyzer = new TextAnalyzer('Hello\nmy\nbeautiful\tworld\tagain')
    const result = analyzer.getWordCount()
    expect(result).toBe(5)
  })

  it('should not count whitespace before and after the text as words', () => {
    const analyzer = new TextAnalyzer('  \n\tHello beautiful world again\t\n  ')
    const result = analyzer.getWordCount()
    expect(result).toBe(4)
  })
})
