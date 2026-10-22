# What's new

Read on the skill's first use in a conversation, when the user says yes to a summary of what's new (SKILL.md, First use in a conversation). The current release notes are every section from the top of this file down to and including the latest x.y release (now 1.1): summarise them in a few short bullets, in plain words. Don't paste this file. Older versions are on the [releases page](https://github.com/ratava/videoexpress-scripting-skill/releases).

## 1.1

### New

- **What's new.** The first time the skill is used in a conversation, it asks whether you'd like a summary of what's new. Where memory is on, it asks once per version instead of in every conversation.
- **Conversations named after the shot.** Once the shot has a subject, the conversation is renamed "[subject] · VideoExpress Prompt" where the app allows it (such as Claude Desktop or Grok); elsewhere the name is left as it is.

### Fixed

- **Starting with just the skill's name** (or its slash command) now goes straight to the "Do you have something to start from?" card instead of a list of options in text. A first message that already says what you want is acted on without asking.
