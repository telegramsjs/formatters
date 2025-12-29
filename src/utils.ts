/**
 * Escape HTML special characters
 * @param text - Text to escape
 * @returns Escaped text
 */
function escapeHTML(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Escape MarkdownV2 special characters
 * @param text - Text to escape
 * @returns Escaped text
 */
function escapeMarkdownV2(text: string): string {
  const specialChars = /([_*\[\]()~`>#+\-=|{}.!\\])/g;
  return text.replace(specialChars, "\\$1");
}

/**
 * Escape Markdown special characters (legacy)
 * @param text - Text to escape
 * @returns Escaped text
 */
function escapeMarkdown(text: string): string {
  const specialChars = /([_*\[`])/g;
  return text.replace(specialChars, "\\$1");
}

/**
 * Strip HTML tags from text
 * @param text - Text with HTML tags
 * @returns Text without HTML tags
 */
function stripHTML(text: string): string {
  return text.replace(/<[^>]*>/g, "");
}

/**
 * Get text length without formatting
 * @param text - Formatted text
 * @param mode - Parse mode
 * @returns Text length
 */
function getTextLength(
  text: string,
  mode: "HTML" | "MarkdownV2" | "Markdown" = "HTML",
): number {
  if (mode === "HTML") {
    return stripHTML(text).length;
  }
  return text.length;
}

export {
  escapeHTML,
  escapeMarkdown,
  escapeMarkdownV2,
  stripHTML,
  getTextLength,
};
