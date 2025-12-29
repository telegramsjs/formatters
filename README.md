# @telegram.ts/formatters

[![NPM Version](https://img.shields.io/npm/v/@telegram.ts/formatters)](https://www.npmjs.com/package/@telegram.ts/formatters)
[![Bot API](https://img.shields.io/badge/Bot%20API-v.9.2-00aced.svg?style=flat-square&logo=telegram)](https://core.telegram.org/bots/api)
[![License](https://img.shields.io/npm/l/@telegram.ts/formatters)](https://github.com/telegramsjs/formatters/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue)](https://www.typescriptlang.org/)

**Powerful and type-safe text formatting library for Telegram Bot API with full HTML and MarkdownV2 support.**

## ✨ Features

- 🎨 **Multiple Format Support** - HTML, MarkdownV2, and legacy Markdown
- 🔒 **Type-Safe** - Full TypeScript support with comprehensive type definitions
- 🛡️ **Auto-Escaping** - Automatic escaping of special characters
- 🎯 **Simple API** - Intuitive and easy-to-use formatting functions
- 📦 **Zero Dependencies** - Lightweight with no external dependencies
- 🔧 **Flexible** - Works with any Telegram bot library
- ⚡ **Fast** - Optimized for performance
- 📚 **Well-Documented** - Extensive documentation and examples

## 📦 Installation

```bash
npm install @telegram.ts/formatters
```

```bash
yarn add @telegram.ts/formatters
```

```bash
pnpm add @telegram.ts/formatters
```

## 🚀 Quick Start

```typescript
import { html, markdownv2 } from "@telegram.ts/formatters";

// HTML formatting
const htmlText =
  html.bold("Bold text") +
  "\n" +
  html.italic("Italic text") +
  "\n" +
  html.underline("Underlined text") +
  "\n" +
  html.inlineURL("Click here", "https://example.com");

// MarkdownV2 formatting
const markdownText =
  markdownv2.bold("Bold text") +
  "\n" +
  markdownv2.italic("Italic text") +
  "\n" +
  markdownv2.strikethrough("Strikethrough text");

// Send with your bot library
await bot.sendMessage(chatId, htmlText, { parse_mode: "HTML" });
await bot.sendMessage(chatId, markdownText, { parse_mode: "MarkdownV2" });
```

## 📖 Usage

### HTML Formatting

```typescript
import { html } from "@telegram.ts/formatters";

// Basic formatting
html.bold("Bold text"); // <b>Bold text</b>
html.italic("Italic text"); // <i>Italic text</i>
html.underline("Underlined"); // <u>Underlined</u>
html.strikethrough("Strikethrough"); // <s>Strikethrough</s>
html.spoiler("Spoiler text"); // <span class="tg-spoiler">Spoiler text</span>

// Links and mentions
html.inlineURL("Google", "https://google.com");
// <a href="https://google.com">Google</a>

html.inlineMention("John", 123456789);
// <a href="tg://user?id=123456789">John</a>

// Code
html.inlineCode("const x = 1");
// <code>const x = 1</code>

html.codeBlock("const x = 1;\nconsole.log(x);", "javascript");
// <pre><code class="language-javascript">const x = 1;
// console.log(x);</code></pre>

// Quotes
html.blockquote("This is a quote");
// <blockquote>This is a quote</blockquote>

html.expandableBlockquote("Long quote...");
// <blockquote expandable>Long quote...</blockquote>

// Custom emoji
html.inlineEmoji("👍", "5368324170671202286");
// <tg-emoji emoji-id="5368324170671202286">👍</tg-emoji>
```

### MarkdownV2 Formatting

````typescript
import { markdownv2 } from "@telegram.ts/formatters";

// Basic formatting
markdownv2.bold("Bold text"); // *Bold text*
markdownv2.italic("Italic text"); // _Italic text_
markdownv2.underline("Underlined"); // __Underlined__
markdownv2.strikethrough("Strike"); // ~Strike~
markdownv2.spoiler("Spoiler"); // ||Spoiler||

// Links and mentions
markdownv2.inlineURL("Google", "https://google.com");
// [Google](https://google.com)

markdownv2.inlineMention("John", 123456789);
// [John](tg://user?id=123456789)

// Code
markdownv2.inlineCode("const x = 1");
// `const x = 1`

markdownv2.codeBlock("const x = 1;", "javascript");
// ```javascript
// const x = 1;
// ```

// Quotes
markdownv2.blockquote("Quote"); // >Quote
markdownv2.expandableBlockquote("Long"); // **>Long

// Custom emoji
markdownv2.inlineEmoji("👍", "5368324170671202286");
// ![👍](tg://emoji?id=5368324170671202286)
````

### Combining Formats

```typescript
import { html } from "@telegram.ts/formatters";

// Combine multiple formats
const text = html.combine([html.bold("Hello"), html.italic("World")], " ");
// <b>Hello</b> <i>World</i>

// Create lists
const list = html.list(["First item", "Second item", "Third item"], true); // true for ordered list
// 1. First item
// 2. Second item
// 3. Third item
```

### Working with Entities

```typescript
import { parseEntities, entitiesToFormatted } from "@telegram.ts/formatters";

// Parse formatted text to entities
const text = html.bold("Hello") + " " + html.italic("World");
const entities = parseEntities(text, "HTML");

// Convert entities back to formatted text
const formattedText = entitiesToFormatted("Hello World", entities, "HTML");
```

### Utilities

```typescript
import {
  escapeHTML,
  escapeMarkdownV2,
  stripHTML,
  getTextLength,
} from "@telegram.ts/formatters";

// Escape special characters
escapeHTML("<script>alert('XSS')</script>");
// &lt;script&gt;alert(&#39;XSS&#39;)&lt;/script&gt;

escapeMarkdownV2("Text with *special* chars");
// Text with \\*special\\* chars

// Strip HTML tags
stripHTML("<b>Bold</b> text");
// Bold text

// Get text length without formatting
getTextLength("<b>Hello</b>", "HTML");
// 5
```

## 🎯 Real-World Examples

### Profile Card

```typescript
import { html } from "@telegram.ts/formatters";

function createProfile(user: User) {
  return html.combine(
    [
      html.bold("👤 USER PROFILE"),
      html.strikethrough("━━━━━━━━━━━━━━━━"),
      "",
      html.bold("Name: ") + html.italic(user.firstName),
      html.bold("ID: ") + html.inlineCode(user.id.toString()),
      html.bold("Username: ") +
        (user.username ? `@${user.username}` : html.italic("not set")),
      html.bold("Status: ") + html.underline("Active"),
    ],
    "\n",
  );
}
```

### Menu with Buttons

```typescript
import { html } from "@telegram.ts/formatters";

function createMenu() {
  return html.combine(
    [
      html.bold("🎮 MAIN MENU"),
      html.strikethrough("━━━━━━━━━━━━━"),
      "",
      html.bold("1. ") + html.underline("Profile") + " 👤",
      html.bold("2. ") + html.underline("Settings") + " ⚙️",
      html.bold("3. ") + html.underline("Help") + " ❓",
      "",
      html.italic("Choose an option"),
    ],
    "\n",
  );
}
```

### Code Example

```typescript
import { html } from "@telegram.ts/formatters";

const code = `
import { TelegramClient } from "telegramsjs";

const client = new TelegramClient("TOKEN");

client.on("ready", () => {
  console.log("Bot is ready!");
});

client.login();
`;

const message = html.combine(
  [
    html.bold("📝 Example Code"),
    "",
    html.codeBlock(code.trim(), "typescript"),
    "",
    html.italic("Copy and paste to get started!"),
  ],
  "\n",
);
```

### Progress Bar

```typescript
import { html } from "@telegram.ts/formatters";

function createProgress(percentage: number) {
  const filled = Math.floor(percentage / 10);
  const empty = 10 - filled;
  const bar = "█".repeat(filled) + "░".repeat(empty);

  return html.combine(
    [
      html.bold("📊 Download Progress"),
      "",
      html.inlineCode(bar) + " " + html.bold(`${percentage}%`),
      "",
      html.italic("Status: ") + html.underline("In progress..."),
    ],
    "\n",
  );
}
```

### Error Message

```typescript
import { html } from "@telegram.ts/formatters";

function createError(error: Error) {
  return html.combine(
    [
      html.bold("❌ ERROR"),
      html.strikethrough("━━━━━━━━━━"),
      "",
      html.italic("An error occurred:"),
      "",
      html.codeBlock(error.message, "text"),
      "",
      html.underline("Please try again later"),
    ],
    "\n",
  );
}
```

## 📚 API Reference

### HTML Formatter

| Function                      | Description        | Example                                    |
| ----------------------------- | ------------------ | ------------------------------------------ |
| `bold(text)`                  | Bold text          | `<b>text</b>`                              |
| `italic(text)`                | Italic text        | `<i>text</i>`                              |
| `underline(text)`             | Underlined text    | `<u>text</u>`                              |
| `strikethrough(text)`         | Strikethrough text | `<s>text</s>`                              |
| `spoiler(text)`               | Spoiler text       | `<span class="tg-spoiler">text</span>`     |
| `blockquote(text)`            | Block quote        | `<blockquote>text</blockquote>`            |
| `expandableBlockquote(text)`  | Expandable quote   | `<blockquote expandable>text</blockquote>` |
| `inlineURL(text, url)`        | Inline link        | `<a href="url">text</a>`                   |
| `inlineMention(text, userId)` | User mention       | `<a href="tg://user?id=123">text</a>`      |
| `inlineCode(text)`            | Inline code        | `<code>text</code>`                        |
| `codeBlock(text, lang?)`      | Code block         | `<pre><code>text</code></pre>`             |
| `inlineEmoji(emoji, id)`      | Custom emoji       | `<tg-emoji emoji-id="id">emoji</tg-emoji>` |
| `combine(parts, sep?)`        | Combine strings    | Joins array with separator                 |
| `list(items, ordered?)`       | Create list        | Formats array as list                      |

### MarkdownV2 Formatter

| Function                      | Description        | Example                      |
| ----------------------------- | ------------------ | ---------------------------- |
| `bold(text)`                  | Bold text          | `*text*`                     |
| `italic(text)`                | Italic text        | `_text_`                     |
| `underline(text)`             | Underlined text    | `__text__`                   |
| `strikethrough(text)`         | Strikethrough text | `~text~`                     |
| `spoiler(text)`               | Spoiler text       | `\|\|text\|\|`               |
| `blockquote(text)`            | Block quote        | `>text`                      |
| `expandableBlockquote(text)`  | Expandable quote   | `**>text`                    |
| `inlineURL(text, url)`        | Inline link        | `[text](url)`                |
| `inlineMention(text, userId)` | User mention       | `[text](tg://user?id=123)`   |
| `inlineCode(text)`            | Inline code        | `` `text` ``                 |
| `codeBlock(text, lang?)`      | Code block         | ` ```lang\ntext\n``` `       |
| `inlineEmoji(emoji, id)`      | Custom emoji       | `![emoji](tg://emoji?id=id)` |

### Utilities

| Function                    | Description                          |
| --------------------------- | ------------------------------------ |
| `escapeHTML(text)`          | Escape HTML special characters       |
| `escapeMarkdownV2(text)`    | Escape MarkdownV2 special characters |
| `escapeMarkdown(text)`      | Escape Markdown special characters   |
| `stripHTML(text)`           | Remove HTML tags from text           |
| `getTextLength(text, mode)` | Get text length without formatting   |

### Parser Functions

| Function                                    | Description                        |
| ------------------------------------------- | ---------------------------------- |
| `parseEntities(text, mode)`                 | Parse formatted text to entities   |
| `entitiesToFormatted(text, entities, mode)` | Convert entities to formatted text |
| `calculateOffset(text, position)`           | Calculate offset in plain text     |
| `mergeEntities(entities)`                   | Merge overlapping entities         |

## 🔧 Integration Examples

### With TelegramsJS

```typescript
import { TelegramClient } from "telegramsjs";
import { html } from "@telegram.ts/formatters";

const client = new TelegramClient("YOUR_BOT_TOKEN");

client.on("message", async (message) => {
  if (message.content === "/start") {
    const text = html.combine(
      [
        html.bold("Welcome!"),
        html.italic("I'm a bot with beautiful formatting"),
      ],
      "\n",
    );

    await message.reply(text, { parse_mode: "HTML" });
  }
});

client.login();
```

### With node-telegram-bot-api

```typescript
import TelegramBot from "node-telegram-bot-api";
import { html } from "@telegram.ts/formatters";

const bot = new TelegramBot("YOUR_BOT_TOKEN", { polling: true });

bot.onText(/\/start/, (msg) => {
  const text = html.bold("Hello!") + "\n" + html.italic("Welcome to the bot");

  bot.sendMessage(msg.chat.id, text, { parse_mode: "HTML" });
});
```

### With Telegraf

```typescript
import { Telegraf } from "telegraf";
import { html } from "@telegram.ts/formatters";

const bot = new Telegraf("YOUR_BOT_TOKEN");

bot.start((ctx) => {
  const text = html.bold("Hello!") + "\n" + html.italic("Welcome!");

  ctx.reply(text, { parse_mode: "HTML" });
});

bot.launch();
```

## 🎓 Best Practices

1. **Choose the right format**: HTML is recommended for most cases as it's easier to work with
2. **Use auto-escaping**: The library automatically escapes special characters, so you don't need to worry about it
3. **Combine wisely**: Use `combine()` for cleaner code when joining multiple formatted strings
4. **Cache formatted text**: For frequently used messages, cache the formatted text to improve performance
5. **Test with Telegram**: Always test your formatted messages in Telegram to ensure they render correctly

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/@telegram.ts/formatters)
- [GitHub Repository](https://github.com/telegramsjs/formatters)
- [Telegram Bot API](https://core.telegram.org/bots/api)
- [TelegramsJS Documentation](https://telegramsjs.vercel.app/)
