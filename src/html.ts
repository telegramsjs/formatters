import type { TypeSupportedLanguages } from "./constants";

function bold(text: string): string {
  return `<b>${text}</b>`;
}

function strong(text: string): string {
  return `<strong>${text}</strong>`;
}

function italic(text: string): string {
  return `<i>${text}</i>`;
}

function emphasis(text: string): string {
  return `<em>${text}</em>`;
}

function underline(text: string): string {
  return `<u>${text}</u>`;
}

function ins(text: string): string {
  return `<ins>${text}</ins>`;
}

function strikethrough(text: string): string {
  return `<s>${text}</s>`;
}

function strike(text: string): string {
  return `<strike>${text}</strike>`;
}

function del(text: string): string {
  return `<del>${text}</del>`;
}

function spoiler(text: string): string {
  return `<span class="tg-spoiler">${text}</span>`;
}

function tgSpoiler(text: string): string {
  return `<tg-spoiler>${text}</tg-spoiler>`;
}

function inlineURL(text: string, url: string): string {
  return `<a href="${url}">${text}</a>`;
}

function inlineMention(text: string, userId: string): string {
  return `<a href="tg://user?id=${userId}">${text}</a>`;
}

function inlineEmoji(emojiId: string): string {
  return `<tg-emoji emoji-id="${emojiId}">👍</tg-emoji>`;
}

function inlineCode(text: string): string {
  return `<code>${text}</code>`;
}

function blockquote(text: string): string {
  return `<blockquote>${text}</blockquote>`;
}

function blockquoteExpandable(text: string): string {
  return `<blockquote expandable>${text}</blockquote>`;
}

function preFormattedCodeBlock(text: string): string {
  return `<pre>${text}</pre>`;
}

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
