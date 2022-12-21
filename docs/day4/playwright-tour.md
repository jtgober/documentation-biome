# Playwright tour and async/await

So before we talk more about playwright and start coding. lets briefly cover the async await keyword.

lets take a look at our example function

```js
const { test, expect } = require('@playwright/test'); 
test('basic test', async ({ page }) => { 
  await page.goto('https://playwright.dev/'); 
  await page.locator('text=Get started').click(); 
  await expect(page).toHaveTitle(/Getting started/); 
});
```

The function we see here is an  async  function. When invoking a function in this way, its function returns a promise. This is one of the important traits of async function as their returns are guaranteed to be converted into promises.

The await keyword works inside async functions. When we use await within the async function, it will pause on the specified line until the promise is fulfilled 
lets run this code and see what happens using the following command
```sh
npx playwright test
```

cool beans! so looks like it ran 5 different "devices". we can also watch this happen in real time

```sh
npx playwright test --headed
```

...and we see the browsers load with different viewports. lets take a quick dive into the playwright.config.js

```js
projects: [ 
    { 
      name: 'chromium', 
      use: { ...devices['Desktop Chrome'] }, 
    }, 
    { 
      name: 'firefox', 
      use: { ...devices['Desktop Firefox'] }, 
    }, 
    { 
      name: 'webkit', 
      use: { ...devices['Desktop Safari'] }, 
    },
```

In here we see the chromium, webkit, and firefox browsers, but also a couple more. So whats happening with those?

well,  all they're doing is adjusting the viewport of those device types. if its an apple device, it adjusts on the webkit version, and android is updated from the chromium browser. We can also check into all the different devices that playwright supports. so, lets do that!

lets also get a failed test to see what that looks like, then check out the trace viewer

cd in to the folder location. then run

```sh
npx playwright show-trace trace.zip
```

or
```sh
npx playwright show-trace test-results\example-basic-test-Desktop-Chrome-retry1\trace.zip
```