# Checking out the pet store api and query parameters

Alright. Were moving on from the poke api :frowning_face: because regrettably it only supports get requests (for good reasons). Using this api were going to take a more professional approach due to the apis being documented with open api (formerly swagger). Within open api we can directly test apis and see how they work. This is good for base testing, but we still will need to create automated tests off of these.

## Pet Store URL
[pet store api can be found here](https://petstore.swagger.io/)

## First Demonstration  
Take note at the top base url - ***[ Base URL: petstore.swagger.io/v2 ]***. Whenever we start building our test automation we know we can add that within our playwright config.

But for now lets focus first on the ***pet*** endpoint
![](/petendpoint.png)

We are familiar with ***GET*** Requests already. So lets first take a peek at ***findByStatus***. Clicking the down arrow and clicking ***Try it out*** will allow us to send a request. Notice that status is required before sending anything out.

![](/statusRequired.png)

If we attempt to click the execute button before we choose a status, an error message will pop up asking us to correct the validation errors.

Lets click on ***available*** to see what we return

Scrolling down we can see that the response body has returned a status code of 200, and a ton of available pets within the response body. 

The one new thing we are seeing here is that initial addition of selecting one of the status's (available, pending, sold) Those selections are called ***query parameters***. lets jump into our code to create a test for this.

## Playwright Query Params

First things first, lets add that base url that we saw earlier. 

:::tip 
Ensure that https:// is added at the beginning, and a / added at the end
:::

```js
// playwright.config.js

 use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://petstore.swagger.io/v2/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
```
Now lets go ahead and create a test to grab that response. I am going to name my spec `pet-endpoint.spec.js`

Within our spec file we can create a test with the following

```js
// @ts-check
const { test } = require('@playwright/test');

test('available pets', async ({ request }) => {
  const response = await request.get(`pet/findByStatus`)
  console.log(await response.json());
});
```
This should come back as a success, however with no data. Lets add our first query parameters.

```js
// @ts-check
const { test } = require('@playwright/test');

test('available pets', async ({ request }) => {
  const response = await request.get(`pet/findByStatus`, {
    params: {
      'status': 'available',
    }
  })
  console.log(await response.json());
});
```
running this now should print out a bunch of results within our console.

We can also compare the URL results to see that they are the same as what is in the open api documentation. lets change our log to view the url

```js
// @ts-check
const { test } = require('@playwright/test');

test('available pets', async ({ request }) => {
  const response = await request.get(`pet/findByStatus`, {
    params: {
      'status': 'available',
    }
  })
  console.log(await response.url()); // [!code focus]
});
```
after running we should see the response log the following

```sh
https://petstore.swagger.io/v2/pet/findByStatus?status=available
```

and it is the same as what is in the documentation
![]( /requestUrl.png)

However, there is a defect with this endpoint (at the time of recording)

If we change our query parameter to something that does not exist, we still receive a status code of 200, as opposed to a status code of 400 as it states in the documentation.

```js
// @ts-check
const { test, expect } = require('@playwright/test');

test('available pets', async ({ request }) => {
  const response = await request.get(`pet/findByStatus`, {
    params: {
      'cheese': 'burger',
    }
  })
  console.log(await response.url());
  expect(response.status()).toBe(400)
}); 
```
and we receive the following for our url of `https://petstore.swagger.io/v2/pet/findByStatus?cheese=burger`
```sh
 Error: expect(received).toBe(expected) // Object.is equality

    Expected: 400
    Received: 200

       9 |   })
      10 |   console.log(await response.url());
    > 11 |   expect(response.status()).toBe(400)
         |                             ^
      12 | });
```

Congrats! We found a bug. lets continue to the next one.