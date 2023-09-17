# First Playwright Automation

alright lets get into some automating! for the majority of this course we will be using the following: http://www.uitestingplayground.com/. So lets be good engineers and check out the website.

Specifically, lets check on the sample app link.

## Sample app

Within the sample app it looks to be a simple login script. We can use any username here, and `pwd` as the password

![](/hellosampleapp.png)


## Automation Playground Codegen

Lets take a look at playwrights code generation tool

```sh
npx playwright codegen uitestingplayground.com
```

using this command brings up the website, and we can click on various things to generate code from the code inspector. also, you can change to any language.

![](/codegendemo.png)

Although it is a good tool. it isn't without faults. finding everything by text isn't the best way to go about finding elements. there are better locators to use. lets take a look at a page and open our dev tools.

## Element Selector Examples

::: warning
Although this information is still accurate, We should try for the new locators types when applicable 
:::


| Element Selectors  | how to select in playwright (symbol) |                       example |
| ------------------ | :----------------------------------: | :----------------------------: |
| CSS Selector Class |                  .                   |   page.locator('.btn-primary'); |
| CSS Selector ID    |                  #                   |   page.locator('#btn-primary'); |
| By Text            |                text=                 |    page.locator('text=Button'); |
| By Xpath           |                xpath=                | page.locator('xpath=//button'); |



the main one to use would be by ID if it is available, because id's are unique, and don't have duplicates on a page. However, if you have a dynamic id, it will change every time on page load, and should not be used.

## New locator Types
::: tip
A list of the new best practice locators
:::

* `page.getByRole()` to locate by explicit and implicit accessibility attributes.
* `page.getByText()` to locate by text content.
* `page.getByLabel()` to locate a form control by associated label's text.
* `page.getByPlaceholder()` to locate an input by placeholder.
* `page.getByAltText()` to locate an element, usually image, by its text alternative.
* `page.getByTitle()` to locate an element by its title attribute.
* `page.getByTestId()`to locate an element based on its data-testid attribute (other attributes can be configured).

## The problem with code-gen

Although the selectors here are good, there are a couple of issues

```js
import { test, expect } from '@playwright/test'; // expect isn't being used

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Sample App' }).click();
  await page.getByPlaceholder('User Name').click(); // not needed
  await page.getByPlaceholder('User Name').fill('ol\' greg');
  await page.getByPlaceholder('********').click(); // not needed
  await page.getByPlaceholder('********').fill('pwd');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByText('Welcome, ol\' greg!').click(); // not an expect statement 
  await page.getByRole('button', { name: 'Log Out' }).click();
  await page.getByText('User logged out.').click(); // not an expect statement 
});
```

Not to mention none of these are `reusable`

We need to make sure we build reusable and stable tests early so we can build our scenarios 