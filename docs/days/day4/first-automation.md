# First Playwright Automation

alright lets get into some automating! for the majority of this course we will be using the following: http://www.uitestingplayground.com/

## Automation Playground Codegen

Lets take a look at playwrights code generation tool

```sh
npx playwright codegen uitestingplayground.com
```

using this command brings up the website, and we can click on various things to generate code from the code inspector. also, you can change to any language.

Although it is a good tool. it isn't without faults. finding everything by text isn't the best way to go about finding elements. there are better locators to use. lets take a look at a page and open our dev tools.

## Element Selector Examples


| Element Selectors  | how to select in playwright (symbol) |                       example |
| ------------------ | :----------------------------------: | :----------------------------: |
| CSS Selector Class |                  .                   |   page.click('.btn-primary'); |
| CSS Selector ID    |                  #                   |   page.click('#btn-primary'); |
| By Text            |                text=                 |    page.click('text=Button'); |
| By Xpath           |                xpath=                | page.click('xpath=//button'); |



the main one to use would be by ID if it is available, because id's are unique, and don't have duplicates on a page. However, if you have a dynamic id, it will change every time on page load, and should not be used.

start writing good tests early