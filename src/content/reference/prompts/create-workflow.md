---
title: Claude Code Github Action Tool System Prompt
description: A tool for creating github actions that uses claude code.
publishDate: "10 August 2025"
isPromptReference: true
---
You must select at least one workflow to continue
```
on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]
  issues:
    types: [opened, assigned]
  pull_request_review:
    types: [submitted]

jobs:
  claude:
    if: |
      (github.event_name == 'issue_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review' && contains(github.event.review.body, '@claude')) ||
      (github.event_name == 'issues' && (contains(github.event.issue.body, '@claude') || contains(github.event.issue.title, '@claude')))
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: read
      issues: read
      id-token: write
      actions: read # Required for Claude to read CI results on PRs
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 1

      - name: Run Claude Code
        id: claude
        uses: anthropics/claude-code-action@beta
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}

          # This is an optional setting that allows Claude to read CI results on PRs
          additional_permissions: |
            actions: read
          
          # Optional: Specify model (defaults to Claude Sonnet 4, uncomment for Claude Opus 4)
          # model: "claude-opus-4-20250514"
          
          # Optional: Customize the trigger phrase (default: @claude)
          # trigger_phrase: "/claude"
          
          # Optional: Trigger when specific user is assigned to an issue
          # assignee_trigger: "claude-bot"
          
          # Optional: Allow Claude to run specific commands
          # allowed_tools: "Bash(npm install),Bash(npm run build),Bash(npm run test:*),Bash(npm run lint:*)"
          
          # Optional: Add custom instructions for Claude to customize its behavior for your project
          # custom_instructions: |
          #   Follow our coding standards
          #   Ensure all new code has tests
          #   Use TypeScript for new files
          
          # Optional: Custom environment variables for Claude
          # claude_env: |
          #   NODE_ENV: test
```
Installing Claude Code GitHub App

This PR adds a GitHub Actions workflow that enables Claude Code integration in our repository.

### What is Claude Code?

[Claude Code](https://claude.ai/code) is an AI coding agent that can help with:
- Bug fixes and improvements  
- Documentation updates
- Implementing new features
- Code reviews and suggestions
- Writing tests
- And more!

### How it works

Once this PR is merged, we'll be able to interact with Claude by mentioning @claude in a pull request or issue comment.
Once the workflow is triggered, Claude will analyze the comment and surrounding context, and execute on the request in a GitHub action.

### Important Notes

- **This workflow won't take effect until this PR is merged**
- **@claude mentions won't work until after the merge is complete**
- The workflow runs automatically whenever Claude is mentioned in PR or issue comments
- Claude gets access to the entire PR or issue context including files, diffs, and previous comments

### Security

- Our Anthropic API key is securely stored as a GitHub Actions secret
- Only users with write access to the repository can trigger the workflow
- All Claude runs are stored in the GitHub Actions run history
- Claude's default tools are limited to reading/writing files and interacting with our repo by creating comments, branches, and commits.
- We can add more allowed tools by adding them to the workflow file like:

\`\`\`
allowed_tools: Bash(npm install),Bash(npm run build),Bash(npm run lint),Bash(npm run test)
\`\`\`

There's more information in the [Claude Code action repo](https://github.com/anthropics/claude-code-action).

After merging this PR, let's try mentioning @claude in a comment on any PR to get started!`,FjB=`name: Claude Code Review
```
on:
  pull_request:
    types: [opened, synchronize]
    # Optional: Only run on specific file changes
    # paths:
    #   - "src/**/*.ts"
    #   - "src/**/*.tsx"
    #   - "src/**/*.js"
    #   - "src/**/*.jsx"

jobs:
  claude-review:
    # Optional: Filter by PR author
    # if: |
    #   github.event.pull_request.user.login == 'external-contributor' ||
    #   github.event.pull_request.user.login == 'new-developer' ||
    #   github.event.pull_request.author_association == 'FIRST_TIME_CONTRIBUTOR'
    
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: read
      issues: read
      id-token: write
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 1

      - name: Run Claude Code Review
        id: claude-review
        uses: anthropics/claude-code-action@beta
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}

          # Optional: Specify model (defaults to Claude Sonnet 4, uncomment for Claude Opus 4)
          # model: "claude-opus-4-20250514"
          
          # Direct prompt for automated review (no @claude mention needed)
          direct_prompt: |
            Please review this pull request and provide feedback on:
            - Code quality and best practices
            - Potential bugs or issues
            - Performance considerations
            - Security concerns
            - Test coverage
            
            Be constructive and helpful in your feedback.

          # Optional: Use sticky comments to make Claude reuse the same comment on subsequent pushes to the same PR
          # use_sticky_comment: true
          
          # Optional: Customize review based on file types
          # direct_prompt: |
          #   Review this PR focusing on:
          #   - For TypeScript files: Type safety and proper interface usage
          #   - For API endpoints: Security, input validation, and error handling
          #   - For React components: Performance, accessibility, and best practices
          #   - For tests: Coverage, edge cases, and test quality
          
          # Optional: Different prompts for different authors
          # direct_prompt: |
          #   \${{ github.event.pull_request.author_association == 'FIRST_TIME_CONTRIBUTOR' && 
          #   'Welcome! Please review this PR from a first-time contributor. Be encouraging and provide detailed explanations for any suggestions.' ||
          #   'Please provide a thorough code review focusing on our coding standards and best practices.' }}
          
          # Optional: Add specific tools for running tests or linting
          # allowed_tools: "Bash(npm run test),Bash(npm run lint),Bash(npm run typecheck)"
          
          # Optional: Skip review for certain conditions
          # if: |
          #   !contains(github.event.pull_request.title, '[skip-review]') &&
          #   !contains(github.event.pull_request.title, '[WIP]')
```

Need help? Common issues:
`+`• Permission denied → Run: gh auth refresh -h github.com -s repo,workflow
`+`• Not authorized → Ensure you have admin access to the repository
`+"• For manual setup → Visit: https://github.com/anthropics/claude-code-action"

Need help? Common issues:
`+`• Permission denied → Run: gh auth refresh -h github.com -s repo
`+`• Not authorized → Ensure you have admin access to the repository