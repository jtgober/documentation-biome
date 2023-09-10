# Visual Comparison Testing With Playwright

Okie-Dokey here we go with another interesting one with `Visual Comparison Testing.`

## What is Visual Comparison Testing?

Visual comparison testing involves capturing screenshots of web pages or application screens and comparing them with baseline images to detect any visual differences

With Playwright, it can highlight any differences between a baseline (expected image) and a new screenshot (current image). 

## What would cause changes?

Things can often change on webpages. Some differences can be due to the following.
* Changes in the code
* Changes in Content or data
* Browser updates (or different browsers in general)

## How is this helpful?

One of my favorite useful things I always seem to include is `faster feedback`. We live in a time were we sometimes need to check things fast and efficiently. So `faster feedback` after updates is always a benefit for me.

`Catching unintended changes`: Devs may make some changes to the codebase that unintentionally alter the visual appearance of an application,

One of my other favorite things - it can serve as `documentation` (I did create an entire website dedicated to documenting after all)

Enough of the chit-chat selling points lets check it out!

## Our First Visual Comparison test! 

Our first visual test is going to be a simple one within the good ol' [Playwright.dev site.](https://playwright.dev/)

```js
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveScreenshot();
});
```

I'm also going to give a two for one special here and show attachments in the UI mode.

`npx playwright test --ui`

The first time we run we will have a failed test. We can click the toggle output button at the top right to see...

```sh
1) [chromium] › visual-test.spec.ts:3:5 › example test ───────────────────────

    Error: A snapshot doesn't exist at E:\myfilesloc\playwright-ts\tests\visual-test.spec.ts-snapshots\example-test-1-chromium-win32.png, writing actual.

      3 | test('example test', async ({ page }) => {
      4 |   await page.goto('https://playwright.dev');
    > 5 |   await expect(page).toHaveScreenshot();
        |   ^
      6 | });

        at E:\appdev\playwright-ts\tests\visual-test.spec.ts:5:3

    attachment #1: example-test-1-actual.png (image/png) ───────────────────────
    test-results\visual-test-example-test-chromium\example-test-1-actual.png
    ────────────────────────────────────────────────────────────────────────────
```

which is a normal response here. but also, after we click on our example test - we can check out the `attachments` tab to see the newly created screenshot.

Now we can re-run to have a successful test!

but hey lets break it to see what happens.

## Failing example

Ill also keep this semi-simple. If we check out the search bar, it opens a new box for us to type into over the page itself. Si im just going to add a click action, right before the screenshot check.

```js
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.getByRole('button', {name: 'Search'}).click() // added this line // [!code focus]
  await expect(page).toHaveScreenshot();
});
```
now if we re-run our test... we got ourself a failure. 

![](/visualtest.png)

We can tell here that we most certainly have a bad test and honestly there is a bit too much red so im going to pivot a bit here

lets go back to everyone's [favorite playground.](http://uitestingplayground.com/)

## UI Testing Playground Sample code
```js
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/sampleapp');
  await page.getByPlaceholder('User Name').fill('test');
  await page.getByPlaceholder('User Name').press('Tab');
  await page.getByPlaceholder('********').fill('pwd');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page).toHaveScreenshot();
})
```

Will run this to create our snapshot, but then lets change the user name to something other than test.

```js
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/sampleapp');
  await page.getByPlaceholder('User Name').fill('Steve Buscemi'); // [!code focus]
  await page.getByPlaceholder('User Name').press('Tab');
  await page.getByPlaceholder('********').fill('pwd');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page).toHaveScreenshot();
})
```
![](/sampleappvisual.png)

Now we can see that a litttttle less red :joy:

and we can plainly see what has changed in the visuals. but what if this was intended without updating the snapshot?

Wellllll we can actually change the expect statement to have a `maxDiffPixels` option.

```js
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/sampleapp');
  await page.getByPlaceholder('User Name').fill('Steve Buscemi');
  await page.getByPlaceholder('User Name').press('Tab');
  await page.getByPlaceholder('********').fill('pwd');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page).toHaveScreenshot({maxDiffPixels: 1000 }); // [!code focus]
})
```
::: tip
We need to consider what is `acceptable` for the project so it can differ based on context and requirements. do note im just trying to show an example :sweat_smile:
:::

Now this test will succeed. because the `maxDiffPixels` threshold didn't exceed 1000

::: danger
Also, please don't try to fix tests by updating the `maxDiffPixels` again im just showing an example
:::

What we can do instead, if this is an intended change, is to update the snapshots

`npx playwright test --update-snapshots`

This will create a bunch more for any other projects that are setup in the playwright config. also note that the files can be found in the `/tests/` folder.

re-running the test with `npx playwright test` or alternatively `npx playwright test --ui` will result in a success (for all tests)

You can also compare text on a page for example the `Welcome, Steve Buscemi!` text


```js
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/sampleapp');
  await page.getByPlaceholder('User Name').fill('Steve Buscemi');
  await page.getByPlaceholder('User Name').press('Tab');
  await page.getByPlaceholder('********').fill('pwd');
  await page.getByRole('button', { name: 'Log In' }).click();
  expect(await page.textContent('#loginstatus')).toMatchSnapshot('Buscemi.txt'); // [!code focus]
})
```

:mage: Magic :mage:

I hope this was an interesting learn!!