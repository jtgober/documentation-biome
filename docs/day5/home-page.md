# home-page and using baseUrl
 Within the playwright config we can updated the **baseURL** under the **use** object.
```js
const config = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {  // [!code focus]
    baseURL: 'http://uitestingplayground.com',// [!code focus]

    actionTimeout: 0,

    trace: 'on-first-retry',
  },// [!code focus]
```
a quick homepage example.
```js
exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page
        this.home = page.goto("/home")
    }
    async navigateToHomePage() {
        await this.home
    }
}
```