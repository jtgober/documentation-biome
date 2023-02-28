# Understanding ENV Environment Variables

all right im going to bring us wayyyyy back now. All the way back to the initial UI playwright tests that we created back on days 4 and 5. If you don't have the code handy and want to follow along, I updated the code to the latest version and the [repo can be cloned from here](https://github.com/jtgober/playwright-demo). After cloning it down, go ahead and add it to your personal github.With the code in hand, I want to take a peek back into that playwright.config file.

## Inspecting the playwright.config.js
 The main thing we are going to inspect here within the config is anything that has `process.env.CI` under our module.exports

 ```js
module.exports = defineConfig({
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI, // [!code focus]
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,// [!code focus]
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined, // [!code focus]
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://www.uitestingplayground.com/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
 ```

 When we see the `process.env.CI` that is talking about the anything ran in the pipeline. the `?` after starts the `ternary` operator which is just a fancy `if` statement, so let me first break down the `retries` field.

```js
 retries: process.env.CI ? 2 : 0
 // if we are running in the CI environment, set the retry count to be 2. otherwise set retry count to 0.
 ```
 
 `process.env.CI` is unique as well, in the sense that its a default environment variable in github, and is always set to `true`. [A full list of default env variables can be found here](https://docs.github.com/en/actions/learn-github-actions/variables#default-environment-variables)

 With github environment variables, they are basically the same thing as environment variables on your home PC. You can view all of your current environment variables by typing in `printenv` in git bash terminal

So once we are running in github actions, github checks our code and sees that we included the `process.env.CI` in our playwright.config. From there since we are running in the pipeline and it is alway set to true, we know that if our test fails in the pipeline, it will retry twice. 

## Why this is important
We have our code running in the CI environment. Which is cool. But `process.env.CI` doesn't do much other than make sure our code is running in the pipeline. However, We do have the ability to create our own. which is super helpful and the reason why I wanted us to switch back to the UI portion and specifically the `sample-app.spec.js`

:::details Sample app code
```js
const { test } = require('@playwright/test');
const { SampleAppPage } = require('../models/sample-app.model');

test.describe.parallel('suite', () => {


    test('log in success', async ({ page }) => {
        const sampleAppPage = new SampleAppPage(page)
        await sampleAppPage.navigateToSampleApp()
        await sampleAppPage.fillUsernameField("Gojo")
        await sampleAppPage.fillPasswordField("pwd")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("Welcome, Gojo!")
    });

    test('Wrong password test', async ({ page }) => {
        const sampleAppPage = new SampleAppPage(page)
        await sampleAppPage.navigateToSampleApp()
        await sampleAppPage.fillUsernameField("Gojo")
        await sampleAppPage.fillPasswordField("WrongPass")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("Invalid username/password")
    });

    test('no username test', async ({ page }) => {
        const sampleAppPage = new SampleAppPage(page)
        await sampleAppPage.navigateToSampleApp()
        await sampleAppPage.fillUsernameField("")
        await sampleAppPage.fillPasswordField("pwd")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("Invalid username/password")
    });

    test('log out test', async ({ page }) => {
        const sampleAppPage = new SampleAppPage(page)
        await sampleAppPage.navigateToSampleApp()
        await sampleAppPage.fillUsernameField("Gojo")
        await sampleAppPage.fillPasswordField("pwd")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("Welcome, Gojo!")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("User logged out.")
    });
})
```
:::

The code itself is fine and working. But the problem becomes this: Were are logging into our application with valid credentials and then posting them to github for all to see. Now obviously this is a sample app and we don't actually care if someone sees the `pwd`. But we need to make sure we know a way to go about doing this, without showing off our credentials in plain text in our code. thats where `environment variables` and `github secrets` comes in. Lets create a new environment variable for the username and password fields. the only ones we need to change are the `log in success` && the `log out test` tests.

:::details Old and New Code
::: code-group
```js [old sample-app.spec.js]
const { test } = require('@playwright/test');
const { SampleAppPage } = require('../models/sample-app.model');

test.describe.parallel('suite', () => {


    test('log in success', async ({ page }) => {
        const sampleAppPage = new SampleAppPage(page)
        await sampleAppPage.navigateToSampleApp()
        await sampleAppPage.fillUsernameField("Gojo")
        await sampleAppPage.fillPasswordField("pwd")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("Welcome, Gojo!")
    });

    test('Wrong password test', async ({ page }) => {
        const sampleAppPage = new SampleAppPage(page)
        await sampleAppPage.navigateToSampleApp()
        await sampleAppPage.fillUsernameField("Gojo")
        await sampleAppPage.fillPasswordField("WrongPass")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("Invalid username/password")
    });

    test('no username test', async ({ page }) => {
        const sampleAppPage = new SampleAppPage(page)
        await sampleAppPage.navigateToSampleApp()
        await sampleAppPage.fillUsernameField("")
        await sampleAppPage.fillPasswordField("pwd")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("Invalid username/password")
    });

    test('log out test', async ({ page }) => {
        const sampleAppPage = new SampleAppPage(page)
        await sampleAppPage.navigateToSampleApp()
        await sampleAppPage.fillUsernameField("Gojo")
        await sampleAppPage.fillPasswordField("pwd")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("Welcome, Gojo!")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("User logged out.")
    });
})
```
```js [new sample-app.spec.js]
const { test } = require('@playwright/test');
const { SampleAppPage } = require('../models/sample-app.model');
let username = process.env.USERNAME
let password = process.env.PASSWORD
test.describe.parallel('suite', () => {

    test('log in success', async ({ page }) => {
        const sampleAppPage = new SampleAppPage(page)
        await sampleAppPage.navigateToSampleApp()
        await sampleAppPage.fillUsernameField(username)
        await sampleAppPage.fillPasswordField(password)
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("Welcome, Gojo!")
    });

    test('Wrong password test', async ({ page }) => {
        const sampleAppPage = new SampleAppPage(page)
        await sampleAppPage.navigateToSampleApp()
        await sampleAppPage.fillUsernameField("Gojo")
        await sampleAppPage.fillPasswordField("WrongPass")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("Invalid username/password")
    });

    test('no username test', async ({ page }) => {
        const sampleAppPage = new SampleAppPage(page)
        await sampleAppPage.navigateToSampleApp()
        await sampleAppPage.fillUsernameField("")
        await sampleAppPage.fillPasswordField("pwd")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("Invalid username/password")
    });

    test('log out test', async ({ page }) => {
        const sampleAppPage = new SampleAppPage(page)
        await sampleAppPage.navigateToSampleApp()
        await sampleAppPage.fillUsernameField(username)
        await sampleAppPage.fillPasswordField(password)
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("Welcome, Gojo!")
        await sampleAppPage.clickLoginOrLogoutButton()
        await sampleAppPage.expectedLoginTextToBe("User logged out.")
    });
})
```
:::

So before we push our code out, lets jump into Github to set up our secrets

## Setting up github secrets
From Github, Make sure you your playwright repository. then click `settings`

![](/settings.png)

Then on the left hand pane, under security, click on `secrets and variables` and `actions`

![](/actions.png)

From here click on the big green button that says `New repository secret` and now we can start adding our secrets. Since the username doesn't matter create any `USERNAME` you want, just make sure its the same as what you are using in the code assertions. As for the password the `PASSWORD` secret must be `pwd` since thats the correct password for the field.

![](/pwd.png)

Now that we have added our secrets in github, the only thing we need to do now is update our github workflow. So lets head back to visual studio code.

## Updating the github workflow
Lets head on over to the github workflow. we have nearly everything we need, to run our code. the only thing we need to update is the `Run playwright tests` portion. in order to use the secrets we need to specify the `env` with the `variables` we just created. Ill also go ahead and update the run to only run the sample-app (to save us time)

```yaml
name: Playwright Tests
on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: 16
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
    - name: Run Playwright tests // [!code focus]
      run: npx playwright test sample-app.spec.js // [!code focus]
      env: // [!code focus]
        USERNAME: ${{secrets.USERNAME}}// [!code focus]
        PASSWORD: ${{secrets.PASSWORD}}// [!code focus]
    - uses: actions/upload-artifact@v3
      if: always()
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
```

lets add and commit and see the run!