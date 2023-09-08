# Global Setup

Ok were gonna get a little fancy now (and more advanced) here and create a global setup using `Project Dependencies`

According to the playwright.dev docs
> "Project dependencies are a list of projects that need to run before the tests in another project run. They can be useful for configuring the global setup actions so that one project depends on this running first. Using dependencies allows global setup to produce traces and other artifacts."

And thats exactly what we are going to create here.

## Initial set up

We're going to create yet another project from scratch. Go ahead and use whichever method you prefer `npm init playwright@latest` or utilize the Playwright extension.

We are also going to utilize a real site for this, in particular: the [wikipedia site](https://en.wikipedia.org/wiki/Main_Page). So before beginning [create an account](https://en.wikipedia.org/w/index.php?title=Special:CreateAccount&returnto=Main+Page)

Also lets install dotenv `npm i dotenv` and then create a .env file with our username and password

## Getting Started with global setup

Now that we have playwright installed, and a Wikipedia Log in its time to get started with creating our global-setup.

Lets create a file called `global-setup.js` or `global-setup.ts` if using typescript
::: code-group
```ts [global-setup.ts]

import { test as setup, expect } from '@playwright/test';

setup('do login', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByPlaceholder('Enter your username').fill(process.env.username!);
    await page.getByPlaceholder('Enter your password').fill(process.env.password!);
    await page.context().storageState({ path: "./userauth.json" });
})
```

```ts [global-setup.js]

import { test as setup, expect } from '@playwright/test';

setup('do login', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByPlaceholder('Enter your username').fill(process.env.username);
    await page.getByPlaceholder('Enter your password').fill(process.env.password);
    await page.context().storageState({ path: "./userauth.json" });
})
```
:::

::: tip
The only difference here between ts and js is the `!` at the end of the process.env.user/pass
:::

Now lets walk through this code -
```js
import { test as setup, expect } from '@playwright/test'; // This line imports the test function from the library and assigns it the alias setup. This is done for convenience, allowing you to use setup instead of test in the code.

setup('do login', async ({ page }) => { // the use of setup instead of test is used here
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByPlaceholder('Enter your username').fill(process.env.username);
    await page.getByPlaceholder('Enter your password').fill(process.env.password);
    // the above code logs into Wikipedia using our creds

    await page.context().storageState({ path: "./userauth.json" });
    //This captures the storage state of the page (e.g., cookies, local storage) and saves it to a file named "userauth.json" in the current directory.
})
```

## Updating the playwright.config

First we need to setup dotenv 
::: code-group
```js [before]
//playwright.config.js
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config(); un-comment this // [!code focus]

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
```
```js [after]
//playwright.config.js
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
 require('dotenv').config(); // [!code focus]

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
```
:::

Next lets Scroll down to the `projects` section. I'm going to go ahead and remove webkit and firefox

Now lets create a new project
```js
projects: [
    {
      name: 'setup', // can be named anything you'd like
      testDir: './', // sincewe have testDir: './tests', within our config, we specify the global-setup location
      testMatch: 'global-setup.ts', // could ue regex - but just add your global setup file here
    },
```

Now we should have our setup nearly complete. Lets update the `chromium` project so we can utilize the setup.
```js
projects: [
    {
      name: 'setup',
      testDir: './', 
      testMatch: 'global-setup.ts', 
    },
    {
      name: 'chromium', // [!code focus]
      dependencies: ['setup'], // this shows we are depend on the setup script outlined above. // [!code focus]
      use: { ...devices['Desktop Chrome'], // [!code focus]
      storageState: "./userauth.json" }, // user our storage state cookies for log in next time! // [!code focus]
    },
```

Now all that is left is creating a test

## Creating a test

For this I have a quick test prepared that utilizes the search bar

```js
//search-wiki.spec.js
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Main_Page'); // before running each test go to the wiki main page
});
// NOTE: NO LOGIN SCRIPTS
test('Search for Frida Kahlo', async ({ page }) => {
    await page.getByRole('link', { name: 'Wikipedia', exact: true }).click();
    await page.getByLabel('Search Wikipedia').fill('Frida Kahlo');
    await page.getByRole('combobox', { name: 'Search Wikipedia' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.getByRole('heading', { name: 'Frida Kahlo' }).locator('span')).toContainText("Frida Kahlo")
});
// NOTE: NO LOGIN SCRIPTS
test('Search for Stone Cold Steve Austin', async ({ page }) => {
    await page.getByLabel('Search Wikipedia').fill('Stone Cold Steve Austin');
    await page.getByRole('link', { name: 'Stone Cold Steve Austin' })
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.getByRole('heading', { name: 'Stone Cold Steve Austin' }).locator('span')).toContainText("Steve Austin")
});
```

now if we run the above tests, the global setup script will run first, and create our `./userauth.json` which will auto log into wikipedia for us

::: tip
creating more tests in the tests folder will also allow you to continue using that login. but make sure to run `npx playwright test` ive noticed the plugin running with 1 worker and the ui mode only running the global setup script.
:::

Awesome stuff! Keep on learning and i hope this helps! :mage:
