# Playwright Locators and Strategies

This information can also be found on the [playwright.dev site](https://playwright.dev/docs/locators#quick-guide)

::: tip When to use role locators
Give preference to role locators when locating elements, as it closely mirrors the way users and assistive technology interpret the page
:::

These are the recommended built in locators.

- `page.getByRole()` to locate by explicit and implicit accessibility attributes.
- `page.getByText()` to locate by text content.
- `page.getByLabel()` to locate a form control by associated label's text.
- `page.getByPlaceholder()` to locate an input by placeholder.
- `page.getByAltText()` to locate an element, usually image, by its text alternative.
- `page.getByTitle()` to locate an element by its title attribute.
- `page.getByTestId()` to locate an element based on its data-testid attribute (other attributes can be configured).

## getByRole()

According to the playwright docs

> The `page.getByRole()` locator reflects how users and assistive technology perceive the page, for example whether some element is a button or a checkbox. When locating by role, you should usually pass the accessible name as well, so that the locator pinpoints the exact element.

Role locators include` buttons, checkboxes, headings, links, lists, tables, and many more` Note that many html elements like `button` have an implicitly defined role that is recognized by the role locator.

::: details Full list of roles we can target

- alert
- alertdialog
- application
- article
- banner
- blockquote
- button
- caption
- cell
- checkbox
- code
- columnheader
- combobox
- complementary
- contentinfo
- definition
- deletion
- dialog
- directory
- document
- emphasis
- feed
- figure
- form
- generic
- grid
- gridcell
- group
- heading
- img
- insertion
- link
- list
- listbox
- listitem
- log
- main
- marquee
- math
- meter
- menu
- menubar
- menuitem
- menuitemcheckbox
- menuitemradio
- navigation
- none
- note
- option
- paragraph
- presentation
- progressbar
- radio
- radiogroup
- region
- row
- rowgroup
- rowheader
- scrollbar
- search
- searchbox
- separator
- slider
- spinbutton
- status
- strong
- subscript
- superscript
- switch
- tab
- table
- tablist
- tabpanel
- term
- textbox
- time
- timer
- toolbar
- tooltip
- tree
- treegrid
- treeitem
  :::

## page.getByText()

Find an element by the text it contains. You can match by a substring, exact string, or a regular expression when using page.getByText().

:::tip When to use text locators
Use text locators to find non interactive elements like div, span, p, etc.
:::

You can locate the element by the text it contains:

```js
await expect(page.getByText("Welcome, John")).toBeVisible();
```

Set an exact match:

```js
await expect(page.getByText("Welcome, John", { exact: true })).toBeVisible();
```

Match with a regular expression:

```js
await expect(page.getByText(/welcome, [A-Za-z]+$/i)).toBeVisible();
```

## page.getByLabel()

:::tip When to use get by label
Use this locator when locating form fields.
:::

Most form elements typically come with specific labels that can be conveniently utilized for interacting with the form.

## page.getByPlaceholder()

:::tip When to use get by placeholder
Input fields often feature a placeholder attribute, which serves as a subtle clue to users regarding the expected input value.
:::

Perfect example of this was on the [sample-app page](http://uitestingplayground.com/sampleapp) within the textbox

## page.getByAltText()

:::tip When to use get by alt text
Use this locator when your element supports alt text such as img and area elements.
:::

`<img alt="playwright logo" src="/img/playwright-logo.svg" width="100" />`

```js
await page.getByAltText("playwright logo").click();
```

## page.getByTitle()

:::tip When to use get by title
Use this locator when your element has the `title` attribute.
:::

`<span title='Issues count'>25 issues</span>`

You can check the issues count after locating it by the title text:

```js
await expect(page.getByTitle("Issues count")).toHaveText("25 issues");
```

## page.getByTestId()

:::tip When to use get by test id
You can also use test ids when you choose to use the test id methodology or when you can't locate by role or text
:::

Testing by test ids is the most resilient way of testing as even if your text or role of the attribute changes the test will still pass.

:::info
Communicate with dev teams to set up this practice. Or ask if QE can add them to the elements
:::

## Locate by CSS or Xpath

:::tip When using CSS or XPATH
you can use page.locator() to create a locator that takes a selector describing how to find an element in the page.
:::

```js
await page.locator("css=button").click();
await page.locator("xpath=//button").click();

await page.locator("button").click();
await page.locator("//button").click();
```

| Element Selectors  | how to select in playwright (symbol) |             example             |
| ------------------ | :----------------------------------: | :-----------------------------: |
| CSS Selector Class |                  .                   |  page.locator('.btn-primary');  |
| CSS Selector ID    |                  #                   |  page.locator('#btn-primary');  |
| By Text            |                text=                 |  page.locator('text=Button');   |
| By Xpath           |                xpath=                | page.locator('xpath=//button'); |

:::tip When to use CSS or XPATH
It's not advisable to rely on CSS and XPath because the DOM structure can frequently change, causing tests to become less reliable. Instead, consider using locators that align closely with the way users view the page, such as role locators, or establish a clear testing agreement by defining unique test IDs.
:::
