# Status Code Validations

So we've learned a bit about how to call an api endpoint and how to manipulate JSON to do what we want it to do. However, we haven't made a test to ensure things are correct yet.

lets go back to first spec (poke-api.spec.js) and create a couple of assertions.

## Asserting the api with truthy

:::details If you don't have the code you can grab it here
```js
const { test } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtle`);
    let pokejson = await pokemon.json()
});
```
:::
im going to remove the move.name from the console log and add our first assertion. but we need to also make sure we bring in the expect library. 

Lets begin with ht easy assertion of the status code. There are a different ways we can go about this.

```js
const { test, expect } = require('@playwright/test'); // [!code ++]

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtle`);
    let pokejson = await pokemon.json()
    expect(pokemon.ok()).toBeTruthy() // [!code ++]
});
```
and to run this im going to run just this test using `npx playwright test poke-api.spec.js`

This is one of the easiest and most common api tests. the ` expect(pokemon.ok()).toBeTruthy()` line checks to ensure that the status code that is received is from 200 to 299. to show this failing we can just change up the request type

```js
const { test, expect } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtley`); // [!code --]
    let pokejson = await pokemon.json()
    expect(pokemon.ok()).toBeTruthy() // [!code ++]
});
```
This is a good and valid test, but if we need to we can make this more exact
## Asserting status code by OK

Instead of checking a range of status codes using the `pokemon.ok()` we can change it to `pokemon.statusText()` to assert specific status text.

```js
const { test, expect } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtley`); // [!code --]
    expect(pokemon.statusText()).toBe('OK') // [!code ++]
});
```
Looking at this we see that it actually received **"Not found"**

we can change this back to a working condition and see that this works properly
```js
const { test, expect } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtle`); // [!code ++]
    expect(pokemon.statusText()).toBe('OK') // [!code ++]
});
```

Do note however, the string value we receive is case sensitive. changing to an 'ok' expectation will cause failures

## Asserting specific status codes

Instead of checking a range of status codes using the `pokemon.statusText()` we can change it to `pokemon.status()` to assert specific status codes.

```js
const { test, expect } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtley`); // [!code --]
    let pokejson = await pokemon.json()
    expect(pokemon.status()).toBe(200) // [!code ++]
});
```
This is better in my opinion, as it also shows what the status code we received. 

```js
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404

  4 | test('Pokemon information', async ({ request }) => {
  5 |     const pokemon = await request.get(`pokemon/squirtley`); 
> 6 |     expect(pokemon.status()).toBe(200)
    |                              ^
  7 | });

```

but for now im going to fix it back to a working condition. 

```js
const { test, expect } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtle`);
    expect(pokemon.status()).toBe(200)
});
```

## Negative Testing

We can also check to ensure that certain endpoints don't exist or rather, have no functionality.

```js
const { test, expect } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtley`); // [!code --]
    expect(pokemon.ok()).toBeFalsy() // [!code ++]
});
```

Or going back to using exact status codes

```js
const { test, expect } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtley`); // [!code --]
    expect(pokemon.status()).not.toBe(200) // [!code ++]
});
```

OK! i believe that is more than enough talk about status code testing. Lets move on.