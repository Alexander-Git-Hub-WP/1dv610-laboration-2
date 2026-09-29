# TextAnalyzer

Welcome to Text Analyzer, a JavaScript module for analyzing text and retrieving statistics about its contents.

The module provides a reusable TextAnalyzer class that can be used by other programmers to analyze words, sentences, characters, letters, numbers and word frequency in a text.

## 🚀 Features

- **Text analysis:** Analyze text and retrieve different statistics about its contents.
- **Word analysis:** Count words and find the longest and shortest words.
- **Sentence analysis:** Count sentences and calculate the average number of words per sentence.
- **Character analysis:** Count characters, letters, numbers and whitespace.
- **Word statistics:** Calculate average word length and find the most common words.
- **Swedish letter support:** Supports the Swedish letters å, ä and ö.
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

console.log(analyzer.getWordCount())
console.log(analyzer.getSentenceCount())
console.log(analyzer.getLongestWords())
console.log(analyzer.getShortestWords())
console.log(analyzer.getMostCommonWords())
```

---

## 📚 Available Methods

| Method | Description |
|---|---|
| `getWordCount()` | Counts the number of words in the text. |
| `getSentenceCount()` | Counts the number of sentences in the text. |
| `getUppercaseCount()` | Counts uppercase letters. |
| `getLowercaseCount()` | Counts lowercase letters. |
| `getLongestWords()` | Returns all words with the longest length. |
| `getShortestWords()` | Returns all words with the shortest length. |
| `getAverageWordLength()` | Returns the rounded average word length. |
| `getAverageWordsPerSentence()` | Returns the rounded average number of words per sentence. |
| `getCharacterCount()` | Counts all characters, including whitespace. |
| `getCharacterCountWithoutWhitespace()` | Counts all characters except whitespace. |
| `getNumberCount()` | Counts numeric characters. |
| `getLetterCount()` | Counts all letters. |
| `getMostCommonWords()` | Returns all words with the highest frequency. |

Words consist of one or more letters. Non-letter characters are treated as word separators. Swedish letters å, ä and ö are supported.
Words are compared case-insensitively when calculating the most common words.

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
