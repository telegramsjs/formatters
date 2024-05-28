import type { TypeSupportedLanguages } from "./constants";

function bold(text: string): string {
  return `*${text}*`;
}

function italic(text: string): string {
  return `_${text}_`;
}

function underline(text: string): string {
  return `__${text}__`;
}

function strikethrough(text: string): string {
  return `~${text}~`;
}

function spoiler(text: string): string {
  return `||${text}||`;
}

function inlineURL(text: string, url: string): string {
  return `[${text}](${url})`;
}

function inlineMention(text: string, userId: string): string {
  return `[${text}](tg://user?id=${userId})`;
}

function inlineEmoji(emojiId: string): string {
  return `![👍](tg://emoji?id=${emojiId})`;
}

function inlineCode(text: string): string {
  return `\`${text}\``;
}

function blockquote(text: string): string {
  return `>${text}`;
}

function blockquoteExpandable(text: string): string {
  return `**>${text}`;
}

function preFormattedCodeBlock(text: string): string {
  return `\`\`\`${text}\`\`\``;
}

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
