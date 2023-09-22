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

## Workflow Steps

The workflow consists of the following steps:

1. **Checkout Code:**
   - Action: `actions/checkout@v3`
   - Description: This step checks out the repository code.

2. **Setup Node.js:**
   - Action: `actions/setup-node@v3`
   - Description: Sets up the Node.js environment based on the specified `node-version` input or the default '18.x'.

3. **Install Dependencies:**
   - Action: `npm ${{ inputs.npm-install-command }}`
   - Description: Runs the npm command specified in the `npm-install-command` input, which is required for building the application.

4. **Install Playwright Browsers:**
   - Action: `npx playwright install --with-deps`
   - Description: Installs Playwright browsers, but only if the `run-playwright` input is set to true.

5. **Run Playwright Tests:**
   - Action: `npx playwright test`
   - Description: Runs Playwright tests, but only if `run-playwright` is set to true. It also sets environment variables `USERNAME` and `PASSWORD` using the configured secrets.

6. **Upload Artifact:**
   - Action: `actions/upload-artifact@v3`
   - Description: Uploads the 'playwright-report/' directory as an artifact, but only if the `upload-artifact` input is set to true. The artifact will be retained for 30 days.

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
