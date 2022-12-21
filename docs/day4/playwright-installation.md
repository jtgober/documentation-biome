# Installing Playwright

Here were going to go over how to get playwright on your machine. 
things you need
- NodeJS

## Create a folder with whatever name of your choice
- Check your version
- npm -v
- node -v

## Run Installation Command
Run `npm init playwright@latest` and select the following options
![](/PWOptions.png)
* Use TypeScript or JavaScript: JavaScript :white_check_mark:
* e2e test location: tests :white_check_mark:
* Github Actions Workflow: true :white_check_mark:
* Install Playwright Browsers: true :white_check_mark:

## Run the Example Test
:::tip From Playwright Documentation 
By default tests will be run on all 3 browsers, chromium, firefox and webkit using 3 workers. This can be configured in the playwright.config file. Tests are run in headless mode meaning no browser will open up when running the tests. Results of the tests and test logs will be shown in the terminal.
:::

Run `npx playwright test`

Once tests have completed, results can be seen within the terminal as passed/failed. You can also access the html report byt running `npx playwright show-report`


