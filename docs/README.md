@telegram.ts/formatters / [Exports](modules.md)

# @telegram.ts/formatters

[![NPM Version](https://img.shields.io/npm/v/@telegram.ts/formatters)](https://www.npmjs.com/package/@telegram.ts/formatters)
[![Bot API](https://img.shields.io/badge/Bot%20API-v.7.1-00aced.svg?style=flat-square&logo=telegram)](https://core.telegram.org/bots/api)
[![NPM Downloads](https://img.shields.io/npm/dt/@telegram.ts/formatters.svg?maxAge=3600)](https://www.npmjs.com/package/@telegram.ts/formatters)
[![License](https://img.shields.io/npm/l/@telegram.ts/formatters)](https://github.com/telegramsjs/plugins/blob/main/LICENSE)

`@telegram.ts/formatters` is a TypeScript library that provides functions for formatting messages according to the Telegram API's formatting rules. It offers a set of functions for applying various text formatting styles.

## Features

- **Text Formatting:** Apply bold, italic, underline, strikethrough, and spoiler formatting to text.
- **Inline URLs and Mentions:** Create clickable inline URLs and user mentions within messages.
- **Emoji Support:** Embed emojis into messages for expressive communication.
- **Code Blocks:** Format text as inline or pre-formatted code blocks with syntax highlighting support.

## Installation

You can install `@telegram.ts/formatters` via npm or yarn:

```bash
npm install @telegram.ts/formatters
# or
yarn add @telegram.ts/formatters
```

## Usage

```typescript
import {
    html: {
    bold,
    italic,
    underline,
    strikethrough,
    spoiler,
    inlineURL,
    inlineMention,
    inlineEmoji,
    inlineCode,
    codeBlock,
    }
} from '@telegram.ts/formatters';

// Apply text formatting
const formattedText = bold('bold text') + '\n' +
    italic('italic text') + '\n' +
    underline('underline') + '\n' +
    strikethrough('strikethrough') + '\n' +
    spoiler('spoiler');

console.log(formattedText);
```

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/telegramsjs/formatters/blob/main/LICENSE) file for details.
