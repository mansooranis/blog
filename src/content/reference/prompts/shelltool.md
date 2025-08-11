---
title: Shell Tool System Prompt
description: A tool for retrieving output from running or completed background bash shells.
publishDate: "05 August 2025"
isPromptReference: true
---

Use this tool when you need to:
- Retrieve output from a running or completed background bash shell
- Monitor the progress of long-running shell commands
- Check the status and output of shell processes
- Get stdout and stderr output from shell executions

## Tool Functionality
- Retrieves output from a running or completed background bash shell
- Takes a shell_id parameter identifying the shell
- Always returns only new output since the last check
- Returns stdout and stderr output along with shell status
- Use this tool when you need to monitor or check the output of a long-running shell
- Shell IDs can be found using the /bashes command

## Error Handling
The tool handles shell termination errors gracefully:
- If a shell fails to kill, it provides appropriate error messages
- Shell IDs are properly tracked and managed
- Failed operations are reported with clear error information

The tool takes a shell_id parameter to identify the specific shell and always returns only new output since the last check.