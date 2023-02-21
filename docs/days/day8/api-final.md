# Final Api Challenge. 

Ok. The final api challenge is at hand. So far within the petstore we have only been creating tests for the `pet` endpoint. now, we are going to switch it up and do the `store` endpoint.

For this final Challenge only worry about the 
* `GET` ->`/store/order/{orderID}`
* `POST` -> `/store/order/`
* `DELETE` -> `/store/order/{orderID}`

Best of luck.

::: danger STOP
Danger zone, do not proceed unless you gave it your all!
:::

::: details Click me to view the code

### store-order.json
```json
{
    "id": 10,
    "petId": 10,
    "quantity": 1,
    "shipDate": "2023-02-21T01:47:51.183Z",
    "status": "placed",
    "complete": true
}
```
### store-endpoint.spec.js
```js

const { test, expect } = require('@playwright/test');
const storeData = require('../data/store-order.json')

test('adding an order', async ({ request }) => {
    const response = await request.post(`store/order`, {
        data: storeData
    })
    let resJson = await response.json()
    let statusJson = resJson.status
    expect(response.status()).toBe(200)
    expect(statusJson).toBe(storeData.status)
});

test('checking inventory order', async ({ request }) => {
    const response = await request.get(`store/order/${storeData.id}`)
    let resJson = await response.json()
    let id = resJson.id
    expect(response.status()).toBe(200)
    expect(id).toBe(storeData.id)
});

test('delete inventory', async ({ request }) => {
    const response = await request.delete(`store/order/${storeData.id}`)
    let resJson = await response.json()
    let message = resJson.message
    expect(response.status()).toBe(200)
    expect(message).toBe(storeData.id.toString())
});

test('checking inventory order after delete', async ({ request }) => {
    const response = await request.get(`store/order/${storeData.id}`)
    expect(response.status()).toBe(404)
});
```
:::