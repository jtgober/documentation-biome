# Using process.env.VARIABLES in our local environment

Don't worry this one with be quick

So in the last video we explored creating environment variables to be used in Github, and we attached them to our tests in our sample app. But now we have a small problem. If we want to run our tests locally now, they will fail because we don't have those variables defined on our local machine. There are a few ways to fix this. we *could* add a `ternary` operator or an `if` statement like we do in the config file. However there is a better cleaner way. There is a package we can download that allows us to use environment variables in our code, similar to how we are using them in github. That package is `dotenv`

## Downloading dotenv

```sh
npm install dotenv
```

### configuring dotenv
first we need to create a `.env` file in the root of your project:

```
USERNAME="Gojo"
PASSWORD="pwd"
```

After creating a `.env` file with the username and password fields we can go back to our `sample-app.spec.js` and add the following lines

```js
// sample-app.spec.js // [!code focus]
import * as dotenv from 'dotenv' // [!code focus]
dotenv.config() // [!code focus]
let username = process.env.USERNAME
let password = process.env.PASSWORD
```
with that completed we're now back in a working condition!

```sh
npx playwright test sample-app.spec.js
```

You can also view environment variables from the code by adding a `console.log(process.env)` in the code.

## Update .gitignore!!!!

The last thing to do, is to ensure that we do not send this out to the repo. otherwise it will ruin all that trouble we went into making those github secrets
```
node_modules/
/test-results/
/playwright-report/
/playwright/.cache/
.env
```

