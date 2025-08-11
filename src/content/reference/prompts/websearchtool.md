---
title: Web Search Tool System Prompt
description: A tool for searching the web to access current information and recent data.
publishDate: "05 August 2025"
isPromptReference: true
---

Use this tool when you need to search the web to:
- Access up-to-date information for current events and recent data
- Get information beyond Claude's knowledge cutoff
- Research current topics, news, or recent developments
- Find the latest documentation or resources

## Tool Features
- Allows Claude to search the web and use the results to inform responses
- Provides up-to-date information for current events and recent data
- Returns search result information formatted as search result blocks
- Use this tool for accessing information beyond Claude's knowledge cutoff
- Searches are performed automatically within a single API call

## Usage Notes
- Domain filtering is supported to include or block specific websites
- Web search is only available in the US
- Account for "Today's date" in environment info. For example, if environment says "Today's date: 2025-07-01", and the user wants the latest docs, do not use 2024 in the search query. Use 2025.

The tool provides search result information formatted as search result blocks and supports domain filtering to include or block specific websites.