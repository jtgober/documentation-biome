# JavaScript Array List

In this section we are going to talk about JavaScript Arrays. In JavaScript, an array is an ordered list of values. Each value within the array is called an index. Within an array, the index can be populated with different types, such as numbers, strings, or Booleans.

JavaScript provides with two different ways  to create arrays. the first is to use it as follows

```js
let donuts = new Array();
```

this produces the empty donut array. how sad😢

if you have an idea of the size for which the array will would, we can create an array with the initial size like this

```js
let donuts = Array(12);
```

normally however, we would either create the array ourselves or snag them from a page. For now lets create our own by passing some elements as a comma-separated list

```js
let donuts = new Array("Chocolate", "Strawberry", "Glazed")
```

This is great, however there is an easier and more common way to create arrays by using square brackets

```js
let donuts = ["Chocolate", "Strawberry", "Glazed"]
```

How would we go about accessing these elements if we only needed to grab one? well, remember each value within the array is also an index! Index values all begin with the number 0. so an array of 3 values, has the index values of 0,1,2.

```js
console.log(donuts[0]); //Chocolate 
console.log(donuts[1]); //Strawberry 
console.log(donuts[2]); //Glazed
```


Basic operations for Arrays


We can find out the size of an array by using the length property

```js
console.log(donuts.length)
```

Assuming we know what is in the array, we can determine what the index is of an item by using  the indexOf method.

```js
let index = donuts.indexOf("Strawberry")
console.log(index)
```

We can add an item to the end of an array by utilizing the push method

```js
donuts.push("Lemon-Filled")
console.log(donuts)// shows Lemon-Filled at the end of the array
```

We can add an item to the beginning of an array by utilizing the unshift method

```js
donuts.unshift("Raspberry-Filled")
console.log(donuts)// shows Raspberry-Filled at the beginning of the array
```

To remove an item from the end of an array we can use the pop method

```js
donuts.pop() // removes the Lemon-Filled Donut 😢
console.log(donuts);
```

To remove an item from the beginning of an array we can use the shift method

```js
donuts.shift() // removes the Chocolate Donut 😢
console.log(donuts);
```

Finally, let remove a specific item from an array.

```js
donuts.splice(1,1) // removes the strawberry 😢 
console.log(donuts);
```