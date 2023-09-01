# Mocking the Browser Api


// Let's break down the code step by step:

// The test function: This is likely a testing function provided by a testing framework. It's used to define and run individual test cases.

// The test case: The test case starts with an asynchronous arrow function async ({ page }) => { ... }. It receives an object with properties, and in this case, it's expecting a page property. The page object represents a browser page in Playwright, allowing you to control and interact with a web page.

// Mocking the API: The test starts by using await page.route('*/**/api/v1/fruits', async route => { ... }). This line sets up a route interception for any requests to a URL matching the pattern */**/api/v1/fruits. When a request to this URL is made, the code inside the callback function will execute.

// Inside the callback function:

// The route.fetch() function is used to capture the response of the intercepted request.
// The response body is parsed into JSON using response.json().
// A new object { name: 'Playwright', id: 100 } is pushed into the JSON array.
// The original response is then fulfilled using await route.fulfill({ response, json }), but with the modified JSON object.
// Navigating to the page: await page.goto('https://demo.playwright.dev/api-mocking'); navigates the browser page to the specified URL.

// Assertion: The test asserts that the newly added fruit "Playwright" is visible on the page. await expect(page.getByText('Playwright', { exact: true })).toBeVisible(); checks whether the text "Playwright" is present on the page and is visible.

// In summary, this test code sets up a mock for an API endpoint, simulates the addition of a new fruit using the API, navigates to a web page, and then verifies that the added fruit is displayed on the page. This kind of testing is useful for ensuring that web pages and APIs work as expected and that changes to one part of a system don't negatively impact other parts.