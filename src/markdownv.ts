import type { TypeSupportedLanguages } from "./constants";

/**
 * Formats the text as bold using asterisks.
 * @param text - The text to be formatted in bold.
 * @returns The formatted string with bold markdown.
 */
function bold(text: string): string {
  return `*${text}*`;
}

/**
 * Formats the text as italic using underscores.
 * @param text - The text to be formatted in italics.
 * @returns The formatted string with italic markdown.
 */
function italic(text: string): string {
  return `_${text}_`;
}

/**
 * Formats the text as underlined using double underscores.
 * @param text - The text to be underlined.
 * @returns The formatted string with underline markdown.
 */
function underline(text: string): string {
  return `__${text}__`;
}

/**
 * Formats the text as strikethrough using tildes.
 * @param text - The text to be struck through.
 * @returns The formatted string with strikethrough markdown.
 */
function strikethrough(text: string): string {
  return `~${text}~`;
}

/**
 * Formats the text as a spoiler using double pipes.
 * @param text - The text to be hidden as a spoiler.
 * @returns The formatted string with spoiler markdown.
 */
function spoiler(text: string): string {
  return `||${text}||`;
}

/**
 * Creates a markdown link with the specified text and URL.
 * @param text - The display text for the link.
 * @param url - The URL to link to.
 * @returns The formatted string with an inline URL.
 */
function inlineURL(text: string, url: string): string {
  return `[${text}](${url})`;
}

/**
 * Creates an inline mention of a Telegram user by their user ID.
 * @param text - The display text for the mention.
 * @param userId - The Telegram user ID to mention.
 * @returns The formatted string with an inline mention.
 */
function inlineMention(text: string, userId: string): string {
  return `[${text}](tg://user?id=${userId})`;
}

/**
 * Inserts an inline emoji using the provided emoji ID.
 * @param emojiId - The ID of the emoji to include.
 * @returns The formatted string with an inline emoji.
 */
function inlineEmoji(emojiId: string): string {
  return `![👍](tg://emoji?id=${emojiId})`;
}

/**
 * Formats the text as inline code using backticks.
 * @param text - The text to be formatted as inline code.
 * @returns The formatted string with inline code markdown.
 */
function inlineCode(text: string): string {
  return `\`${text}\``;
}

/**
 * Formats the text as a blockquote using the greater-than symbol.
 * @param text - The text to be formatted as a blockquote.
 * @returns The formatted string with blockquote markdown.
 */
function blockquote(text: string): string {
  return `>${text}`;
}

/**
 * Formats the text as an expandable blockquote.
 * @param text - The text to be formatted as an expandable blockquote.
 * @returns The formatted string with expandable blockquote markdown.
 */
function blockquoteExpandable(text: string): string {
  return `**>${text}`;
}

/**
 * Formats the text as a preformatted code block using triple backticks.
 * @param text - The text to be formatted as a preformatted code block.
 * @returns The formatted string with a preformatted code block.
 */
function preFormattedCodeBlock(text: string): string {
  return `\`\`\`${text}\`\`\``;
}

/**
 * Formats the text as a preformatted code block with a specified language.
 * @param text - The text to be formatted in a code block.
 * @param language - The programming language of the code block.
 * @returns The formatted string with a language-specific preformatted code block.
 */
function preFormattedCodeBlockLanguage(
  text: string,
  language: TypeSupportedLanguages,
): string {
  return `\`\`\`${language}\n${text}\n\`\`\``;
}

export default {
  v1: {
    bold,
    italic,
    inlineURL,
    inlineMention,
    inlineCode,
    preFormattedCodeBlock,
    preFormattedCodeBlockLanguage,
  },
  bold,
  italic,
  underline,
  strikethrough,
  spoiler,
  inlineURL,
  inlineMention,
  inlineEmoji,
  inlineCode,
  blockquote,
  blockquoteExpandable,
  preFormattedCodeBlock,
  preFormattedCodeBlockLanguage,
};
