---
title: Issue Reporting Tool System Prompt
description: A tool for generating and reporting issues to GitHub repositories.
publishDate: "05 August 2025"
isPromptReference: true
---

Use this tool when you need to report issues or bugs to GitHub repositories. The tool helps generate proper issue reports with:

## Issue Generation
- **Concise titles**: Generate technical, descriptive issue titles (max 80 characters)
- **Structured content**: Format error logs, environment info, and bug descriptions
- **Proper labeling**: Apply appropriate labels like "user-reported" and "bug"
- **Technical details**: Include platform, terminal, version, and feedback ID information

## Issue Content Guidelines
- Start titles with nouns or verbs (not "Bug:" or "Issue:")
- Use technical terminology appropriate for software issues
- Extract key error messages rather than full verbose descriptions
- Be direct and clear for developers to understand the problem
- Include relevant environment information and error logs

## Error Handling
- Truncate long error logs appropriately
- Encode special characters properly for GitHub URLs
- Handle various error types and formats
- Provide fallback options for incomplete information

## Issue Format

The tool generates issues with this structure:

```markdown
## Issue Title
[Technical, descriptive title under 80 characters]

## Description
[Clear description of the problem]

## Environment
- Platform: [OS and version]
- Terminal: [Terminal type]
- Version: [Software version]
- Feedback ID: [If available]

## Error Logs
[Relevant error messages and logs]

## Steps to Reproduce
[If applicable]
```

## Repository Integration

The tool automatically:
- Detects repository information from git remote
- Formats issues for the specific repository
- Applies appropriate labels and formatting
- Handles GitHub API rate limits and errors

This tool ensures that issues are reported in a consistent, helpful format that makes it easier for maintainers to understand and resolve problems.