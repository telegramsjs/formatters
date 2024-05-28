import { JSDOM } from "jsdom";
import type { MessageEntity, ParseMode, User } from "@telegram.ts/types";

function parseEntities(text: string, format: ParseMode): MessageEntity[] {
  const entities: MessageEntity[] = [];

  function addEntity(
    type:
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
      | "custom_emoji",
    offset: number,
    length: number,
    extra: Partial<
      | MessageEntity.PreMessageEntity
      | MessageEntity.TextLinkMessageEntity
      | MessageEntity.TextMentionMessageEntity
      | MessageEntity.CustomEmojiMessageEntity
    > = {},
  ) {
    const entity = { type, offset, length, ...extra } as MessageEntity;
    entities.push(entity);
  }

  if (format === "Markdown" || format === "MarkdownV2") {
    const markdownRegexes: Record<string, RegExp> = {
      bold: /\*([^\*]+)\*/g,
      italic: /_([^_]+)_/g,
      inlineUrl: /\[([^\]]+)\]\((http[^\)]+)\)/g,
      inlineMention: /\[([^\]]+)\]\((tg:\/\/user\?id=[^\)]+)\)/g,
      inlineCode: /`([^`]+)`/g,
      preCodeBlock: /```([a-zA-Z]*)\n([\s\S]*?)```/g,
    };

    if (format === "MarkdownV2") {
      Object.assign(markdownRegexes, {
        underline: /__([^_]+)__/g,
        strikethrough: /~([^~]+)~/g,
        spoiler: /\|\|([^|]+)\|\|/g,
      });
    }

    for (const [type, regex] of Object.entries(markdownRegexes)) {
      let match;
      while ((match = regex.exec(text)) !== null) {
        const [fullMatch, content, extra] = match;
        const offset = match.index;
        const length = fullMatch.length;

        switch (type) {
          case "inlineUrl":
            addEntity("text_link", offset, length, { url: extra as string });
            break;
          case "inlineMention":
            addEntity("text_mention", offset, length, {
              user: {
                id: parseInt(extra.split("=")[1], 10),
              } as User,
            });
            break;
          case "preCodeBlock":
            addEntity("pre", offset, length, { language: content });
            break;
          default:
            addEntity(type as any, offset, length);
        }
      }
    }
  } else if (format === "HTML") {
    const dom = new JSDOM(text);
    const document = dom.window.document;

    function extractHtmlEntities(
      node: HTMLElement | ChildNode,
      offset = 0,
    ): number {
      if (node.nodeType === node.TEXT_NODE) {
        return offset + (node.textContent?.length || 0);
      }

      if (node.nodeType === node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        const startOffset = offset;
        let innerOffset = offset;

        for (const child of element.childNodes) {
          innerOffset = extractHtmlEntities(child, innerOffset);
        }

        const length = innerOffset - startOffset;

        switch (element.tagName.toLowerCase()) {
          case "b":
          case "strong":
            addEntity("bold", startOffset, length);
            break;
          case "i":
          case "em":
            addEntity("italic", startOffset, length);
            break;
          case "u":
          case "ins":
            addEntity("underline", startOffset, length);
            break;
          case "s":
          case "strike":
          case "del":
            addEntity("strikethrough", startOffset, length);
            break;
          case "span":
            if (element.classList.contains("tg-spoiler")) {
              addEntity("spoiler", startOffset, length);
            }
            break;
          case "a":
            const href = element.getAttribute("href") || "";
            if (href.startsWith("tg://user?id=")) {
              addEntity("text_mention", startOffset, length, {
                user: {
                  id: parseInt(href.split("=")[1], 10),
                  is_bot: false,
                  first_name: "",
                },
              });
            } else {
              addEntity("text_link", startOffset, length, { url: href });
            }
            break;
          case "tg-emoji":
            addEntity("custom_emoji", startOffset, length, {
              custom_emoji_id: element.getAttribute("emoji-id") || undefined,
            });
            break;
          case "code":
            addEntity("code", startOffset, length);
            break;
          case "pre":
            const codeChild = element.querySelector("code");
            if (codeChild) {
              const language = codeChild.className.split("-")[1];
              addEntity("pre", startOffset, length, { language });
            } else {
              addEntity("pre", startOffset, length);
            }
            break;
          case "blockquote":
            addEntity("blockquote", startOffset, length);
            break;
        }

        return innerOffset;
      }

      return offset;
    }

    extractHtmlEntities(document.body);
  }

  return entities.sort((a, b) => a.offset - b.offset);
}

export { parseEntities };
