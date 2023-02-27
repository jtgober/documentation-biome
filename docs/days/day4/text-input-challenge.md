# Text input Coding Challenge Answer key

::: danger STOP
Danger zone, do not proceed unless you gave it your all!
:::

::: details Click me to view the code
::: code-group
```js [text-input.spec.js]
const { test } = require('@playwright/test'); 
const { TextInputPage } = require('./models/text-input.model')
const myButton = "The Best Button"

test('test updating button', async ({ page }) => { 
    const textInputPage = new TextInputPage(page) 
    await textInputPage.navigateToTextInputPage() 
    await textInputPage.fillInputBox(myButton) 
    await textInputPage.clickUpdatingButton() 
    await textInputPage.expectTextInputToBe(myButton) 
})
```
```js [text-input.model.js]
const { expect } = require('@playwright/test'); 
exports.TextInputPage = class TextInputPage { 
    constructor(page) { 
        this.page = page 
        this.url = page.goto('http://www.uitestingplayground.com/textinput') 
        this.inputBox = page.locator('#newButtonName') 
        this.updatingButton = page.locator('#updatingButton') 
    } 
    async navigateToTextInputPage() { 
        await this.url 
    } 
    async fillInputBox(text) { 
        await this.inputBox.fill(text) 
    } 
    async clickUpdatingButton() { 
        await this.updatingButton.click() 
    } 
    async expectTextInputToBe(text) { 
        await expect(this.updatingButton).toHaveText(text) 
    } 
}
```
:::