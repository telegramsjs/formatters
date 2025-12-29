import { stripHTML } from "./utils";
import type {
  MessageEntity,
  LanguageCode,
  ParseMode,
} from "@telegram.ts/types";

/**
 * Parse formatted text to extract message entities
 * @param text - Formatted text
 * @param parseMode - Parse mode used
 * @returns Array of message entities
 */
function parseEntities(text: string, parseMode: ParseMode): MessageEntity[] {
  if (parseMode === "HTML") {
    return parseHTMLEntities(text);
  } else if (parseMode === "MarkdownV2" || parseMode === "Markdown") {
    return parseMarkdownEntities(text);
  }
  return [];
}

/**
 * Parse HTML entities
 * @param text - HTML formatted text
 * @returns Array of message entities
 */
function parseHTMLEntities(text: string): MessageEntity[] {
  const entities: MessageEntity[] = [];

  const patterns = [
    { regex: /<b>(.*?)<\/b>/gs, type: "bold" as const },
    { regex: /<strong>(.*?)<\/strong>/gs, type: "bold" as const },
    { regex: /<i>(.*?)<\/i>/gs, type: "italic" as const },
    { regex: /<em>(.*?)<\/em>/gs, type: "italic" as const },
    { regex: /<u>(.*?)<\/u>/gs, type: "underline" as const },
    { regex: /<s>(.*?)<\/s>/gs, type: "strikethrough" as const },
    { regex: /<strike>(.*?)<\/strike>/gs, type: "strikethrough" as const },
    { regex: /<del>(.*?)<\/del>/gs, type: "strikethrough" as const },
    {
      regex: /<span class="tg-spoiler">(.*?)<\/span>/gs,
      type: "spoiler" as const,
    },
    { regex: /<tg-spoiler>(.*?)<\/tg-spoiler>/gs, type: "spoiler" as const },
    { regex: /<blockquote>(.*?)<\/blockquote>/gs, type: "blockquote" as const },
    {
      regex: /<blockquote expandable>(.*?)<\/blockquote>/gs,
      type: "expandable_blockquote" as const,
    },
    { regex: /<code>(.*?)<\/code>/gs, type: "code" as const },
    {
      regex: /<pre><code class="language-(.*?)">(.*?)<\/code><\/pre>/gs,
      type: "pre" as const,
      hasLanguage: true,
    },
    { regex: /<pre>(.*?)<\/pre>/gs, type: "pre" as const },
    {
      regex: /<a href="(.*?)">(.*?)<\/a>/gs,
      type: "text_link" as const,
      hasUrl: true,
    },
    {
      regex: /<tg-emoji emoji-id="(.*?)">(.*?)<\/tg-emoji>/gs,
      type: "custom_emoji" as const,
      hasEmojiId: true,
    },
  ];

  for (const pattern of patterns) {
    const matches = [...text.matchAll(pattern.regex)];

    for (const match of matches) {
      const matchStart = match.index || 0;
      const offset = calculateOffset(text, matchStart);

      let content: string;
      let length: number;
      let entity: MessageEntity;

      if (pattern.type === "pre" && pattern.hasLanguage) {
        // <pre><code class="language-xxx">content</code></pre>
        const language = match[1] as LanguageCode;
        const codeContent = match[2];

        content = codeContent || "";
        length = stripHTML(content).length;

        entity = {
          type: "pre",
          offset,
          length,
          ...(language && { language }),
        };
      } else if (pattern.type === "text_link" && pattern.hasUrl) {
        // <a href="url">text</a>
        const url = match[1];
        const linkText = match[2];

        content = linkText || "";
        length = stripHTML(content).length;

        entity = {
          type: "text_link",
          offset,
          length,
          url: url || "",
        };
      } else if (pattern.type === "custom_emoji" && pattern.hasEmojiId) {
        // <tg-emoji emoji-id="id">text</tg-emoji>
        const emojiId = match[1];
        const emojiText = match[2];

        content = emojiText || "";
        length = stripHTML(content).length;

        entity = {
          type: "custom_emoji",
          offset,
          length,
          custom_emoji_id: emojiId || "",
        };
      } else {
        // Regular tags
        content = match[1] || "";
        length = stripHTML(content).length;

        entity = {
          type: pattern.type as
            | "bold"
            | "italic"
            | "underline"
            | "strikethrough"
            | "spoiler"
            | "code"
            | "blockquote"
            | "expandable_blockquote",
          offset,
          length,
        };
      }

      entities.push(entity);
    }
  }

  return mergeEntities(entities);
}

/**
 * Parse Markdown entities
 * @param text - Markdown formatted text
 * @returns Array of message entities
 */
function parseMarkdownEntities(text: string): MessageEntity[] {
  const entities: MessageEntity[] = [];

  const patterns = [
    { regex: /\*([^*]+)\*/g, type: "bold" as const },
    { regex: /_([^_]+)_/g, type: "italic" as const },
    { regex: /__([^_]+)__/g, type: "underline" as const },
    { regex: /~([^~]+)~/g, type: "strikethrough" as const },
    { regex: /\|\|([^|]+)\|\|/g, type: "spoiler" as const },
    { regex: /`([^`]+)`/g, type: "code" as const },
    {
      regex: /```(\w+)?\n(.*?)\n```/gs,
      type: "pre" as const,
      hasLanguage: true,
    },
    {
      regex: /\[([^\]]+)\]\(([^)]+)\)/g,
      type: "text_link" as const,
      hasUrl: true,
    },
  ];

  for (const pattern of patterns) {
    const matches = [...text.matchAll(pattern.regex)];

    for (const match of matches) {
      const matchStart = match.index || 0;

      let tempText = text.substring(0, matchStart);
      tempText = tempText.replace(/\*\*([^*]+)\*\*/g, "$1");
      tempText = tempText.replace(/\*([^*]+)\*/g, "$1");
      tempText = tempText.replace(/__([^_]+)__/g, "$1");
      tempText = tempText.replace(/_([^_]+)_/g, "$1");
      tempText = tempText.replace(/~([^~]+)~/g, "$1");
      tempText = tempText.replace(/\|\|([^|]+)\|\|/g, "$1");
      tempText = tempText.replace(/`([^`]+)`/g, "$1");
      tempText = tempText.replace(/```.*?\n(.*?)\n```/gs, "$1");
      tempText = tempText.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
      const offset = tempText.length;

      let entity: MessageEntity;

      if (pattern.type === "pre" && pattern.hasLanguage) {
        const language = match[1] as LanguageCode;
        const codeContent = match[2];

        entity = {
          type: "pre",
          offset,
          length: codeContent?.length || 0,
          ...(language && { language }),
        };
      } else if (pattern.type === "text_link" && pattern.hasUrl) {
        const linkText = match[1];
        const url = match[2];

        entity = {
          type: "text_link",
          offset,
          length: linkText?.length || 0,
          url: url || "",
        };
      } else {
        const content = match[1];

        entity = {
          type: pattern.type as
            | "bold"
            | "italic"
            | "underline"
            | "strikethrough"
            | "spoiler"
            | "code",
          offset,
          length: content?.length || 0,
        };
      }

      entities.push(entity);
    }
  }

  return mergeEntities(entities);
}

/**
 * Calculate text offset without formatting
 * @param text - Text
 * @param position - Position in formatted text
 * @returns Offset in plain text
 */
function calculateOffset(text: string, position: number): number {
  let offset = 0;
  let inTag = false;

  for (let i = 0; i < position && i < text.length; i++) {
    if (text[i] === "<") {
      inTag = true;
    } else if (text[i] === ">") {
      inTag = false;
    } else if (!inTag) {
      offset++;
    }
  }

  return offset;
}

/**
 * Merge overlapping entities
 * @param entities - Array of entities
 * @returns Merged entities
 */
function mergeEntities(entities: MessageEntity[]): MessageEntity[] {
  const sorted = [...entities].sort((a, b) => a.offset - b.offset);
  const merged: MessageEntity[] = [];

  for (const entity of sorted) {
    const last = merged[merged.length - 1];

    if (last && last.offset + last.length > entity.offset) {
      continue;
    }

    merged.push(entity);
  }

  return merged;
}

/**
 * Convert entities to formatted text
 * @param text - Plain text
 * @param entities - Message entities
 * @param parseMode - Target parse mode
 * @returns Formatted text
 */
function entitiesToFormatted(
  text: string,
  entities: MessageEntity[],
  parseMode: ParseMode = "HTML",
): string {
  if (entities.length === 0) return text;

  const sorted = [...entities].sort((a, b) => b.offset - a.offset);

  let result = text;

  for (const entity of sorted) {
    const start = entity.offset;
    const end = entity.offset + entity.length;
    const content = text.substring(start, end);

    let formatted = content;

    if (parseMode === "HTML") {
      formatted = formatEntityHTML(entity, content);
    } else if (parseMode === "MarkdownV2") {
      formatted = formatEntityMarkdownV2(entity, content);
    }

    result = result.substring(0, start) + formatted + result.substring(end);
  }

  return result;
}

/**
 * Format entity as HTML
 */
function formatEntityHTML(entity: MessageEntity, content: string): string {
  switch (entity.type) {
    case "bold":
      return `<b>${content}</b>`;
    case "italic":
      return `<i>${content}</i>`;
    case "underline":
      return `<u>${content}</u>`;
    case "strikethrough":
      return `<s>${content}</s>`;
    case "spoiler":
      return `<span class="tg-spoiler">${content}</span>`;
    case "code":
      return `<code>${content}</code>`;
    case "pre":
      if (entity.language) {
        return `<pre><code class="language-${entity.language}">${content}</code></pre>`;
      }
      return `<pre>${content}</pre>`;
    case "text_link":
      return `<a href="${entity.url}">${content}</a>`;
    case "text_mention":
      return `<a href="tg://user?id=${entity.user?.id}">${content}</a>`;
    case "custom_emoji":
      return `<tg-emoji emoji-id="${entity.custom_emoji_id}">${content}</tg-emoji>`;
    default:
      return content;
  }
}

/**
 * Format entity as MarkdownV2
 */
function formatEntityMarkdownV2(
  entity: MessageEntity,
  content: string,
): string {
  switch (entity.type) {
    case "bold":
      return `*${content}*`;
    case "italic":
      return `_${content}_`;
    case "underline":
      return `__${content}__`;
    case "strikethrough":
      return `~${content}~`;
    case "spoiler":
      return `||${content}||`;
    case "code":
      return `\`${content}\``;
    case "pre":
      if (entity.language) {
        return `\`\`\`${entity.language}\n${content}\n\`\`\``;
      }
      return `\`\`\`\n${content}\n\`\`\``;
    case "text_link":
      return `[${content}](${entity.url})`;
    case "text_mention":
      return `[${content}](tg://user?id=${entity.user?.id})`;
    case "custom_emoji":
      return `![${content}](tg://emoji?id=${entity.custom_emoji_id})`;
    default:
      return content;
  }
}

export { parseEntities, calculateOffset, mergeEntities, entitiesToFormatted };
