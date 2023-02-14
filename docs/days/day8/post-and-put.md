# Post and Put requests

Now we are finally moving on from get requests and leveling up to post/put request. just as a reminder, `post` request create new data, and `put` request can update data. With that being said, lets set up our `first` post request

## Post Requests

For our first `post` request, lets take a look at the `pet` endpoint. note that it 'adds a new pet ot the store'.

![](/postreqquest.png)

With post request, instead of straight query parameters that we did last time, we are going to have an entire object body. Within open api, lets go ahead and adjust some fields. Note that chances are there may be duplicates, so pick something truly random. ill change just the main `id` i see and the `name` tags. But do note the `id` you use

```json
{
  "id": 8754,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "mickey",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "mouse"
    }
  ],
  "status": "available"
}
```

after you've added something, click execute. hopefully you see a 200 status. Now lets go to the get `/pet/{petId)` and execute with the ID we gave. You should see the item we just added! hot diggity dog!

## Put Requests
 Now `put` requests do basically the same thing, except its going to update our data for an already existing pet. So, in the `put` request for the `pet` endpoint. enter the exact same data, but change something. Ill change the name from mickey to minnie.

 ```json
{
  "id": 8754,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "minnie", // [!code focus]
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "mouse"
    }
  ],
  "status": "available"
}
```

after that is complete, do a rinse and repeat of what we did before, and see that out data was updated by using that same `get` endpoint. 

## Coding them out in playwright

Alright. so there is an ugly way to do this, and a not so ugly way.

lets first create a test

```js
const { test, expect } = require('@playwright/test');

test('adding a pet', async ({ request }) => {
  const response = await request.post(`pet`)
}); 
```
Here we have a basic post request that reaches out to the pet endpoint. Now we just need to add in that request body from before, and specify that as the data object like so.(with updated name and ID fields) 
```js
// @ts-check
const { test, expect } = require('@playwright/test');

test('adding a pet', async ({ request }) => {
  const response = await request.post(`pet`,
    {
      data: {
        "id": 8754,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": "Donald", 
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "Duck"
          }
        ],
        "status": "available"
      }
    })
  expect(response.status()).toBe(200)
}); 
```
Lets also go ahead and create a test to get back the data.

```js
const { test, expect } = require('@playwright/test');

test('adding a pet', async ({ request }) => {
  const response = await request.post(`pet`,
    {
      data: {
        "id": 8754,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": "Donald", 
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "Duck"
          }
        ],
        "status": "available"
      }
    })
  expect(response.status()).toBe(200)
});
// add check
test('check that pet was added', async ({ request }) => {
    const response = await request.get(`pet/876456`)
    console.log(await response.json());
})
```
Now if we run both of these together. there is a chance that an error occurs

```sh
{ code: 1, type: 'error', message: 'Pet not found' }
```

This is because the `get` request is ran first, then the `post` request. Since the pet hasn't been created yet, the error pops up. The best way around this is to set the worker number to 1 like so

```sh
npx playwright test --workers=1
```

Now after re-running with a `put` request and updating the id it should run properly
```js
// @ts-check
const { test, expect } = require('@playwright/test');

test('adding a pet', async ({ request }) => {
  const response = await request.put(`pet`,
    {
      data: {
        "id": 23467,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": "Donald",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "Duck"
          }
        ],
        "status": "available"
      }
    })
  expect(response.status()).toBe(200)
});

// @ts-check
test('check that pet was added', async ({ request }) => {
  const response = await request.get(`pet/23467`)
  console.log(await response.json());
})
```

and the output
```sh
·{
  id: 432,
  category: { id: 0, name: 'string' },
  name: 'Donald',
  photoUrls: [ 'string' ],
  tags: [ { id: 0, name: 'Duck' } ],
  status: 'available'
}
·
```

## Making this better

Looking at all those lines for that data tag makes me wanna vomit. truly there is nothing wrong with it. but we can make it better, and have a good way to do assertions.

Lets create a data folder, with a file called pet.json. Within that file lets move the data object into the file (and remove the data tag)

```json
{
  "id": 432,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "Donald",
  "photoUrls": ["string"],
  "tags": [
    {
      "id": 0,
      "name": "Duck"
    }
  ],
  "status": "available"
}
```

Now back in our actual tests we can change a few things. Lets first import in the data file and add that entire object to our test. 

```js
// @ts-check
const { test, expect } = require('@playwright/test');
const petData = require('../data/pet.json') // [!code focus]

test('adding a pet', async ({ request }) => {
  const response = await request.put(`pet`,
    {
      data: petData // [!code focus]
    })
  expect(response.status()).toBe(200)
});

// @ts-check
test('check that pet was added', async ({ request }) => {
  const response = await request.get(`pet/432`)
  console.log(await response.json());
})
```

in my opinion, this looks a lot better. but we can add one some more updates. Lets change that hard coded `id` within the `get` request, to use our id from our `petData` file. Then we can go ahead and assert based on whatever fields we want. Ill assert the `name`.

```js
// @ts-check
const { test, expect } = require('@playwright/test');
const petData = require('../data/pet.json')

test('adding a pet', async ({ request }) => {
  const response = await request.put(`pet`,
    {
      data: petData // [!code focus]
    })
  expect(response.status()).toBe(200)
});

// @ts-check
test('check that pet was added', async ({ request }) => {
  const response = await request.get(`pet/${petData.id}`) // [!code focus]
  let json = await response.json(); // [!code focus]
  let petName = json.name // [!code focus]
  expect(petName).toBe(petData.name) // [!code focus]
})
```

Okie Dokie! this i feel like it getting a little long. lets stop here for now and ill see you in the next one