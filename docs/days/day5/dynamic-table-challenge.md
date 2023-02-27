# Dynamic Table Answer

::: danger STOP
Danger zone, do not proceed unless you gave it your all!
:::

::: details Click me to view the code
::: code-group
```js [dynamic-table.spec.js ]
const { test, expect } = require("@playwright/test");
const { DynamicTablePage } = require("../models/dynamic-table.model");
test("Testing Dynamic Table Page", async ({ page }) => {
    const dynamicTablePage = new DynamicTablePage(page);
    await dynamicTablePage.navigateToDynamicTablePage();
    console.log(await dynamicTablePage.getChromeValitationMessage())
    console.log(await dynamicTablePage.getChromeCpuPercentage())
    //Expect them to match
    expect(await dynamicTablePage.getChromeCpuPercentage()).toMatch(await dynamicTablePage.getChromeValitationMessage());
});
```


```js [dynamic-table.model.js]
exports.DynamicTablePage = class DynamicTablePage {
    constructor(page) {
        this.page = page;
        this.dynamicTableUrl = page.goto("/dynamictable")
        this.getValidationMessage = page.locator(".bg-warning")
        this.getCells = page.locator('css=[role="cell"]')
        this.getHeaders = page.locator('css=[role="columnheader"]')
    }
    //Navigate to Dynamic Table Page
    async navigateToDynamicTablePage() {
        await this.dynamicTableUrl
    }
    //get the Chrome CPU message for validation
    async getChromeValitationMessage() {
        let validationMessage = await this.getValidationMessage.innerText()
        return validationMessage
    }
    //gets all the cell contents then trims them to return only the chrome row details with [i] as index input
    async getChromeCellContent(i) {
        let queryCellContent = await this.getCells.evaluateAll((elements) => elements.map((el) => el.textContent));
        let sliceAndDice = queryCellContent.slice(queryCellContent.indexOf("Chrome"), queryCellContent.indexOf("Chrome") + 5)
        return sliceAndDice[i]
    }
    //gets all header rows then returns the index of CPU
    async getHeaderCPUIndex() {
        let tableHeaders = await this.getHeaders.evaluateAll((elements) => elements.map((el) => el.textContent));
        let getCpuIndex = tableHeaders.indexOf('CPU')
        return getCpuIndex
    }
    //Combines the chrome cell contents with the CPU index to get correct CPU % for chrome
    async getChromeCpuPercentage() {
        let chromeCPUPercent = await this.getChromeCellContent(await this.getHeaderCPUIndex())
        return "Chrome CPU: " + chromeCPUPercent
    }
}
```
:::
