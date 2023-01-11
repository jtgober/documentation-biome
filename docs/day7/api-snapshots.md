# Api Snapshots Testing

First and for most, what is an api snapshot testing? Snapshot testing is a type of comparison testing. Snapshot testing makes sure that the ui does not change unexpectedly.

So lets go ahead and set up a snapshot for our `poke-api.spec.js`

## Starter Code (if you need it)

to start, lets ensure that the following still works 

```js
const { test, expect } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtle`);
    const pokejson = await pokemon.json()
})
```
In order to get snapshots to work for our api testing there is one trick that we need to do. 

Take note of the JSON.stringify before we bring in our response (pokejson)

```js
const { test, expect } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtle`);
    const pokejson = await pokemon.json()
    expect(JSON.stringify(pokejson)).toMatchSnapshot() // [!code focus]

})
```
After running, you should notice an error, which also states that it creates the snapshot.
```sh
  1) [chromium] › poke-api.spec.js:4:1 › Pokemon information =======================================

    Error: A snapshot doesn't exist at C:\Users\gober\OneDrive\Desktop\poke-api\tests\poke-api.spec.js-snapshots\Pokemon-information-1-chromium-win32.txt, writing actual.

      5 |     const pokemon = await request.get(`pokemon/squirtle`);
      6 |     const pokejson = await pokemon.json()
    > 7 |     expect(JSON.stringify(pokejson)).toMatchSnapshot()
        |                                      ^
      8 | });

        at C:\Users\gober\OneDrive\Desktop\poke-api\tests\poke-api.spec.js:7:38


  1 failed
    [chromium] › poke-api.spec.js:4:1 › Pokemon information ========================================
```
Take note of the explorer menu. Here you should see the created snapshot withing the snapshots folder.
![](/snapshot.png)

Running the test again, should show a success

Awesome! there are a few things that i would like to change to the file structure. Personally i don't like the super long file name, and id prefer it be in JSON rather than a text file. **So lets head over to the playwright configuration file**

## Changing the snapshot location
In the playwright config.js We can add the snapshotPathTemplate to the following
```js
const config = {
  testDir: './tests',
  snapshotPathTemplate: '{testDir}/snapshots/{testFilePath}/{arg}.json', // [!code focus]
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
```

* `{testDir}` Will ensure that the folder is created in the **tests** folder
* `snapshots` Is a new folder that sounds good/accurate to me
* `{testFilePath}` Is the name of the test being ran
* `{arg}`  Relative snapshot path without extension. These come from the arguments passed to the toHaveScreenshot() and toMatchSnapshot() calls; if called without arguments, this will be an auto-generated snapshot name. 
* `.json` The type of file to create

Afterword, lets delete the old snapshots folder and re-run

now we have (in my opinion) a better to read folder structure. Plus, now that it is in JSON we can easily format it and view ALL of the json that we received from the endpoint! Very cool. Now lets take a look and see what happens, and what we should do if there is an issue.

## Comparisons

Lets pretend for a moment the something wonky happened to the response and it changed in some way. Lets say all the names for squirtle, changed to something else like, ***aquaman***. fitting ish?

Now lets see what happens when we re-run... it fails as we expected it would. So now we have 2 files under our test results for ***actual*** and ***expected***

![](/comparisons.png)

To make this better 
1. Change both of the file types to json
2. Ensure both are formatted
3. Select both files
4. Right click -> Compare Selected

Afterword you should be able to see that there are differences between the two.

ok, im going to fix the code back to where it was

## Final Thoughts

Snapshot testing can be great. But sometimes, it can be much more difficult. For example, what if the data we are receiving is dynamic? We will talk about that at a later date, but for now lets end it here. Thanks again!