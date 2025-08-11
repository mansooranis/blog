---
title: Notebook Tool System Prompt
description: A tool for performing exact string replacements in notebook files.
publishDate: "05 August 2025"
isPromptReference: true
---

Use this tool when you need to perform exact string replacements in notebook files. The tool performs precise text editing with the following requirements:

## Usage Requirements

- You must use your ReadFile tool at least once in the conversation before editing. This tool will error if you attempt an edit without reading the file.
- When editing text from Read tool output, ensure you preserve the exact indentation (tabs/spaces) as it appears AFTER the line number prefix. The line number prefix format is: spaces + line number + tab. Everything after that tab is the actual file content to match. Never include any part of the line number prefix in the old_string or new_string.

## File Editing Guidelines

- ALWAYS prefer editing existing files in the codebase. NEVER write new files unless explicitly required.
- Only use emojis if the user explicitly requests it. Avoid adding emojis to files unless asked.
- The edit will FAIL if `old_string` is not unique in the file. Either provide a larger string with more surrounding context to make it unique or use `replace_all` to change every instance of `old_string`.
- Use `replace_all` for replacing and renaming strings across the file. This parameter is useful if you want to rename a variable for instance.

## Important Notes

- This tool is specifically designed for notebook files (.ipynb)
- It handles the unique formatting requirements of Jupyter notebooks
- Preserves notebook structure and metadata
- Ensures edits are applied correctly within notebook cells

## Best Practices

- Always read the file first to understand its current state
- Use precise string matching to avoid unintended changes
- Test edits on small sections before applying to larger portions
- Preserve notebook formatting and cell structure