# Playwright Page Object Model

Page Object Model, also known as POM, is a design pattern  that creates an object repository for storing all web elements. It is useful in reducing code duplication and improves test case maintenance. In Page Object Model, consider each web page of an application as a class file.

```js
const { expect } = require('@playwright/test'); 
exports.SampleAppPage = class SampleAppPage { 
    constructor(page) { 
        this.page = page 
        this.userNameField = page.locator('css=[type="text"]') 
        this.passwordField = page.locator('css=[type="password"]') 
        this.loginAndLogoutButton = page.locator("#login") 
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
    async clickLoginOrLogoutButton() { 
        await this.loginAndLogoutButton.click() 
    } 
    async expectedLoginTextToBe(text) { 
        await expect(this.loginText).toHaveText(text) 
    } 
}
```

```js
const { test } = require('@playwright/test'); 
const { SampleAppPage } = require('./sample-app.model'); 
test('log in success', async ({ page }) => { 
    const sampleAppPage = new SampleAppPage(page) 
    await sampleAppPage.navigateToSampleApp() 
    await sampleAppPage.fillUsernameField("Gojo") 
    await sampleAppPage.fillPasswordField("pwd") 
    await sampleAppPage.clickLoginOrLogoutButton() 
    await sampleAppPage.expectedLoginTextToBe("Welcome, Gojo!") 
}); 
test('Wrong password test', async ({ page }) => { 
    const sampleAppPage = new SampleAppPage(page) 
    await sampleAppPage.navigateToSampleApp() 
    await sampleAppPage.fillUsernameField("Gojo") 
    await sampleAppPage.fillPasswordField("WrongPass") 
    await sampleAppPage.clickLoginOrLogoutButton() 
    await sampleAppPage.expectedLoginTextToBe("Invalid username/password") 
}); 
test('no username test', async ({ page }) => { 
    const sampleAppPage = new SampleAppPage(page) 
    await sampleAppPage.navigateToSampleApp() 
    await sampleAppPage.fillUsernameField("") 
    await sampleAppPage.fillPasswordField("pwd") 
    await sampleAppPage.clickLoginOrLogoutButton() 
    await sampleAppPage.expectedLoginTextToBe("Invalid username/password") 
}); 
test('log out test', async ({ page }) => { 
    const sampleAppPage = new SampleAppPage(page) 
    await sampleAppPage.navigateToSampleApp() 
    await sampleAppPage.fillUsernameField("Gojo") 
    await sampleAppPage.fillPasswordField("pwd") 
    await sampleAppPage.clickLoginOrLogoutButton() 
    await sampleAppPage.expectedLoginTextToBe("Welcome, Gojo!") 
    await sampleAppPage.clickLoginOrLogoutButton() 
    await sampleAppPage.expectedLoginTextToBe("User logged out.") 
});
```