# Creating and updating Challenge

// TODO Needs Video

Ok. In the last video we got a decent set up for posting or putting. but now lets create a couple more to ensure the apis are behaving correctly.

Here's the logical flow the tests should go.
1. `post` new data
2. `get` data to ensure it was created with specific fields
3. `put` update the data id / name / whatever else
4. `get` data to ensure it was updated correctly

there are a few different ways to do this. it could eb qa single test or you could split them up into different tests like we did before. however, `try to create two different files with the stored data` so we can re-use them!
:mage: best of luck!

::: danger STOP
Danger zone, do not proceed unless you gave it your all!
:::

::: details Click me to view the code
pet-endpoint.spec.js
```js
// @ts-check
const { test, expect } = require('@playwright/test');
const petData = require('../data/pet.json')
const petUpdate = require('../data/updatePet.json')

test('adding a pet', async ({ request }) => {
  const response = await request.post(`pet`,
    {
      data: petData
    })
  expect(response.status()).toBe(200)
});

test('check that pet was added', async ({ request }) => {
  const response = await request.get(`pet/${petData.id}`)
  let json = await response.json();
  let petName = json.name
  expect(petName).toBe(petData.name)
})

test('updating a pet', async ({ request }) => {
  const response = await request.put(`pet`,
    {
      data: petUpdate
    })
  expect(response.status()).toBe(200)
});

test('check that pet was updated', async ({ request }) => {
  const response = await request.get(`pet/${petUpdate.id}`)
  let json = await response.json();
  let petName = json.name
  expect(petName).toBe(petUpdate.name)
  expect(petName).toBe('Sponge')
})
```
 pet.json
```json
{
    "id": 7864265,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Sponge",
    "photoUrls": ["string"],
    "tags": [
      {
        "id": 0,
        "name": "Bob"
      }
    ],
    "status": "available"
  }
```
updatePet.json
```json
{
  "id": 123578,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "Patrick",
  "photoUrls": ["string"],
  "tags": [
    {
      "id": 0,
      "name": "Star"
    }
  ],
  "status": "available"
}
```

:::