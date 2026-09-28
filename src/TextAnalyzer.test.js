import { describe, it, expect } from 'vitest'
import { TextAnalyzer } from "./TextAnalyzer"

describe('getWordCount()', () => {
  it('should count the number of words', () => {
    const result = new TextAnalyzer('Hello my beautiful world')
    expect(result.getWordCount()).toBe(4)
  })

  it('should return zero when the text input is empty', () => {
    const result = new TextAnalyzer('')
    expect(result.getWordCount()).toBe(0)
  })

  it('should count multiple spaces between words as one separator', () => {
    const result = new TextAnalyzer('Hello  my   world')
    expect(result.getWordCount()).toBe(3)
  })

  it('should treat tabs and line breaks as word separators', () => {
    const result = new TextAnalyzer('Hello\nmy\nbeautiful\tworld\tagain')
    expect(result.getWordCount()).toBe(5)
  })

  it('should not count whitespace before and after the text as words', () => {
    const result = new TextAnalyzer('  \n\tHello beautiful world again\t\n  ')
    expect(result.getWordCount()).toBe(4)
  })
})
