# Reusable Workflow

In this module, we'll explore this `Reusable Workflow` created for GitHub Actions. This workflow is designed to be flexible and adaptable for various scenarios by accepting input parameters when it is called.

## Why Do this?

Dry principles count for workflows as well. `imagine` you are a senior engineer and you have `multiple` repositories that you are in charge of. `or` you are wanting to help any other team members you work with.

With a flow like this, maintainability is much easier and you'll have a chance to communicate with the advancement of QE as a whole. (assuming something like this doesn't exist in your environment)

## Starter Code - (From last video)

::: details Starter Code if you don't have it
```yaml
name: workflow input triggers

on:
  workflow_dispatch:
    inputs:
      node-version:
        description: 'Node.js version'
        required: false
        default: '14.x' # Default Node.js version if not provided
      npm-install-command:
        description: 'npm install command'
        required: true
      run-playwright:
        description: 'Enable Playwright testing'
        required: false
        default: 'true' # Enable Playwright testing by default
      upload-artifact:
        description: 'Enable artifact upload'
        required: false
        default: 'true' # Enable artifact upload by default

jobs:
  run-workflow-triggers:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout Code
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ inputs.node-version }}

    - name: Install Dependencies
      run: npm ${{ inputs.npm-install-command }}

    - name: Install Playwright Browsers
      if: ${{ inputs.run-playwright == 'true' }}
      run: npx playwright install --with-deps

    - name: Run Playwright Tests
      if: ${{ inputs.run-playwright == 'true' }}
      run: npx playwright test

    - name: Upload Artifact
      if: ${{ inputs.upload-artifact == 'true' }}
      uses: actions/upload-artifact@v3
      with:
        name: playwright-report
        path: playwright-report/
```
:::



## Workflow Inputs

From the last video we still have the same setup

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

First we need to change  a few things 
1. we should change the `name` to something more fitting
2. instead of a `workflow_dispatch` we will use `workflow_call`
3. add in `secrets` to use

```yaml
name: Reusable Workflow // [!code ++]
name: workflow input triggers // [!code --]

on:
  workflow_call: // [!code ++]
  workflow_dispatch: // [!code --]
    inputs:
      node-version:
        description: 'Node.js version'
        required: false
        default: '14.x' 
      npm-install-command:
        description: 'npm install command'
        required: true
      run-playwright:
        description: 'Enable Playwright testing'
        required: false
        default: 'true' 
      upload-artifact:
        description: 'Enable artifact upload'
        required: false
        default: 'true' 

    secrets: // [!code ++]
      USERNAME: // [!code ++]
        description: Username for testing // [!code ++]
        required: false // [!code ++]
      PASSWORD: // [!code ++]
        description: Password for testing // [!code ++]
        required: false // [!code ++]

jobs:
  run-workflow-triggers:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout Code
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ inputs.node-version }}

    - name: Install Dependencies
      run: npm ${{ inputs.npm-install-command }}

    - name: Install Playwright Browsers
      if: ${{ inputs.run-playwright == 'true' }}
      run: npx playwright install --with-deps

    - name: Run Playwright Tests
      if: ${{ inputs.run-playwright == 'true' }}
      run: npx playwright test
      env: // [!code ++]
        USERNAME: ${{secrets.USERNAME}} // [!code ++]
        PASSWORD: ${{secrets.PASSWORD}} // [!code ++]

    - name: Upload Artifact
      if: ${{ inputs.upload-artifact == 'true' }}
      uses: actions/upload-artifact@v3
      with:
        name: playwright-report
        path: playwright-report/
```

:::details Code here if you wanna copy
```yaml
name: Reusable Workflow

on:
  workflow_call:
    inputs:
      node-version:
        description: "Version of Node.js to use."
        required: false
        type: string
        default: "18.x"

      npm-install-command:
        description: "The npm command to run for building the application."
        required: true
        type: string
        default: "ci" 

      run-playwright:
        description: "Should Playwright browsers be installed and tests be run?"
        required: false
        type: boolean
        default: true

      upload-artifact:
        description: "Should the artifact be uploaded?"
        required: false
        type: boolean
        default: true

    secrets:
      USERNAME:
        description: Username for testing
        required: false
      PASSWORD:
        description: Password for testing
        required: false

jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ inputs.node-version }}

      - name: Install dependencies
        run: npm ${{ inputs.npm-install-command }}

      - name: Install Playwright Browsers
        if: ${{ inputs.run-playwright }}
        run: npx playwright install --with-deps

      - name: Run Playwright tests
        if: ${{ inputs.run-playwright }}
        run: npx playwright test
        env:
          USERNAME: ${{secrets.USERNAME}}
          PASSWORD: ${{secrets.PASSWORD}}

      - name: Upload Artifact
        if: ${{ inputs.upload-artifact == 'true' }}
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report/

```
:::
This workflow is designed to be reusable and can be called from other GitHub Actions workflows or configured to run automatically based on repository events.

Next we can jump back into any of our repositories and call the workflow using `YOUR-GITHUB-ACCOUNT/Whatever-you-named-the-repo/.github/workflows/whatever-your-yaml-name-is.yml@main`

Then we can utilize using nearly the same commands

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
and thats it! use this for all of your runs or update it how you please!