import type { TypeSupportedLanguages } from "./constants";

/**
 * Wraps the text in bold HTML tags.
 * @param text - The text to be wrapped in bold tags.
 * @returns The bolded HTML string.
 */
function bold(text: string): string {
  return `<b>${text}</b>`;
}

/**
 * Wraps the text in strong HTML tags.
 * @param text - The text to be wrapped in strong tags.
 * @returns The HTML string with strong emphasis.
 */
function strong(text: string): string {
  return `<strong>${text}</strong>`;
}

/**
 * Wraps the text in italic HTML tags.
 * @param text - The text to be wrapped in italic tags.
 * @returns The italicized HTML string.
 */
function italic(text: string): string {
  return `<i>${text}</i>`;
}

/**
 * Wraps the text in emphasis HTML tags.
 * @param text - The text to be wrapped in emphasis tags.
 * @returns The emphasized HTML string.
 */
function emphasis(text: string): string {
  return `<em>${text}</em>`;
}

/**
 * Wraps the text in underline HTML tags.
 * @param text - The text to be wrapped in underline tags.
 * @returns The underlined HTML string.
 */
function underline(text: string): string {
  return `<u>${text}</u>`;
}

/**
 * Wraps the text in insert HTML tags.
 * @param text - The text to be wrapped in insert tags.
 * @returns The HTML string with inserted text.
 */
function ins(text: string): string {
  return `<ins>${text}</ins>`;
}

/**
 * Wraps the text in strikethrough HTML tags.
 * @param text - The text to be wrapped in strikethrough tags.
 * @returns The HTML string with strikethrough text.
 */
function strikethrough(text: string): string {
  return `<s>${text}</s>`;
}

/**
 * Wraps the text in strike HTML tags.
 * @param text - The text to be wrapped in strike tags.
 * @returns The HTML string with strikethrough (strike) text.
 */
function strike(text: string): string {
  return `<strike>${text}</strike>`;
}

/**
 * Wraps the text in delete HTML tags.
 * @param text - The text to be wrapped in delete tags.
 * @returns The HTML string with deleted text.
 */
function del(text: string): string {
  return `<del>${text}</del>`;
}

/**
 * Wraps the text in Telegram spoiler HTML tags.
 * @param text - The text to be wrapped in spoiler tags.
 * @returns The HTML string with Telegram spoiler formatting.
 */
function spoiler(text: string): string {
  return `<span class="tg-spoiler">${text}</span>`;
}

/**
 * Wraps the text in Telegram-specific spoiler tags.
 * @param text - The text to be wrapped in Telegram spoiler tags.
 * @returns The HTML string with Telegram-specific spoiler formatting.
 */
function tgSpoiler(text: string): string {
  return `<tg-spoiler>${text}</tg-spoiler>`;
}

/**
 * Creates an inline URL link with the given text and URL.
 * @param text - The display text for the link.
 * @param url - The URL to link to.
 * @returns The HTML string for an inline link.
 */
function inlineURL(text: string, url: string): string {
  return `<a href="${url}">${text}</a>`;
}

/**
 * Creates an inline mention of a Telegram user by their user ID.
 * @param text - The display text for the mention.
 * @param userId - The Telegram user ID to mention.
 * @returns The HTML string for an inline mention.
 */
function inlineMention(text: string, userId: string): string {
  return `<a href="tg://user?id=${userId}">${text}</a>`;
}

/**
 * Creates an inline emoji using the provided emoji ID.
 * @param emojiId - The ID of the emoji to include.
 * @returns The HTML string for an inline emoji.
 */
function inlineEmoji(emojiId: string): string {
  return `<tg-emoji emoji-id="${emojiId}">👍</tg-emoji>`;
}

/**
 * Wraps the text in inline code HTML tags.
 * @param text - The text to be wrapped in inline code tags.
 * @returns The HTML string with inline code formatting.
 */
function inlineCode(text: string): string {
  return `<code>${text}</code>`;
}

/**
 * Wraps the text in blockquote HTML tags.
 * @param text - The text to be wrapped in blockquote tags.
 * @returns The HTML string with blockquote formatting.
 */
function blockquote(text: string): string {
  return `<blockquote>${text}</blockquote>`;
}

/**
 * Wraps the text in expandable blockquote HTML tags.
 * @param text - The text to be wrapped in expandable blockquote tags.
 * @returns The HTML string with expandable blockquote formatting.
 */
function blockquoteExpandable(text: string): string {
  return `<blockquote expandable>${text}</blockquote>`;
}

/**
 * Wraps the text in preformatted code block HTML tags.
 * @param text - The text to be wrapped in preformatted code block tags.
 * @returns The HTML string with preformatted code block formatting.
 */
function preFormattedCodeBlock(text: string): string {
  return `<pre>${text}</pre>`;
}

/**
 * Wraps the text in a preformatted code block with a specified language.
 * @param text - The text to be wrapped in a preformatted code block.
 * @param language - The programming language of the code block.
 * @returns The HTML string with preformatted code block formatting and language specification.
 */
function preFormattedCodeBlockLanguage(
  text: string,
  language: TypeSupportedLanguages,
): string {
  return `<pre><code class="language-${language}">${text}</code></pre>`;
}

export default {
  bold,
  strong,
  italic,
  emphasis,
  underline,
  ins,
  strikethrough,
  strike,
  del,
  spoiler,
  tgSpoiler,
  inlineURL,
  inlineMention,
  inlineEmoji,
  inlineCode,
  blockquote,
  blockquoteExpandable,
  preFormattedCodeBlock,
  preFormattedCodeBlockLanguage,
};
