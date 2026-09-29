import { describe, it, expect } from 'vitest'
import { TextAnalyzer } from './TextAnalyzer'

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

describe('getSentenceCount()', () => {
  it('should count the number of sentences', () => {
    const analyzer = new TextAnalyzer('Hello my beautiful world! How are you doing today?')
    const result = analyzer.getSentenceCount()
    expect(result).toBe(2)
  })

  it('should return zero when the text is empty', () => {
    const analyzer = new TextAnalyzer('')
    const result = analyzer.getSentenceCount()
    expect(result).toBe(0)
  })

  it('should count sentences ending with periods, exclamation marks and question marks', () => {
    const analyzer = new TextAnalyzer('Hello. How are you? I am fine!')
    const result = analyzer.getSentenceCount()
    expect(result).toBe(3)
  })

  it('should treat consecutive sentence-ending punctuation marks as one separator', () => {
    const analyzer = new TextAnalyzer('Hello!? Really?! Yes...')
    const result = analyzer.getSentenceCount()
    expect(result).toBe(3)
  })

  it('should count a sentence without ending punctuation', () => {
    const analyzer = new TextAnalyzer('Hello my beautiful world')
    const result = analyzer.getSentenceCount()
    expect(result).toBe(1)
  })

  it('should return zero when the text only contains sentence-ending punctuation', () => {
    const analyzer = new TextAnalyzer('!...???')
    const result = analyzer.getSentenceCount()
    expect(result).toBe(0)
  })
})

describe('getUppercaseCount()', () => {
  it('should count uppercase letters', () => {
    const analyzer = new TextAnalyzer('Hello WORLD')
    const result = analyzer.getUppercaseCount()
    expect(result).toBe(6)
  })

  it('should return zero when the text contains no uppercase letters', () => {
    const analyzer = new TextAnalyzer('hello world')
    const result = analyzer.getUppercaseCount()
    expect(result).toBe(0)
  })

  it('should count Swedish uppercase letters', () => {
    const analyzer = new TextAnalyzer('åäöÅÄÖ')
    const result = analyzer.getUppercaseCount()
    expect(result).toBe(3)
  })

  it('should not count numbers, spaces or punctuation as uppercase letters', () => {
    const analyzer = new TextAnalyzer('Hello 123!?')
    const result = analyzer.getUppercaseCount()
    expect(result).toBe(1)
  })
})

describe('getLowercaseCount()', () => {
  it('should count lowercase letters', () => {
    const analyzer = new TextAnalyzer('Hello WORLD')
    const result = analyzer.getLowercaseCount()
    expect(result).toBe(4)
  })

  it('should return zero when the text contains no lowercase letters', () => {
    const analyzer = new TextAnalyzer('HELLO WORLD')
    const result = analyzer.getLowercaseCount()
    expect(result).toBe(0)
  })

  it('should count Swedish lowercase letters', () => {
    const analyzer = new TextAnalyzer('åäöÅÄÖ')
    const result = analyzer.getLowercaseCount()
    expect(result).toBe(3)
  })

  it('should not count numbers, spaces or punctuation as lowercase letters', () => {
    const analyzer = new TextAnalyzer('Hello 123!?')
    const result = analyzer.getLowercaseCount()
    expect(result).toBe(4)
  })
})

describe('getLongestWords()', () => {
  it('should return the longest words', () => {
    const analyzer = new TextAnalyzer('Hello my beautiful world')
    const result = analyzer.getLongestWords()
    expect(result).toEqual(['beautiful'])
  })

  it('should return the longest words regardless of their position', () => {
    const analyzer = new TextAnalyzer('Beautiful is the longest')
    const result = analyzer.getLongestWords()
    expect(result).toEqual(['Beautiful'])
  })

  it('should ignore punctuation when determining the longest words', () => {
    const analyzer = new TextAnalyzer('Hello dude!')
    const result = analyzer.getLongestWords()
    expect(result).toEqual(['Hello'])
  })

  it('should return all words with the longest length', () => {
    const analyzer = new TextAnalyzer('Hello my cute world!')
    const result = analyzer.getLongestWords()
    expect(result).toEqual(['Hello', 'world'])
  })

  it('should treat Swedish letters as part of a word', () => {
    const analyzer = new TextAnalyzer('Trädgårdsböcker är roliga att läsa')
    const result = analyzer.getLongestWords()
    expect(result).toEqual(['Trädgårdsböcker'])
  })
})

describe('getShortestWords()', () => {
  it('should return the shortest words', () => {
    const analyzer = new TextAnalyzer('Hello my beautiful world')
    const result = analyzer.getShortestWords()
    expect(result).toEqual(['my'])
  })

  it('should return the shortest words regardless of their position', () => {
    const analyzer = new TextAnalyzer('It will make you happy!')
    const result = analyzer.getShortestWords()
    expect(result).toEqual(['It'])
  })

  it('should ignore punctuation when determining the shortest words', () => {
    const analyzer = new TextAnalyzer('Hello dude!')
    const result = analyzer.getShortestWords()
    expect(result).toEqual(['dude'])
  })

  it('should return all words with the shortest length', () => {
    const analyzer = new TextAnalyzer('Hello beautiful world!')
    const result = analyzer.getShortestWords()
    expect(result).toEqual(['Hello', 'world'])
  })

  it('should treat Swedish letters as part of a word', () => {
    const analyzer = new TextAnalyzer('Trädgårdsböcker är roliga att läsa')
    const result = analyzer.getShortestWords()
    expect(result).toEqual(['är'])
  })
})

describe('getAverageWordLength()', () => {
  it('should return the average word length', () => {
    const analyzer = new TextAnalyzer('Hello world')
    const result = analyzer.getAverageWordLength()
    expect(result).toBe(5)
  })

  it('should calculate the average length regardless of word position', () => {
    const analyzer = new TextAnalyzer('Beautiful is fun')
    const result = analyzer.getAverageWordLength()
    expect(result).toBe(5)
  })

  it('should ignore punctuation when calculating the average word length', () => {
    const analyzer = new TextAnalyzer('Hi dude!')
    const result = analyzer.getAverageWordLength()
    expect(result).toBe(3)
  })

  it('should round the average word length to the nearest whole number', () => {
    const analyzer = new TextAnalyzer('Hi world')
    const result = analyzer.getAverageWordLength()
    expect(result).toBe(4)
  })

  it('should count Swedish letters as part of a word', () => {
    const analyzer = new TextAnalyzer('Träd är kul')
    const result = analyzer.getAverageWordLength()
    expect(result).toBe(3)
  })

  it('should return zero when the text contains no words', () => {
    const analyzer = new TextAnalyzer('')
    const result = analyzer.getAverageWordLength()
    expect(result).toBe(0)
  })
})

describe('getAverageWordsPerSentence()', () => {
  it('should return the average number of words per sentence', () => {
    const analyzer = new TextAnalyzer('Hello world. How are you?')
    const result = analyzer.getAverageWordsPerSentence()
    expect(result).toBe(3)
  })

  it('should calculate the average across sentences with different lengths', () => {
    const analyzer = new TextAnalyzer('Hello. How are you?')
    const result = analyzer.getAverageWordsPerSentence()
    expect(result).toBe(2)
  })

  it('should round the average number of words to the nearest whole number', () => {
    const analyzer = new TextAnalyzer('Hello. How are you today?')
    const result = analyzer.getAverageWordsPerSentence()
    expect(result).toBe(3)
  })

  it('should ignore punctuation when counting words', () => {
    const analyzer = new TextAnalyzer('Hello! World.')
    const result = analyzer.getAverageWordsPerSentence()
    expect(result).toBe(1)
  })

  it('should treat Swedish letters as part of words', () => {
    const analyzer = new TextAnalyzer('Är du här? Ja, det är jag.')
    const result = analyzer.getAverageWordsPerSentence()
    expect(result).toBe(4)
  })

  it('should return zero when the text contains no sentences', () => {
    const analyzer = new TextAnalyzer('')
    const result = analyzer.getAverageWordsPerSentence()
    expect(result).toBe(0)
  })
})

describe('getCharacterCount()', () => {
  it('should count all characters in the text', () => {
    const analyzer = new TextAnalyzer('Hello')
    const result = analyzer.getCharacterCount()
    expect(result).toBe(5)
  })

  it('should count spaces as characters', () => {
    const analyzer = new TextAnalyzer('Hello world')
    const result = analyzer.getCharacterCount()
    expect(result).toBe(11)
  })

  it('should count punctuation as characters', () => {
    const analyzer = new TextAnalyzer('Hello!')
    const result = analyzer.getCharacterCount()
    expect(result).toBe(6)
  })

  it('should count numbers as characters', () => {
    const analyzer = new TextAnalyzer('Hello 123')
    const result = analyzer.getCharacterCount()
    expect(result).toBe(9)
  })

  it('should return zero for an empty text', () => {
    const analyzer = new TextAnalyzer('')
    const result = analyzer.getCharacterCount()
    expect(result).toBe(0)
  })
})

describe('getCharacterCountWithoutWhitespace()', () => {
  it('should ignore spaces when counting characters', () => {
    const analyzer = new TextAnalyzer('Hello beautiful world')
    const result = analyzer.getCharacterCountWithoutWhitespace()
    expect(result).toBe(19)
  })

  it('should ignore tabs and line breaks when counting characters', () => {
    const analyzer = new TextAnalyzer('Hello\tworld\n!')
    const result = analyzer.getCharacterCountWithoutWhitespace()
    expect(result).toBe(11)
  })

  it('should count punctuation as characters', () => {
    const analyzer = new TextAnalyzer('Hello!')
    const result = analyzer.getCharacterCountWithoutWhitespace()
    expect(result).toBe(6)
  })

  it('should return zero when the text only contains whitespace', () => {
    const analyzer = new TextAnalyzer('   \t\n')
    const result = analyzer.getCharacterCountWithoutWhitespace()
    expect(result).toBe(0)
  })
})

describe('getNumberCount()', () => {
  it('should count numeric characters in the text', () => {
    const analyzer = new TextAnalyzer('There are 3 apples')
    const result = analyzer.getNumberCount()
    expect(result).toBe(1)
  })

  it('should count all numeric characters in the text', () => {
    const analyzer = new TextAnalyzer('12345')
    const result = analyzer.getNumberCount()
    expect(result).toBe(5)
  })

  it('should count numbers mixed with letters and punctuation', () => {
    const analyzer = new TextAnalyzer('Hello 123!')
    const result = analyzer.getNumberCount()
    expect(result).toBe(3)
  })

  it('should return zero when the text contains no numbers', () => {
    const analyzer = new TextAnalyzer('Hello world!')
    const result = analyzer.getNumberCount()
    expect(result).toBe(0)
  })
})

describe('getLetterCount()', () => {
  it('should count all letters in the text', () => {
    const analyzer = new TextAnalyzer('Hello World')
    const result = analyzer.getLetterCount()
    expect(result).toBe(10)
  })

  it('should count both uppercase and lowercase letters', () => {
    const analyzer = new TextAnalyzer('HELLO hello')
    const result = analyzer.getLetterCount()
    expect(result).toBe(10)
  })

  it('should treat Swedish letters as letters', () => {
    const analyzer = new TextAnalyzer('ÅÄÖ åäö')
    const result = analyzer.getLetterCount()
    expect(result).toBe(6)
  })

  it('should not count numbers, spaces or punctuation as letters', () => {
    const analyzer = new TextAnalyzer('Hello 123!?')
    const result = analyzer.getLetterCount()
    expect(result).toBe(5)
  })

  it('should return zero when the text contains no letters', () => {
    const analyzer = new TextAnalyzer('123!?')
    const result = analyzer.getLetterCount()
    expect(result).toBe(0)
  })
})

describe('getMostCommonWords()', () => {
  it('should return the most common words', () => {
    const analyzer = new TextAnalyzer('Hello, my name is Ethan and this car is blue')
    const result = analyzer.getMostCommonWords()
    expect(result).toEqual(['is'])
  })

  it('should return all words with the highest frequency', () => {
    const analyzer = new TextAnalyzer('Hello world, hello world')
    const result = analyzer.getMostCommonWords()
    expect(result).toEqual(['hello', 'world'])
  })

  it('should find the most common words regardless of their position', () => {
    const analyzer = new TextAnalyzer('World hello world')
    const result = analyzer.getMostCommonWords()
    expect(result).toEqual(['world'])
  })

  it('should ignore punctuation when counting words', () => {
    const analyzer = new TextAnalyzer('Hello! Hello, world.')
    const result = analyzer.getMostCommonWords()
    expect(result).toEqual(['hello'])
  })

  it('should treat words with different casing as same word', () => {
    const analyzer = new TextAnalyzer('Hello hello HELLO')
    const result = analyzer.getMostCommonWords()
    expect(result).toEqual(['hello'])
  })

  it('should treat Swedish letters as part of a word', () => {
    const analyzer = new TextAnalyzer('färger färger blå blå färger')
    const result = analyzer.getMostCommonWords()
    expect(result).toEqual(['färger'])
  })

  it('should return an empty array when the text contains no words', () => {
    const analyzer = new TextAnalyzer('123 !?')
    const result = analyzer.getMostCommonWords()
    expect(result).toEqual([])
  })
})
