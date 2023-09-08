# Running Tests in UI Mode

There is a UI mode available for playwright and its actually pretty darn cool. You can run it using 

`npx playwright test --ui` 

Afterword you will see the following popup

![](/pwui.png)

This has whichever test ready to be ran you can click the run button to run all tests, or the run button on a single test.

Similar to the trace viewer, you can view the site directly and see what is happening step by step

![](/pwui2.png)

This is really neat. you can see each action that happens within the test step by step.

## Dev tools

at the bottom of the viewer you may also have noticed that you can also view `Source`, `Console`, `Network`, `Call`, and `Attachments` which can also be useful in their own way

`Source` Will show you the source code for the entire test
`Console` The console tab shows the console logs for each action
`Network` Will show network logs for each action
`Attachments` Allows you to view attachments for visual regression testing.

More on attachments in the upcoming visual regression testing video! :mage:


## Watch mode

Next to each test there this little eye icon :eye: 

![](/pwuieye.png)

Clicking this will watch and re-run tests when you make changes to it. - very nifty

## Open in Visual Studio Code

Finally, you can quickly access test files in UI mode by clicking the `Open in VSCode` Button

![](/pwuiopen.png)

Check out more information in the [playwright docs](https://playwright.dev/docs/test-ui-mode)