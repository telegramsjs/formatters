/**
 * Example usage of @telegram.ts/formatters
 *
 * This file demonstrates various formatting capabilities
 */

import { html, markdownv2, markdown } from "@telegram.ts/formatters";

// ============================================
// HTML Formatting Examples
// ============================================

console.log("=== HTML Formatting ===\n");

// Basic text formatting
const htmlBasic =
  html.bold("Bold text") +
  "\n" +
  html.italic("Italic text") +
  "\n" +
  html.underline("Underlined text") +
  "\n" +
  html.strikethrough("Strikethrough text") +
  "\n" +
  html.spoiler("Spoiler text");

console.log("Basic formatting:");
console.log(htmlBasic);
console.log();

// Links and mentions
const htmlLinks =
  html.inlineURL("Visit Google", "https://google.com") +
  "\n" +
  html.inlineMention("John Doe", 123456789);

console.log("Links and mentions:");
console.log(htmlLinks);
console.log();

// Code examples
const htmlCode =
  "Inline code: " +
  html.inlineCode("const x = 1") +
  "\n\n" +
  "Code block:\n" +
  html.codeBlock(
    `function hello() {
  console.log("Hello, World!");
}`,
    "javascript",
  );

console.log("Code:");
console.log(htmlCode);
console.log();

// ============================================
// MarkdownV2 Formatting Examples
// ============================================

console.log("=== MarkdownV2 Formatting ===\n");

// Basic text formatting
const md2Basic =
  markdownv2.bold("Bold text") +
  "\n" +
  markdownv2.italic("Italic text") +
  "\n" +
  markdownv2.underline("Underlined text") +
  "\n" +
  markdownv2.strikethrough("Strikethrough text") +
  "\n" +
  markdownv2.spoiler("Spoiler text");

console.log("Basic formatting:");
console.log(md2Basic);
console.log();

// ============================================
// Real-World Examples
// ============================================

console.log("=== Real-World Examples ===\n");

// 1. User Profile Card
function createProfileCard(user: any) {
  return html.combine(
    [
      html.bold("👤 USER PROFILE"),
      html.strikethrough("━━━━━━━━━━━━━━━━"),
      "",
      html.bold("Name: ") + html.italic(user.name),
      html.bold("ID: ") + html.inlineCode(user.id.toString()),
      html.bold("Username: ") +
        (user.username ? `@${user.username}` : html.italic("not set")),
      html.bold("Status: ") + html.underline(user.status),
      "",
      html.spoiler("Secret info: Premium user"),
    ],
    "\n",
  );
}

const profile = createProfileCard({
  name: "John Doe",
  id: 123456789,
  username: "johndoe",
  status: "Active",
});

console.log("Profile Card:");
console.log(profile);
console.log();

// 2. Menu
function createMenu() {
  return html.combine(
    [
      html.bold("🎮 MAIN MENU"),
      html.strikethrough("━━━━━━━━━━━━━"),
      "",
      html.bold("1. ") + html.underline("Profile") + " 👤",
      html.bold("2. ") + html.underline("Settings") + " ⚙️",
      html.bold("3. ") + html.underline("Help") + " ❓",
      html.bold("4. ") + html.underline("About") + " ℹ️",
      "",
      html.italic("Choose an option by typing the number"),
    ],
    "\n",
  );
}

console.log("Menu:");
console.log(createMenu());
console.log();

// 3. Statistics
function createStats(stats: any) {
  return html.combine(
    [
      html.bold("📊 STATISTICS"),
      html.strikethrough("━━━━━━━━━━━━━━"),
      "",
      html.bold("Total Users: ") + html.underline(stats.users.toString()),
      html.bold("Messages: ") + html.underline(stats.messages.toString()),
      html.bold("Active Today: ") +
        html.underline(stats.activeToday.toString()),
      html.bold("Uptime: ") + html.italic(stats.uptime),
    ],
    "\n",
  );
}

const stats = createStats({
  users: 1250,
  messages: 45678,
  activeToday: 342,
  uptime: "99.9%",
});

console.log("Statistics:");
console.log(stats);
console.log();

// 4. Error Message
function createError(error: Error) {
  return html.combine(
    [
      html.bold("❌ ERROR"),
      html.strikethrough("━━━━━━━━━━"),
      "",
      html.italic("An error occurred:"),
      "",
      html.codeBlock(error.message, "text"),
      "",
      html.underline("Please try again later or contact support"),
    ],
    "\n",
  );
}

console.log("Error Message:");
console.log(createError(new Error("Connection timeout")));
console.log();

// 5. Progress Bar
function createProgress(percentage: number, label: string) {
  const filled = Math.floor(percentage / 10);
  const empty = 10 - filled;
  const bar = "█".repeat(filled) + "░".repeat(empty);

  return html.combine(
    [
      html.bold(`📊 ${label}`),
      "",
      html.inlineCode(bar) + " " + html.bold(`${percentage}%`),
      "",
      html.italic("Status: ") +
        html.underline(percentage === 100 ? "Complete" : "In progress..."),
    ],
    "\n",
  );
}

console.log("Progress Bar:");
console.log(createProgress(75, "Download Progress"));
console.log();

// 6. List Example
function createShoppingList(items: string[]) {
  return html.combine(
    [
      html.bold("🛒 Shopping List"),
      "",
      html.list(items, false),
      "",
      html.italic(`Total items: ${items.length}`),
    ],
    "\n",
  );
}

console.log("Shopping List:");
console.log(createShoppingList(["Milk", "Bread", "Eggs", "Coffee"]));
console.log();

// 7. Code Tutorial
function createTutorial() {
  const code = `import { TelegramClient } from "telegramsjs";
import { html } from "@telegram.ts/formatters";

const client = new TelegramClient("YOUR_TOKEN");

client.on("message", async (msg) => {
  const text = html.bold("Hello!") + "\\n" +
              html.italic("Welcome to the bot");
  
  await msg.reply(text, { parse_mode: "HTML" });
});

client.login();`;

  return html.combine(
    [
      html.bold("📚 Getting Started Tutorial"),
      "",
      html.italic("Step 1: Install the library"),
      html.inlineCode("npm install telegramsjs @telegram.ts/formatters"),
      "",
      html.italic("Step 2: Create your bot"),
      html.codeBlock(code, "typescript"),
      "",
      html.bold("That's it!") +
        " Your bot is ready to use beautiful formatting.",
    ],
    "\n",
  );
}

console.log("Tutorial:");
console.log(createTutorial());
console.log();

// ============================================
// Integration Example with TelegramsJS
// ============================================

console.log("=== Integration Example ===\n");

const integrationExample = `
// Full bot example with TelegramsJS
import { TelegramClient } from "telegramsjs";
import { html } from "@telegram.ts/formatters";

const client = new TelegramClient("YOUR_BOT_TOKEN");

// Store user data
const users = new Map();

client.on("ready", async ({ user }) => {
  await user.setCommands([
    { command: "/start", description: "Start the bot" },
    { command: "/profile", description: "View your profile" },
    { command: "/help", description: "Get help" }
  ]);
  
  console.log(\`Bot @\${user.username} is ready!\`);
});

client.on("message", async (message) => {
  const userId = message.author?.id;
  const text = message.content;
  
  // Initialize user
  if (!users.has(userId)) {
    users.set(userId, {
      messagesCount: 0,
      joinDate: new Date()
    });
  }
  
  const userData = users.get(userId);
  userData.messagesCount++;
  
  // Handle /start
  if (text === "/start") {
    const welcomeText = html.combine([
      html.bold("🎉 Welcome!"),
      html.strikethrough("━━━━━━━━━━━━━━━━"),
      "",
      html.italic("I'm a bot with beautiful formatting."),
      "",
      html.bold("Available commands:"),
      html.inlineCode("/profile") + " - Your profile",
      html.inlineCode("/help") + " - Help information",
      "",
      html.underline("Send any message to try it out!"),
    ], "\\n");
    
    await message.reply(welcomeText, { parse_mode: "HTML" });
  }
  
  // Handle /profile
  if (text === "/profile" && message.author) {
    const user = message.author;
    const daysSinceJoin = Math.floor(
      (Date.now() - userData.joinDate) / (1000 * 60 * 60 * 24)
    );
    
    const profileText = html.combine([
      html.bold("👤 YOUR PROFILE"),
      html.strikethrough("━━━━━━━━━━━━━━"),
      "",
      html.bold("Name: ") + html.italic(user.firstName),
      html.bold("ID: ") + html.inlineCode(user.id.toString()),
      html.bold("Messages: ") + html.underline(userData.messagesCount.toString()),
      html.bold("With us: ") + html.italic(\`\${daysSinceJoin} days\`),
    ], "\\n");
    
    await message.reply(profileText, { parse_mode: "HTML" });
  }
  
  // Handle /help
  if (text === "/help") {
    const helpText = html.combine([
      html.bold("❓ HELP"),
      html.strikethrough("━━━━━━━━━"),
      "",
      html.bold("Commands:"),
      "",
      html.bold("1. ") + html.inlineCode("/start"),
      html.italic("   Start the bot"),
      "",
      html.bold("2. ") + html.inlineCode("/profile"),
      html.italic("   View your profile"),
      "",
      html.bold("3. ") + html.inlineCode("/help"),
      html.italic("   Show this message"),
      "",
      html.underline("Need more help?"),
      "Contact " + html.inlineURL("support", "https://t.me/support"),
    ], "\\n");
    
    await message.reply(helpText, { parse_mode: "HTML" });
  }
  
  // Echo other messages
  if (text && !text.startsWith("/")) {
    const echoText = html.combine([
      html.bold("💬 Echo:"),
      html.italic(\`"\${text}"\`),
      "",
      html.underline("Length:") + " " + html.inlineCode(text.length.toString()),
    ], "\\n");
    
    await message.reply(echoText, { parse_mode: "HTML" });
  }
});

client.login();
`;

console.log("Full Integration Example:");
console.log(integrationExample);
