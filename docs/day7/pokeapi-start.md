# The poke api 

For the api testing were going to create an entire new project for this. So to begin, lets create a new project named 'poke-api' and download playwright.

* Create a folder named **poke-api**
* Open in Vscode - use the terminal to download playwright `npm init playwright@latest`

## Before we start

Before we start coding, lets remove a few things. If you are like me and downloaded the test examples, lets get rid of those. we will also delete out 2 of the 3 runners. after that were good to go!

**TLDR**
* remove example tests
* remove or comment out 2 0f the 3 runners in the playwright config

## Hitting the api
Lets head on over to the [pokeapi](https://pokeapi.co/) to get us started. <br /> 
A couple of things to note here.

| BaseUrl                    |   Endpoint    |
| -------------------------- | :-----------: |
| https://pokeapi.co/api/v2/ | pokemon/ditto |


From here we can go ahead and hit the submit button to send the request, which at first doesn't seem like it does anything. Lets go ahead and change the pokemon **`ditto`** to something else ill use **`squirtle`**. 

| BaseUrl                    |     Endpoint     |
| -------------------------- | :--------------: |
| https://pokeapi.co/api/v2/ | pokemon/squirtle |

Notice the  **`Resource for squirtle`** has changed with different abilities, forms, species etc... This is a bunch of information that is given to us from the **`pokemon/squirtle`** endpoint. you can see at the bottom that we can view the raw json which has a ton of lines. Clicking the checkbox will show the raw JSON version of this resource. Looking through 12,000 lines of JSON sounds like a bad time, however if you understand how to navigate through the JSON format, its not so bad. <br /> 

# Setting up our code
Lets go back into VSCode and start writing a request to hit the api. Ill create a file called `get-poke.spec.js` with the following empty test. passing in request as a fixture.

```js
const { test } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {

});
```
now all we need to do, is add in a request and log it

```js
    const pokemon = await request.get(`https://pokeapi.co/api/v2/pokemon/squirtle`);
    console.log(await pokemon.json());

```

So now we have that massive JSON in our terminal. Except due to its size, a lot of the information isn't shown. We can still view the information, we just need to select it. Lets look back at the website for just a moment. lets take note of moves. there is a ton of different moves that we can select and look at.

![](/squirtle-moves.png)

So, we have an array of moves that contain 2 keys being the name and url of that move. Lets construct a request to show more information about water-gun and hydro pump.<br />

First lets grab the moves array by making our previous log statement a variable. afterword we can grab the json variable and grab that first **moves** array.

```js
const { test } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`https://pokeapi.co/api/v2/pokemon/squirtle`);// [!code focus]
    let pokejson = await pokemon.json() // [!code focus]
    console.log(await pokejson.moves);// [!code focus]
});

```
Now, in order to select a specific move such as water-gun, all we need to do is input what we already know about arrays. we see that its the 11th item, so lets select the 11th item in the array

```js
const { test } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`https://pokeapi.co/api/v2/pokemon/squirtle`);
    let pokejson = await pokemon.json()
    console.log(await pokejson.moves[11]); //will show water-gun // [!code focus]
});

```
The same can be done for any of the items. Choosing the 12th item will populate hydro-pump
```js
const { test } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`https://pokeapi.co/api/v2/pokemon/squirtle`);
    let pokejson = await pokemon.json()
    console.log(await pokejson.moves[12]); //will show hydro-pump // [!code focus]
});

```

To get ONLY the name of the move that we are seeing we just need to go a couple layers deeper.

```js
const { test } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`https://pokeapi.co/api/v2/pokemon/squirtle`);
    let pokejson = await pokemon.json()
    console.log(await pokejson.moves[11].move.name); //will show water-gun // [!code focus]

});

```

To end this off, lets add `https://pokeapi.co/api/v2/` to our base path, within our playwright config, and fix our request

```js    
// playwright.config.js // [!code focus]   
 use: { // [!code focus]
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
     baseURL: 'https://pokeapi.co/api/v2/', // [!code focus]

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },// [!code focus]

```


```js
// get-poke.spec.js // [!code focus]
const { test } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtle`); // [!code focus]
    let pokejson = await pokemon.json()
    console.log(await pokejson.moves[11].move.name);

});

```