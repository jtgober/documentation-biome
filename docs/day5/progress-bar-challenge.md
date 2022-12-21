# Progress Bar Challenge

::: danger STOP
Danger zone, do not proceed unless you gave it your all!
:::

::: details Click me to view the code
```js
const { test } = require('@playwright/test');
const { ProgressBarPage } = require('../models/progress-bar.model');
test('Stop progress bar at 75%', async ({ page }) => {
    const progressBarPage = new ProgressBarPage(page)
    await progressBarPage.navigateToProgressBarPage()
    await progressBarPage.clickStartButtion()
    while (await progressBarPage.getProgressBarPercent() !== "75%") {
        console.log(`Currently at ${await progressBarPage.getProgressBarPercent()}`);
    }
    await progressBarPage.clickStopButtion()
});
```

```js
exports.ProgressBarPage = class ProgressBarPage {
    constructor(page) {
        this.page = page
        this.progressBarUrl = page.goto("/progressbar")
        this.startButton = page.locator("#startButton")
        this.stopButton = page.locator("#stopButton")
        this.progressBarText = page.locator("#progressBar")
    }
    async navigateToProgressBarPage() {
        await this.progressBarUrl
    }
    async clickStartButtion() {
        await this.startButton.click()
    }
    async clickStopButtion() {
        await this.stopButton.click()
    }
    async getProgressBarPercent() {
        let currentPercent = this.progressBarText.innerText()
        return currentPercent
    }
}
```
:::