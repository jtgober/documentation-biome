# Mocking the Browser Api

In this module we are going to be talking about this piece of code supplied by the playwright docs

```js 
import { test, expect } from '@playwright/test';
test("mocks a fruit and doesn't call api", async ({ page }) => {
  // Mock the api call before navigating
  await page.route('*/**/api/v1/fruits', async route => {
    const json = [{ name: 'Strawberry', id: 21 }];
    await route.fulfill({ json });
  });
  // Go to the page
  await page.goto('https://demo.playwright.dev/api-mocking');

  // Assert that the Strawberry fruit is visible
  await expect(page.getByText('Strawberry')).toBeVisible();
});
```

Lets first take a look at the [page](https://demo.playwright.dev/api-mocking)

![](/mock-browser.png)

Alright so this is a list a fruits. But lets also check our devtools for moment

If we go to the Network tab, and refresh the page with f5. we will se some new information

![](/devtool.png)

Notice `fruits` has a request url of `https://demo.playwright.dev/api-mocking/api/v1/fruits` which is a GET call with a status of `304` (unmodified)

Now that we have done a little investigation work lets go run our code in UI mode. 

## Code run

`npx playwright test --ui`

After we run the code there we see something new. Instead of a list of fruits we now just have a single item

![](/strawberrymock.png)

Within the network tab we also see that the GET /fruits call now has a status code of `200` So how does this work? Lets break down the code

## Code Breakdown 

Let's break down the code step by step:

```js 
import { test, expect } from '@playwright/test';
test("mocks a fruit and doesn't call api", async ({ page }) => {
// When a request to this URL is made, the code inside the callback function.
  await page.route('*/**/api/v1/fruits', async route => { // this sets up a route interception for any requests to a url matching that specific pattern of */**/api/v1/fruits
   const json = [{ name: 'Strawberry', id: 21 }]; // Here we want our response to be a strawberry with an id of 21
    await route.fulfill({ json }); // The original response is then fulfilled using await route.fulfill({ response, json }), but with the modified JSON object.
  });
  // Go to the page
  await page.goto('https://demo.playwright.dev/api-mocking');

  // Assert that the Strawberry fruit is visible
  await expect(page.getByText('Strawberry')).toBeVisible();
});
```

Awesome! but what happens if we add something unexpected. im going multiple items since its an array as well.

```js 
import { test, expect } from '@playwright/test';

test("mocks a fruit and doesn't call api", async ({ page }) => {
  // Mock the api call before navigating
  await page.route('*/**/api/v1/fruits', async route => {
    const json = [{ name: 'Jonathan Gober', id: 1 },{ name: 'The Best', id: 2 },{ name: 'Playwright Automation Course!', id: 3 }];
    await route.fulfill({ json });
  });
  // Go to the page
  await page.goto('https://demo.playwright.dev/api-mocking');

  // Assert that the Strawberry fruit is visible
  await expect(page.getByText('Jonathan Gober')).toBeVisible();
});
```

![](/thebestcourse.png)

Also, instead of modifying the entire response, we can push additional items to the array of fruits.

```js
import { test, expect } from '@playwright/test';

test('gets the json from api and adds a new fruit', async ({ page }) => {
  // Get the response and add to it
  await page.route('*/**/api/v1/fruits', async route => {
    const response = await route.fetch();
    const json = await response.json();
    json.push({ name: 'Gojojojo', id: 9001 });
    // Fulfill using the original response, while patching the response body
    // with the given JSON object.
    await route.fulfill({ response, json });
  });

  // Go to the page
  await page.goto('https://demo.playwright.dev/api-mocking');

  // Assert that the new fruit is visible
  await expect(page.getByText('Gojojojo', { exact: true })).toBeVisible();
});
```

This is neat stuff byt why do mocking?

## Usefulness of Mocks

`Test Isolation:` this is when dependencies are still in development, under maintenance, or have rate limits or usage fees.
`Testing without External Dependencies:` API mocking allows you to test your code even when the real API or service is unavailable or unreliable.
`Predictable Testing Environments:` Mocked APIs provide a controlled and predictable testing environment.

Theses are just the tip of the iceberg when it comes to `Mocking`. It can be a very valuable tool and a great asset to your arsenal! 