# Workflow Input Triggers

In this documentation, we'll explore the "Workflow Input Triggers" GitHub Actions workflow. This workflow allows you to manually trigger its execution and provides input parameters to customize its behavior.

## Workflow Trigger

The workflow is triggered manually using the "workflow_dispatch" event, which allows users to input specific parameters when starting the workflow execution.

## Workflow Inputs

The following inputs can be provided when triggering this workflow:

- `node-version`: Specifies the Node.js version to use. It is optional and defaults to '14.x' if not provided.
- `npm-install-command`: Specifies the npm install command. This input is required.
- `run-playwright`: A boolean flag indicating whether Playwright testing should be enabled. It is optional and defaults to true.
- `upload-artifact`: A boolean flag indicating whether artifact upload should be enabled. It is optional and defaults to true.

## Workflow Execution

To manually trigger this workflow and customize its behavior, you can use the GitHub Actions interface:

1. Navigate to your repository on GitHub.

2. Click on the "Actions" tab.

3. In the left sidebar, you will see the name of the workflow: "Workflow Input Triggers." Click on it.

4. Click the "Run workflow" button.

5. Customize the workflow by providing input values:
   - Set the `node-version` input if you want to use a specific Node.js version.
   - Specify the required `npm-install-command`.
   - Toggle the `run-playwright` and `upload-artifact` options as needed.

6. Click the "Run workflow" button to start the workflow with your custom inputs.

## Workflow Steps

The workflow consists of the following steps:

1. **Checkout Code:**
   - Action: `actions/checkout@v3`
   - Description: This step checks out the repository code.

2. **Setup Node.js:**
   - Action: `actions/setup-node@v3`
   - Description: Sets up the Node.js environment based on the specified `node-version` input or the default '14.x'.

3. **Install Dependencies:**
   - Action: Runs the npm command specified in the `npm-install-command` input, which is required for building the application.

4. **Install Playwright Browsers:**
   - Action: `npx playwright install --with-deps`
   - Description: Installs Playwright browsers, but only if the `run-playwright` input is set to true.

5. **Run Playwright Tests:**
   - Action: `npx playwright test`
   - Description: Runs Playwright tests, but only if `run-playwright` is set to true. It also sets environment variables `USERNAME` and `PASSWORD` using the configured secrets.

6. **Upload Artifact:**
   - Action: `actions/upload-artifact@v3`
   - Description: Uploads the 'playwright-report/' directory as an artifact, but only if the `upload-artifact` input is set to true. The artifact will be retained for 30 days.

This documentation provides an overview of the "Workflow Input Triggers" workflow and how to manually trigger and customize its behavior using input parameters.
