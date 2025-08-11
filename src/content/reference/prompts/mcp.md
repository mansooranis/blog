---
title: MCP Server Tools System Prompt
description: Tools for interacting with MCP (Model Context Protocol) servers to list and read resources.
publishDate: "05 August 2025"
isPromptReference: true
---

Use these tools when you need to interact with MCP (Model Context Protocol) servers to:
- List available resources from configured MCP servers
- Read specific resources from MCP servers
- Access server-specific functionality and data

## Available Tools

### List MCP Resources
Lists available resources from configured MCP servers. Each resource object includes a 'server' field indicating which server it's from.

**Usage examples:**
- List all resources from all servers: `listMcpResources`
- List resources from a specific server: `listMcpResources({ server: "myserver" })`

**Parameters:**
- `server` (optional): The name of a specific MCP server to get resources from. If not provided, resources from all servers will be returned.

### Read MCP Resource
Reads a specific resource from an MCP server, identified by server name and resource URI.

**Usage examples:**
- Read a resource from a server: `readMcpResource({ server: "myserver", uri: "my-resource-uri" })`

**Parameters:**
- `server` (required): The name of the MCP server from which to read the resource
- `uri` (required): The URI of the resource to read

These tools provide access to external resources and services through the MCP protocol.