# Class Attribute page, Scroll Bars, innerText

```js
const { test } = require('@playwright/test'); 
const { HomePage } = require('../models/home-page.model'); 
test('Navigate to Home Page', async ({ page }) => { 
    const homePage = new HomePage(page) 
    await homePage.navigateToHomePage() 
    console.log(await homePage.getQuote()); 
})
```

```js
exports.HomePage = class HomePage { 
    constructor(page) { 
        this.page = page 
        this.homePageUrl = page.goto("/home") 
        this.quote = page.locator(".mb-0") 
    } 
    async navigateToHomePage() { 
        await this.homePageUrl 
    } 
    async getQuote() { 
        let test = await this.quote.innerText() 
        return test 
    } 
}
```