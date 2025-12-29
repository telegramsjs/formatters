/**
 * @telegram.ts/formatters
 * Powerful text formatting library for Telegram Bot API
 *
 * @license MIT
 * @see https://core.telegram.org/bots/api
 */

import * as htmlFormatters from "./html";
import * as markdownv2Formatters from "./markdownv2";
import * as markdownFormatters from "./markdown";

export const html = htmlFormatters;
export const markdown = markdownFormatters;
export const markdownv2 = markdownv2Formatters;
export const version = "2.1.0";

export * from "./utils";
export * from "./parser";

export default {
  html,
  markdownv2,
  markdown,
  version,
};
