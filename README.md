# TextAnalyzer

Welcome to Text Analyzer, a JavaScript module for analyzing text and retrieving statistics about its contents.

The module provides a reusable TextAnalyzer class that can be used by other programmers to analyze words, sentences, characters, letters, numbers and word frequency in a text.

## 🚀 Features

- **Text analysis:** Analyze text and retrieve different statistics about its contents.
- **Word analysis:** Count words and find the longest and shortest words.
- **Sentence analysis:** Count sentences and calculate the average number of words per sentence.
- **Character analysis:** Count characters, letters, numbers and whitespace.
- **Word statistics:** Calculate average word length and find the most common words.
- **Swedish alphabet support:** Word and letter analysis supports the Swedish alphabet (A–Z, Å, Ä and Ö). Characters outside the Swedish alphabet are treated as word separators.
- **Modern ECMAScript Modules (ESM):** Full native support for `import`/`export` syntax.
- **Unit Testing:** Pre-configured with [Vitest](https://vitest.dev) for automated unit testing.
- **Linting & Code Quality:** Strict code analysis using [ESLint](https://eslint.org) integrated with custom `@lnu/eslint-config` rules.
- **Code Formatting:** Automatic code style management via [Prettier](https://prettier.io).

The module focuses on basic text statistics. It does not provide advanced linguistic analysis such as grammar analysis, sentiment analysis or semantic analysis.

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have **Node.js** (version 24.12.0 or later) and **Git** installed on your machine.

### Installation

1. Clone the repository and move into your repository directory:

   ```bash
   git clone https://github.com/Alexander-Git-Hub-WP/1dv610-laboration-2.git
   cd 1dv610-laboration-2
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

The external dependencies are used for development, testing, linting and formatting. The TextAnalyzer module itself does not require an external library to perform its text analysis.

---

## 💻 Available Scripts

You can manage the application, testing, and formatting using the following npm scripts:

### Running the Application

Starts the command-line application entry point (src/app.js), without a text argument:

```bash
npm start
```

To analyze a specific text, provide the text as a command-line argument:

```bash
npm start -- 'Hello world'
```

The application prints the statistics calculated by TextAnalyzer.

- Note: Depending on the terminal environment, single quotes (') may be required around the text argument instead of double quotes (").

### Running Tests

- Interactive Watch Mode (Recommended for development):
  ```bash
  npm test
  ```

- Single Execution Run:
  ```bash
  npm run test:run
  ```

- Run Specific Tests (by matching name patterns):
  ```bash
  npm run test:match -- <test-name-pattern>
  ```

###  Code Linting

- Analyze the source code in `src/` for errors, syntax issues, and anti-patterns:
  ```bash
  npm run lint
  ```

- Automatically fix fixable linting issues:
  ```bash
  npm run lint:fix
  ```

### Formatting

- Check if files comply with Prettier styling rules:
  ```bash
  npm run format:check
  ```

- Automatically reformat all source files:
  ```bash
  npm run format
  ```

---

## 🧩 Using TextAnalyzer

The main reusable part of the project is the TextAnalyzer class.
Import the class into your JavaScript application:

```javascript
import { TextAnalyzer } from './src/TextAnalyzer.js'

const analyzer = new TextAnalyzer('Hello world! How are you?')

console.log(analyzer.getWordCount()) // 5
console.log(analyzer.getSentenceCount()) // 2
console.log(analyzer.getLongestWords()) // ['Hello', 'world']
console.log(analyzer.getShortestWords()) // ['How', 'are', 'you']
console.log(analyzer.getMostCommonWords()) // ['hello', 'world', 'how', 'are', 'you']
```

---

## 📚 Available Methods

| Method | Description |
|---|---|
| `getWords()` | Extracts words consisting of one or more letters from the Swedish alphabet (A-Z, Å, Ä, Ö). All other characters are treated as word separators. |
| `getWordCount()` | Counts words consisting of one or more letters from the Swedish alphabet. |
| `getSentenceCount()` | Counts sentences containing at least one letter from the Swedish alphabet. |
| `getUppercaseCount()` | Counts uppercase letters from the Swedish alphabet. |
| `getLowercaseCount()` | Counts lowercase letters from the Swedish alphabet. |
| `getLongestWords()` | Returns all words with the longest length, using Swedish alphabet characters only. |
| `getShortestWords()` | Returns all words with the shortest length, using Swedish alphabet characters only. |
| `getAverageWordLength()` | Returns the rounded average length of words consisting of Swedish alphabet characters. |
| `getAverageWordsPerSentence()` | Returns the rounded average number of words per sentence. |
| `getCharacterCount()` | Counts all UTF-16 code units, including whitespace and punctuation. |
| `getCharacterCountWithoutWhitespace()` | Counts all UTF-16 code units except whitespace. |
| `getNumberCount()` | Counts numeric characters (0–9). |
| `getLetterCount()` | Counts uppercase and lowercase letters from the Swedish alphabet. |
| `getMostCommonWords()` | Returns the most frequent words, compared case-insensitively, in lowercase. |

---

## 📁 Project Structure

```text
├── src/
│   ├── app.js                # Command-line interface for using TextAnalyzer
│   ├── app.test.js           # Unit tests for the command-line application
│   ├── TextAnalyzer.js       # Reusable TextAnalyzer module
│   └── TextAnalyzer.test.js  # Unit tests for TextAnalyzer
├── TEST_REPORT.md            # Test report
├── package.json              # Project configuration, scripts, and dependencies
└── LICENSE                   # Unlicense (Public Domain dedication)
```

The TextAnalyzer.js file contains the reusable module intended for other programmers.
The app.js file is a separate test application used to manually run and inspect the module.

---

## 🧪 Testing

The module is tested using automated unit tests with Vitest.
The test suite covers the public methods of TextAnalyzer, including:

- Normal text input
- Empty text
- Whitespace and punctuation
- Uppercase and lowercase letters
- Swedish letters
- Numbers
- Longest and shortest words
- Average word length
- Average words per sentence
- Most common words

The command-line argument parser in app.js is tested separately in app.test.js.
The detailed testing process and results are documented in TEST_REPORT.md.

---

## ⚖️ License

This project is released into the public domain under the **Unlicense**. You are free to copy, modify, publish, and distribute this boilerplate code in any way you see fit without any restrictions.
