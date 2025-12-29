import { escapeMarkdownV2 } from "./utils";

/**
 * MarkdownV2 formatting functions for Telegram messages
 * @see https://core.telegram.org/bots/api#markdownv2-style
 */

/**
 * Format text as bold
 * @param text - Text to format
 * @returns Formatted text
 * @example
 * bold("Hello") // "*Hello*"
 */
function bold(text: string): string {
  return `*${escapeMarkdownV2(text)}*`;
}

/**
 * Format text as italic
 * @param text - Text to format
 * @returns Formatted text
 * @example
 * italic("Hello") // "_Hello_"
 */
function italic(text: string): string {
  return `_${escapeMarkdownV2(text)}_`;
}

/**
 * Format text as underline
 * @param text - Text to format
 * @returns Formatted text
 * @example
 * underline("Hello") // "__Hello__"
 */
function underline(text: string): string {
  return `__${escapeMarkdownV2(text)}__`;
}

/**
 * Format text as strikethrough
 * @param text - Text to format
 * @returns Formatted text
 * @example
 * strikethrough("Hello") // "~Hello~"
 */
function strikethrough(text: string): string {
  return `~${escapeMarkdownV2(text)}~`;
}

/**
 * Format text as spoiler
 * @param text - Text to format
 * @returns Formatted text
 * @example
 * spoiler("Secret") // "||Secret||"
 */
function spoiler(text: string): string {
  return `||${escapeMarkdownV2(text)}||`;
}

/**
 * Format text as blockquote
 * @param text - Text to format
 * @returns Formatted text
 * @example
 * blockquote("Quote") // ">Quote"
 */
function blockquote(text: string): string {
  return `>${escapeMarkdownV2(text)}`;
}

/**
 * Format text as expandable blockquote
 * @param text - Text to format
 * @returns Formatted text
 * @example
 * expandableBlockquote("Long quote") // "**>Long quote"
 */
function expandableBlockquote(text: string): string {
  return `**>${escapeMarkdownV2(text)}`;
}

/**
 * Create inline URL
 * @param text - Link text
 * @param url - URL
 * @returns Formatted link
 * @example
 * inlineURL("Google", "https://google.com") // "[Google](https://google.com)"
 */
function inlineURL(text: string, url: string): string {
  return `[${escapeMarkdownV2(text)}](${escapeMarkdownV2(url)})`;
}

/**
 * Create inline mention
 * @param text - Mention text
 * @param userId - User ID
 * @returns Formatted mention
 * @example
 * inlineMention("John", 123456789) // "[John](tg://user?id=123456789)"
 */
function inlineMention(text: string, userId: number): string {
  return `[${escapeMarkdownV2(text)}](tg://user?id=${userId})`;
}

/**
 * Create inline code
 * @param text - Code text
 * @returns Formatted code
 * @example
 * inlineCode("const x = 1") // "`const x = 1`"
 */
function inlineCode(text: string): string {
  // Code blocks don't need escaping in MarkdownV2
  return `\`${text}\``;
}

/**
 * Create code block
 * @param text - Code text
 * @param language - Programming language for syntax highlighting
 * @returns Formatted code block
 * @example
 * codeBlock("const x = 1", "javascript") // "```javascript\nconst x = 1\n```"
 */
function codeBlock(text: string, language?: string): string {
  if (language) {
    return `\`\`\`${language}\n${text}\n\`\`\``;
  }
  return `\`\`\`\n${text}\n\`\`\``;
}

/**
 * Create inline emoji
 * @param emoji - Emoji character
 * @param emojiId - Custom emoji ID
 * @returns Formatted emoji
 * @example
 * inlineEmoji("👍", "5368324170671202286") // "![👍](tg://emoji?id=5368324170671202286)"
 */
function inlineEmoji(emoji: string, emojiId: string): string {
  return `![${emoji}](tg://emoji?id=${emojiId})`;
}

/**
 * Combine multiple formatted strings
 * @param parts - Array of formatted strings
 * @param separator - Separator between parts
 * @returns Combined string
 * @example
 * combine([bold("Hello"), italic("World")], " ") // "*Hello* _World_"
 */
function combine(parts: string[], separator: string = ""): string {
  return parts.join(separator);
}

/**
 * Create a list with formatting
 * @param items - Array of items
 * @param ordered - Whether the list is ordered
 * @returns Formatted list
 * @example
 * list(["Item 1", "Item 2"]) // "• Item 1\n• Item 2"
 * list(["Item 1", "Item 2"], true) // "1\\. Item 1\n2\\. Item 2"
 */
function list(items: string[], ordered: boolean = false): string {
  return items
    .map((item, index) => {
      const prefix = ordered ? `${index + 1}\\. ` : "• ";
      return `${prefix}${item}`;
    })
    .join("\n");
}

export {
  bold,
  italic,
  underline,
  strikethrough,
  spoiler,
  codeBlock,
  blockquote,
  expandableBlockquote,
  inlineURL,
  inlineMention,
  inlineCode,
  inlineEmoji,
  combine,
  list,
};
