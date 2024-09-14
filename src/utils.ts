import type { MessageEntity } from "./type";
import type { ParseMode } from "@telegram.ts/types";

/**
 * Defines the types of entities that can be parsed from text.
 */
type TypeEntity =
  | "mention"
  | "hashtag"
  | "cashtag"
  | "bot_command"
  | "url"
  | "email"
  | "phone_number"
  | "bold"
  | "italic"
  | "underline"
  | "strikethrough"
  | "spoiler"
  | "blockquote"
  | "code"
  | "pre"
  | "text_link"
  | "text_mention"
  | "custom_emoji";

/**
 * Patterns used to match HTML entities in the text.
 */
const htmlEntityPatterns: Record<string, RegExp> = {
  bold: /<b>(.*?)<\/b>|<strong>(.*?)<\/strong>/g,
  italic: /<i>(.*?)<\/i>|<em>(.*?)<\/em>/g,
  underline: /<u>(.*?)<\/u>|<ins>(.*?)<\/ins>/g,
  strikethrough: /<s>(.*?)<\/s>|<strike>(.*?)<\/strike>|<del>(.*?)<\/del>/g,
  spoiler: /<span class="tg-spoiler">(.*?)<\/span>/g,
  text_link: /<a href="([^"]+)">(.*?)<\/a>/g,
  text_mention: /<a href="tg:\/\/user\?id=(\d+)">(.*?)<\/a>/g,
  custom_emoji: /<tg-emoji emoji-id="([^"]+)">(.*?)<\/tg-emoji>/g,
  code: /<code>(.*?)<\/code>/g,
  pre: /<pre>(.*?)<\/pre>/g,
  blockquote: /<blockquote>(.*?)<\/blockquote>/g,
};

/**
 * Patterns used to match Markdown entities in the text.
 */
const markdownPatterns: Record<string, RegExp> = {
  bold: /\*([^\*]+)\*/g,
  italic: /_([^_]+)_/g,
  text_link: /\[([^\]]+)\]\((http[^\)]+)\)/g,
  text_mention: /\[([^\]]+)\]\((tg:\/\/user\?id=\d+)\)/g,
  code: /`([^`]+)`/g,
  pre: /```([a-zA-Z]*)\n([\s\S]*?)```/g,
};

/**
 * Patterns used to match MarkdownV2 entities in the text.
 */
const markdownV2Patterns: Record<string, RegExp> = {
  ...markdownPatterns,
  underline: /__([^_]+)__/g,
  strikethrough: /~([^~]+)~/g,
  spoiler: /\|\|([^|]+)\|\|/g,
};

/**
 * Parses text to extract entities based on the specified format.
 * @param text - The text to parse for entities.
 * @param format - The format of the text, either "HTML", "Markdown", or "MarkdownV2".
 * @returns An array of MessageEntity objects representing the parsed entities.
 */
function parseEntities(text: string, format: ParseMode): MessageEntity[] {
  const entities: MessageEntity[] = [];

  /**
   * Adds an entity to the list of parsed entities.
   * @param type - The type of the entity.
   * @param offset - The offset of the entity in the text.
   * @param length - The length of the entity in the text.
   * @param extra - Additional properties specific to the entity type.
   */
  function addEntity(
    type: TypeEntity,
    offset: number,
    length: number,
    extra: Partial<
      | MessageEntity.PreMessageEntity
      | MessageEntity.TextLinkMessageEntity
      | MessageEntity.TextMentionMessageEntity
      | MessageEntity.CustomEmojiMessageEntity
    > = {},
  ): void {
    const entity = { type, offset, length, ...extra } as MessageEntity;
    entities.push(entity);
  }

  const entityPatterns =
    format === "HTML"
      ? htmlEntityPatterns
      : format === "MarkdownV2"
        ? markdownV2Patterns
        : markdownPatterns;

  for (const [type, regex] of Object.entries(entityPatterns)) {
    let match;
    while ((match = regex.exec(text)) !== null) {
      const [fullMatch, ...groups] = match;
      const offset = match.index;
      const length = fullMatch.length;

      if (type === "text_link") {
        const url = format === "HTML" ? groups[0] : groups[1];
        addEntity("text_link", offset, length, { url: url ?? "" });
      } else if (type === "text_mention") {
        addEntity("text_mention", offset, length, {
          user: { id: groups[0] ?? "0" },
        });
      } else if (type === "custom_emoji") {
        const customEmojiId = groups[0] ?? "";
        addEntity("custom_emoji", offset, length, {
          customEmojiId: customEmojiId,
        });
      } else if (type === "pre" && format === "MarkdownV2") {
        const language = groups[0] ?? "";
        addEntity("pre", offset, length, { language });
      } else {
        addEntity(type as TypeEntity, offset, length);
      }
    }
  }

  return entities.sort((a, b) => a.offset - b.offset);
}

/**
 * Escapes HTML special characters in a string.
 * @param content - The content to escape.
 * @returns The escaped string.
 */
function escapeHTML(content: string): string {
  const escapables: Record<string, string> = {
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
  };

  return content.replace(/[<>&]/g, (char) => escapables[char] ?? char);
}

/**
 * Escapes Markdown special characters in a string.
 * @param content - The content to escape.
 * @returns The escaped string.
 */
function escapeMarkdown(content: string): string {
  const escapables: Record<string, string> = {
    _: "\\_",
    "*": "\\*",
    "[": "\\[",
    "]": "\\]",
    "(": "\\(",
    ")": "\\)",
    "~": "\\~",
    "`": "\\`",
    ">": "\\>",
    "#": "\\#",
    "+": "\\+",
    "-": "\\-",
    "=": "\\=",
    "|": "\\|",
    "{": "\\{",
    "}": "\\}",
    ".": "\\.",
    "!": "\\!",
  };

  return content.replace(
    /[_*\[\]()~`>#\+\-=|{}.!]/g,
    (char) => escapables[char] ?? char,
  );
}

export {
  parseEntities,
  escapeHTML,
  escapeMarkdown,
  htmlEntityPatterns,
  markdownPatterns,
  markdownV2Patterns,
  type TypeEntity,
};
