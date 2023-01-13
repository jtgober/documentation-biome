# Validating JSON Schema

 We have a fun one here. Were going to switch up slightly from what we normally do, and were going to create a JSON schema for the poke-api.

 JSON schemas can be a real pain to create by hand, so were going to import in a new package to help out.

 `npm i easy-json-schema`

 ## Creating a Schema with ejs

 first things first, we need some JSON. for this example im going to keep it simple and go back to the `forms` that we used last time

 ```js
const { test, expect } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtle`);
    const pokejson = await pokemon.json()
    const pokeForms = pokejson.forms
});
 ```

 After running the test code, we should see the following

 ```sh
[
  {
    name: 'squirtle',
    url: 'https://pokeapi.co/api/v2/pokemon-form/7/'    
  }
] 
```
This is the base we will use for our schema. Lets create a new folder called `json` then add in our `squirtle.json`
![](/schemafolder.png)

:::tip
Formatting the document should stringify your results.
:::

After that is completed lets create a quick JavaScript file, and name it something simple like `schema.js` with the following code

```js
//get the squirtle.json file
const file = require('./json/squirtle.json')
// import in the easy json schema dependency
const ejs = require('easy-json-schema');
// create the json schema from the squirtle file
const jsonSchema = ejs(file);
//print the results with stringify
console.log(JSON.stringify(jsonSchema)); 
```

Its important that we make sure that the final results are strings, otherwise the next file will yell at us

Create another file under the `json` folder called `squirtle-schema.json` and paste in the results

:::details Results can also be found here
```json
{"type":"array","items":{"type":"object","required":[],"properties":{"name":{"type":"string"},"url":{"type":"string"}}}}
```
:::
![](/schemafolder2.png)

## Creating a Schema Test

Now that we have the schema created, we can make a test out of it. Within our forms test lets add a few things.

```js
const { test, expect } = require('@playwright/test'); 
// get the schema file
const file = require('../json/squirtle-schema.json')// [!code focus] 
// import in easy json schema
const ejs = require('easy-json-schema');// [!code focus] 

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtle`);
    const pokejson = await pokemon.json()
    const pokeForms = pokejson.forms)// [!code focus] 
    // transform the result to schema
    const formSchema = ejs(pokeForms);// [!code focus] 
    expect(file).toEqual(formSchema)// [!code focus] 
});
```

After you run your test, you should see a success

## Why this is cool

Going back to our main request, i want you to focus on this line
```js
const { test, expect } = require('@playwright/test'); 
// get the schema file
const file = require('../json/squirtle-schema.json')
// import in easy json schema
const ejs = require('easy-json-schema');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtle`); // [!code focus]
    const pokejson = await pokemon.json()
    const pokeForms = pokejson.forms)
    // transform the result to schema
    const formSchema = ejs(pokeForms);
    expect(file).toEqual(formSchema)
});
```
Instead of ***squirtle***, add any other ***pokemon*** you can think of, or any ***ID*** that exists within the poke-api <br>
`const pokemon = await request.get(pokemon/1)` Test Succeeds <br>
`const pokemon = await request.get(pokemon/mudkip)` Test Succeeds <br>
`const pokemon = await request.get(pokemon/234)` Test Succeeds <br>
`const pokemon = await request.get(pokemon/charmander)` Test Succeeds <br>

This is awesome. because even if the data is changing, we know that things are still working because the schema hasn't changed and we know that the front end and back-end are still similar and following the requirements that we expect. <br>

Furthermore, We could even create a ***schema*** from our ***snapshot*** we already have if we wanted to.  
