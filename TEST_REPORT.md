# Test Report

## Summary

*Briefly describe how you tested your module, and why you chose that approach — clearly enough
that someone else could carry out the same tests. What was hardest to test, and why?*

*If you used a testing framework, you may link to its generated report or include screenshots of
the test run here.*

**Answer:** The TextAnalyzer module was tested using automated unit tests with Vitest. The tests focus on the public methods of the TextAnalyzer class and verify that the methods return the expected results for different types of text input.
The tests cover normal text, empty text, whitespace, punctuation, uppercase and lowercase letters, numbers, Swedish letters (å, ä, and ö), word lengths, sentence lengths, character counts, and word frequency.

The command-line argument handling in app.js was tested separately to verify that text provided through the command line is correctly passed to TextAnalyzer.

Automated tests were chosen because they make it possible to repeatedly verify the expected behaviour of the module and quickly detect errors when the code is changed.

One of the more challenging parts to test was the handling of words and sentences because punctuation, whitespace, numbers, and Swedish characters can affect how text is interpreted. These cases were therefore included explicitly in the test suite.

Also it was challenging to decide when enough tests had been written to provide good coverage. It can be difficult to know when to stop adding test cases, and if or how much coverage they add compared to previous ones, since there are always additional edge cases and input variations that could be tested. I focused on covering the main functionality, expected input variations, and important edge cases without trying to make the test suite unnecessarily large.

## Test Results

| What was tested                                                        | How it was tested                                                                                                       | Result                                                                       |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `getWordCount()` returns the total number of words in the text argument. | Automated unit tests (Vitest): tested normal text, empty text, multiple spaces, tabs, line breaks, and surrounding whitespace. | ✅ Passed.                                                                    |
| `getSentenceCount()` returns the total number of sentences in the text argument.         | Automated unit tests (Vitest): tested multiple sentences, different sentence-ending punctuation, consecutive punctuation, sentences without ending punctuation, and text containing only punctuation.	| ✅ Passed.                                                    |
| `getUppercaseCount()` returns the total number of uppercase letters in the text argument.         | Automated unit tests (Vitest): tested uppercase and lowercase letters, Swedish uppercase letters, numbers, spaces, and punctuation.	| ✅ Passed.                                                  |
| `getLowercaseCount()` returns the total number of lowercase letters in the text argument.         | Automated unit tests (Vitest): tested lowercase and uppercase letters, Swedish lowercase letters, numbers, spaces, and punctuation.	| ✅ Passed.                                                  |
| `getLongestWords()` returns all words with longest length in the text argument.	        | Automated unit tests (Vitest): tested different word lengths, word positions, punctuation, multiple words with the same length, and Swedish letters.	| ✅ Passed.   |
| `getShortestWords()` returns all words with the shortest length in the text argument.	        | Automated unit tests (Vitest): tested different word lengths, word positions, punctuation, multiple words with the same length, and Swedish letters.	| ✅ Passed.   |
| `getAverageWordLength()` returns the rounded average word length in the text argument.	        | Automated unit tests (Vitest): tested different word lengths, punctuation, Swedish letters, rounding, and text containing no words.		| ✅ Passed.   |
| `getAverageWordsPerSentence()` returns the rounded average number of words per sentence.	        | Automated unit tests (Vitest): tested sentences with different numbers of words, rounding, punctuation, Swedish letters, and text containing no sentences.			| ✅ Passed.   |
| `getCharacterCount()` returns the total number of characters in the text argument.	        | Automated unit tests (Vitest): tested letters, spaces, punctuation, numbers, and empty text.			| ✅ Passed.   |
| `getCharacterCountWithoutWhitespace()` returns the number of characters excluding whitespace.	        | Automated unit tests (Vitest): tested spaces, tabs, line breaks, punctuation, and text containing only whitespace.			| ✅ Passed.   |
| `getNumberCount()` returns the total number of numeric characters in the text argument.	        | Automated unit tests (Vitest): tested numbers alone, numbers mixed with letters and punctuation, and text containing no numbers.			| ✅ Passed.   |
| `getLetterCount()` returns the total number of letters in the text argument.	        | Automated unit tests (Vitest): tested uppercase and lowercase letters, Swedish letters, numbers, spaces, punctuation, and text containing no letters.			| ✅ Passed.   |
| `getMostCommonWords()` returns all words with the highest frequency.		        | Automated unit tests (Vitest): tested repeated words, word positions, punctuation, different letter casing, Swedish letters, and text containing no words.				| ✅ Passed.   |
| Command-line arguments are passed correctly from `app.js` to `TextAnalyzer`.				        | Automated unit tests (Vitest): tested a provided text argument and the case where no argument is provided.						| ✅ Passed.   |
