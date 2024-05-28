import html from "./html";
import markdownv from "./markdownv";
import { parseEntities } from "./utils";
import { version } from "../package.json";
import { type TypeSupportedLanguages, SupportedLanguages } from "./constants";

export default { html, markdownv, parseEntities, version, SupportedLanguages };
export {
  html,
  markdownv,
  parseEntities,
  version,
  TypeSupportedLanguages,
  SupportedLanguages,
};
