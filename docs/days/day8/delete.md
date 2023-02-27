# Delete

By this time you should have a good idea of how to go about doing a delete. it's going to be the same as the others. Sometimes however, we may not want to delete data from the system. so do keep that in mind when working in a real environment.

Lets pick up right where we left off with our last challenge. We already have data created and updated, lets add one more test to make sure that it can be removed as well. But first, lets just double check our documentation.

![](/delete.png)

notice that there is an API key. in this instance its not `required` so for now lets not worry about authentication. Ill make a course update that works with a more secure api to show how this works.

So, looking at the documentation, seems like the only required field is the pet id which we of course already have. Lets go ahead and head back to our code and add a couple more tests to our challenge file.

```js
test('delete a pet from the store', async ({ request }) => {
    const response = await request.delete(`pet/${petUpdate.id}`)
    let json = await response.json();
    expect(response.status()).toBe(200)
})
```

Now assuming that works, we need to make sure the pet was removed. lets pull down a get request and create an assertion that expects status to be 404.

```js
test('check that pet was deleted', async ({ request }) => {
    const response = await request.get(`pet/${petUpdate.id}`)
    let json = await response.json();
    expect(response.status()).toBe(404)
})
```

Great! Now we have completed the main four REST requests! `get`,`post`,`put`, and`delete`. Im super proud of you!

and now with that said. we will have one final practice challenge. then we will move on to `Continuous Integration!`