import html from "./html";
import markdownv from "./markdownv";
import {
  parseEntities,
  escapeHTML,
  escapeMarkdown,
  htmlEntityPatterns,
  markdownPatterns,
  markdownV2Patterns,
  type TypeEntity,
} from "./utils";
import { version } from "../package.json";
import { type TypeSupportedLanguages, SupportedLanguages } from "./constants";

export default {
  html,
  markdownv,
  parseEntities,
  escapeHTML,
  escapeMarkdown,
  htmlEntityPatterns,
  markdownPatterns,
  markdownV2Patterns,
  version,
  SupportedLanguages,
};
export {
  html,
  markdownv,
  parseEntities,
  escapeHTML,
  escapeMarkdown,
  htmlEntityPatterns,
  markdownPatterns,
  markdownV2Patterns,
  version,
  type TypeEntity,
  type TypeSupportedLanguages,
  SupportedLanguages,
};
