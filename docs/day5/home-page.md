# home-page and using baseUrl
// TODO update this
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