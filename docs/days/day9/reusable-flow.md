# Reusable Workflow

In this module, we'll explore this `Reusable Workflow` created for GitHub Actions. This workflow is designed to be flexible and adaptable for various scenarios by accepting input parameters when it is called.

## Workflow Inputs

The following inputs can be provided when calling this workflow:

- `node-version`: Specifies the Node.js version to use. It is optional and defaults to '18.x'.
- `npm-install-command`: Specifies the npm command to run for building the application. This input is required.
- `run-playwright`: A boolean flag indicating whether Playwright browsers should be installed and tests run. It is optional and defaults to true.
- `upload-artifact`: A boolean flag indicating whether the artifact should be uploaded. It is optional and defaults to true.

## Workflow Secrets

This workflow can also utilize secrets for sensitive information like credentials:

- `USERNAME`: Username for testing.
- `PASSWORD`: Password for testing.

These secrets should be configured at the repository level.

## Workflow Execution

This workflow is designed to be reusable and can be called from other GitHub Actions workflows or configured to run automatically based on repository events.

```yaml
name: Main Workflow
on: [push, pull_request]
jobs:
  call-reusable-workflow:
    uses: jtgober/reusable-flows/.github/workflows/reusable-flow.yml@main
    with:
      node-version: '16.x'
      npm-install-command: 'ci'
      run-playwright: true
      upload-artifact: true
```
