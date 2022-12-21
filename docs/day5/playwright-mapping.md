# Mapping a list of Items in Playwright

We got a big one today. this is going to be the first step to figuring out one of the toughest challenges were going to have which will be the Dynamic table. 

So what were going to do is a little bit of web scraping. in the UI Testing Playground, lets work on the homepage. What I would like to do, is get every link item text, on the page, and add it to a list for us to be able to use later if we need to.

For now, lets just start out in the test itself to look at what we need to do 

lets start by making a console.log, then what we need is to choose a locator. if we want all the anchor tags, all we need to to specify 'a'

next, we need to do evaluateAll() from playwright and here's were some new material comes in for us as well, were going to create multiple function calls on one line here.

with evaluateAll, we will pass in (elements) and when we use our arrow function, that will guarantee us a promise. so what do we want to do with these elements?

to add them to a list, we need to take the 'elements' we passed in and map them. the map will also take the elements, but we will name this 'el' and we can now get these elements by using el.textContent.

```js
console.log(await page.locator('a').evaluateAll((elements) => elements.map((el) => el.textContent)));
```

but why didn't we use innerText? Well we absolutely could have

```js
  console.log(await page.locator('a').evaluateAll((elements) => elements.map((el) => el.innerText)));
```

So, how do we determine what we can and cant use? Well, ever element on a page has property values attached to it.

lets go ahead and convert this to a function on our home-page.model


```js
exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page
        this.homePageUrl = page.goto("/home")
        this.quote = page.locator(".mb-0")
        this.linkTags = page.locator("a") //added linkTags
    }
    async navigateToHomePage() {
        await this.homePageUrl
    }
    async getQuote() {
        return await this.quote.innerText()
    }

//getAllLinkTags
    async getAllLinkTags() {
        let homePageLinkTags = await this.linkTags.evaluateAll((elements) => elements.map((el) => el.textContent.trim()
        ));
        return homePageLinkTags
    }
}
```

now that we have a function, we can assign this to a variable in our test, and it is treated as an array! which we can manipulate as we please

```js
const { test, expect } = require('@playwright/test'); 
const { HomePage } = require('../models/home-page.model'); 
test('Navigate to Home Page', async ({ page }) => { 
    const homePage = new HomePage(page) 
    await homePage.navigateToHomePage()

    //get all the links 
    let homePageLinks = await homePage.getAllLinkTags()

    //How many links are there? 
    console.log(homePageLinks.length);

    //what is the index of click? 
    console.log(homePageLinks.indexOf("Click"));

    //Proof that it is 11 
    console.log(homePageLinks[11]);

    //why not assert that guy? 
    await expect(homePageLinks.indexOf("Click")).toBe(11) 
})
```