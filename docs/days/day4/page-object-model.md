# Playwright Page Object Model

Page Object Model, also known as POM, is a design pattern  that creates an object repository for storing all web elements. It is useful in reducing code duplication and improves test case maintenance. In Page Object Model, consider each web page of an application as a class file.

## Updating our code

Before we update our code entirely, lets look at some scenarios.

1. User logs in successfully
2. User uses wrong pass
3. No username entered, but with a correct password
4. User logs in and logs out successfully


So we have 4 scenarios here, and we want to follow `DRY` principles 

* `D`on't
* `R`epeat
* `Y`ourself

So lets start by creating a folder to store our page objects. Personally, i like to call mine `models`

Within the `models` folder lets create a `sample-app.model.js`

## sample-app.model.js

Lets build out our page class

```js
const { expect } = require('@playwright/test'); 
exports.SampleAppPage = class SampleAppPage { //exports a class named SampleAppPage
    constructor(page) { // a constructor of the class, with the page fixture to represent the browser page. 
        this.page = page  // our page
        this.userNameField = page.getByPlaceholder('User Name') // find by placeholder
        this.passwordField = page.getByPlaceholder('********') // find by placeholder
        this.loginButton = page.getByRole('button', { name: 'Log In' }) // find button element with the name of Log In
        this.logoutButton = page.getByRole('button', { name: 'Log Out' }) // find button element with the name of Log Out
        this.loginText = page.locator("#loginstatus") // Finds an element with the ID 'loginstatus'
    }  

    // below will utilize the above elements 
    async navigateToSampleApp() { 
        await this.page.goto('http://www.uitestingplayground.com/sampleapp')  // go to sample app page
    } 
    async fillUsernameField(username) { 
        await this.userNameField.fill(username) //  Fills the username field with the provided username
    } 
    async fillPasswordField(password) { 
        await this.passwordField.fill(password)  // Fills the username field with the provided password
    } 
    async clickLogoutButton() { 
        await this.logoutButton.click() // Clicks the logout button.
    } 
    async clickLoginButton() { 
        await this.loginButton.click() // Clicks the login button.
    } 
    async expectedLoginTextToBe(text) { 
        await expect(this.loginText).toHaveText(text) // Asserts that the loginText element has the specified text.
    } 
}
```
## Re-building our test

Lets start with the simplest of scenarios - a valid login test

Lets also change the name of the test name to `sample-app.spec.js`

```js
const { test } = require('@playwright/test'); 
const { SampleAppPage } = require('../models/sample-app.model'); // bring in the sample-app.model.js

test('log in success', async ({ page }) => { 
    const sampleAppPage = new SampleAppPage(page) // new instance of the SampleAppPage class
    // notice the rest is readable code. we dont have to guess whats happening here.
    await sampleAppPage.navigateToSampleApp() 
    await sampleAppPage.fillUsernameField("Percival Picklepants") 
    await sampleAppPage.fillPasswordField("pwd") 
    await sampleAppPage.clickLoginButton() 
    await sampleAppPage.expectedLoginTextToBe("Welcome, Percival Picklepants!") 
}); 
```

## Finishing the scenarios

Before I go through and finish the scenarios, why not try it yourself first. Pause the video, and attempt to finish the remaining scenarios here on our sample-app.spec.js

::: danger STOP
Danger zone, do not proceed unless you gave it your all!
:::

::: details

::: code-group
```js [sample-app.model.js]
const { expect } = require('@playwright/test'); 
exports.SampleAppPage = class SampleAppPage { 
    constructor(page) { 
        this.page = page 
        this.userNameField = page.getByPlaceholder('User Name')
        this.passwordField = page.getByPlaceholder('********')
        this.loginButton = page.getByRole('button', { name: 'Log In' })
        this.logoutButton = page.getByRole('button', { name: 'Log Out' })
        this.loginText = page.locator("#loginstatus") 
    } 
    async navigateToSampleApp() { 
        await this.page.goto('http://www.uitestingplayground.com/sampleapp') 
    } 
    async fillUsernameField(username) { 
        await this.userNameField.fill(username) 
    } 
    async fillPasswordField(password) { 
        await this.passwordField.fill(password) 
    } 
    async clickLogoutButton() { 
        await this.logoutButton.click() 
    } 
    async clickLoginButton() { 
        await this.loginButton.click() 
    } 
    async expectedLoginTextToBe(text) { 
        await expect(this.loginText).toHaveText(text) 
    } 
}
```

```js [sample-app.spec.js]
const { test } = require('@playwright/test'); 
const { SampleAppPage } = require('../models/sample-app.model'); 

test('log in success', async ({ page }) => { 
    const sampleAppPage = new SampleAppPage(page) 
    await sampleAppPage.navigateToSampleApp() 
    await sampleAppPage.fillUsernameField("Gojo") 
    await sampleAppPage.fillPasswordField("pwd") 
    await sampleAppPage.clickLoginButton() 
    await sampleAppPage.expectedLoginTextToBe("Welcome, Gojo!") 
}); 
test('Wrong password test', async ({ page }) => { 
    const sampleAppPage = new SampleAppPage(page) 
    await sampleAppPage.navigateToSampleApp() 
    await sampleAppPage.fillUsernameField("Gojo") 
    await sampleAppPage.fillPasswordField("WrongPass") 
    await sampleAppPage.clickLoginButton() 
    await sampleAppPage.expectedLoginTextToBe("Invalid username/password") 
}); 
test('no username test', async ({ page }) => { 
    const sampleAppPage = new SampleAppPage(page) 
    await sampleAppPage.navigateToSampleApp() 
    await sampleAppPage.fillUsernameField("") 
    await sampleAppPage.fillPasswordField("pwd") 
    await sampleAppPage.clickLoginButton() 
    await sampleAppPage.expectedLoginTextToBe("Invalid username/password") 
}); 
test('log out test', async ({ page }) => { 
    const sampleAppPage = new SampleAppPage(page) 
    await sampleAppPage.navigateToSampleApp() 
    await sampleAppPage.fillUsernameField("Gojo") 
    await sampleAppPage.fillPasswordField("pwd") 
    await sampleAppPage.clickLoginButton() 
    await sampleAppPage.expectedLoginTextToBe("Welcome, Gojo!") 
    await sampleAppPage.clickLogoutButton() 
    await sampleAppPage.expectedLoginTextToBe("User logged out.") 
});

```
:::
