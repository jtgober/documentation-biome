# Codegen Update in playwright version 1.40.0

The playwright team have been cooking up an awesome update with the codegen feature. Now we can generate assertions for our tests, closing the loop on the test creation process. But first we need to update to the newest version

## Updating to version 1.40.0

There are a few different ways to go about updating. But I'll take you down the road that I think is easiest. First jump into the package.json and update the `@playwright/test` dependency to version 1.40.0. Also `PRO TIP TRICK` highlight the current version and press `ctrl + spacebar` to show the latest version available.

```json
{
  "name": "ui-testing-playground",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {},
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@playwright/test": "^1.37.1"// [!code --]
    "@playwright/test": "^1.40.0"// [!code ++]
  }
}
```

After `playwright/test` has been updated. make sure to do a `npm install` to download the newest version to your project.

From here we can utilize the playwright extension and click, the `Record new` button. This may prompt a download of the playwright browsers. Choose which browsers you'd like, then you should be good to go! :mage:

## Checking out the update.

Now that everything is up to date lets click on `Record new` (or use the command line) to start the codegen process.

Here we see a new horizontal bar at the top of the browser window. Checking out the tool tips we see the following

![](/codegen-new.png)

For now lets go to the [ui testing playground](http://uitestingplayground.com/) and specifically lets go to the sample app. From here we can test out all of the different assertion types that are allowed through the code gen tool.

## Asserting Visibility

First lets use the assert visibility modal to assert that the sample page text is visible.

After clicking the modal, then clicking on the `Sample App` Text. Checking on our code, we now have the following

```js
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Sample App' }).click();
  await expect(page.getByRole('heading', { name: 'Sample App' })).toBeVisible(); // [!code focus]
});
```

Note that we now have an expect statement! Specifically the `toBeVisible` assertion. 

## Assert Text

Asserting text is actually pretty awesome. We can choose any of the text on the page. When doing this it will always do a `toContainText` which will ensure that the asserted text exists.

Whenever we choose this, it will prompt us to verify the text. The cool thing with this is when we change it to something that is incorrect, it will have a red boarder around the textbox before we can check it off

### Incorrect assertion
![](/incorrect-assertion.png)

### Correct assertion
![](/correct-assertion.png)

After accepting the correct response by clicking the green check mark, our code is again updated.
```js
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Sample App' }).click();
  await expect(page.getByRole('heading', { name: 'Sample App' })).toBeVisible();
  await expect(page.locator('#login')).toContainText('Log In'); // [!code focus]
});
```

## Asserting Value

Finally lets assert some values. for username im going to put in `Biffo Shwartz` then from here i'll click on the `assert value` modal, and then click back on the username field.

code is updated to the below

```js
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Sample App' }).click();
  await expect(page.getByRole('heading', { name: 'Sample App' })).toBeVisible();
  await expect(page.locator('#login')).toContainText('Log In');
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').fill('Biffo Shwartz');
  await expect(page.getByPlaceholder('User Name')).toHaveValue('Biffo Shwartz'); // [!code focus]
});
```

one this however, that  have noticed. Is that the placeholder field for password probably `should not show the pwd value` for security purposes, but it does.

type in pwd for the password and then repeat the assertion steps. code is updated to the below

::: danger WHOA There!
Just re-iterating, you would not want to have password values present in any code. So do not use this on password fields. We will discuss how to update this in a later section
:::

```js
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Sample App' }).click();
  await expect(page.getByRole('heading', { name: 'Sample App' })).toBeVisible();
  await expect(page.locator('#login')).toContainText('Log In');
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').fill('Biffo Shwartz');
  await expect(page.getByPlaceholder('User Name')).toHaveValue('Biffo Shwartz');
  await page.getByPlaceholder('********').click();
  await page.getByPlaceholder('********').fill('pwd');
  await expect(page.getByPlaceholder('********')).toHaveValue('pwd'); // [!code focus]
});
```

## Wrapping up

One thing I have not shown yet is that the horizontal bar can be moved around. Also after clicking the red dot `record` button. The recording will end.


Thats it! Go create actual tests with the new codegen capabilities! your amazing! :mage: :mage: :mage: