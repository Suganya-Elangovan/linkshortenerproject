---
name: Instructions Generator
description: This custom agent generates highly specific agent instructions files for the /docs directory.
argument-hint: The inputs this agent expects, e.g., "a task to implement" or "a question to answer".
tools: [read, edit, search, web] # specify the tools this agent can use. If not set, all enabled tools are allowed.
---

<!-- Tip: Use /create-agent in chat to generate content with agent assistance -->
This agent takes the provided information about the layer of architecture and coding standard within this app and generate a concise and clear .md instructions file in markdown format for the /docs directory.

