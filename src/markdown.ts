import { escapeMarkdown } from "./utils";

/**
 * Markdown (legacy) formatting functions for Telegram messages
 * @deprecated Use MarkdownV2 instead
 * @see https://core.telegram.org/bots/api#markdown-style
 */

/**
 * Format text as bold
 * @param text - Text to format
 * @returns Formatted text
 * @example
 * bold("Hello") // "*Hello*"
 */
function bold(text: string): string {
  return `*${escapeMarkdown(text)}*`;
}

/**
 * Format text as italic
 * @param text - Text to format
 * @returns Formatted text
 * @example
 * italic("Hello") // "_Hello_"
 */
function italic(text: string): string {
  return `_${escapeMarkdown(text)}_`;
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
  return `[${escapeMarkdown(text)}](${url})`;
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
  return `[${escapeMarkdown(text)}](tg://user?id=${userId})`;
}

/**
 * Create inline code
 * @param text - Code text
 * @returns Formatted code
 * @example
 * inlineCode("const x = 1") // "`const x = 1`"
 */
function inlineCode(text: string): string {
  return `\`${text}\``;
}

/**
 * Create code block
 * @param text - Code text
 * @param language - Programming language (not supported in legacy Markdown)
 * @returns Formatted code block
 * @example
 * codeBlock("const x = 1") // "```const x = 1```"
 */
function codeBlock(text: string, language: string = ""): string {
  return `\`\`\`${language}${text}\`\`\``;
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

export {
  bold,
  italic,
  inlineURL,
  inlineMention,
  inlineCode,
  codeBlock,
  combine,
};
