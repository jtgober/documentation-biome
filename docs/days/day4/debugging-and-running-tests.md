## Debugging and Running Tests

Ok now that we have our hands dirty and I semi forced you guys to create some tests without knowing how to debug, lets learn a little bit about how to debug tests

One of the best and recommended ways is to use the VS Code extension. There is a full video on this as well as a section in the documentation biome on this. which can be found [HERE!](https://www.documentation-biome.xyz/additions/playwright-extension)
:mage::mage::mage:

## Without the extension.

Without the extension we can still run in debug mode by using 

`npx playwright test --debug` Which will run all of our tests one by one in debug mode

### Running a single test

You can also run just a single test with with npx playwright test **spec file** --debug

`npx playwright test text-input.spec.js --debug`