# JavaScript Objects and 'this'
We already know that variables are containers for our data values.

```js
let car = "toyota"
```

Objects are variables too, but they contain many more values. These values are written as name:value pairs, separated by a colon :

```js
const car = {type:"Toyota", model:"Corolla", color:"blue", miles: 70000};
```

also good to know that const is the preferred method for declaring objects

also spaces and line breaks are not important. an object can span multiple lines

```js
const car = { 
    type: "Toyota", 
    model: "Corolla", 
    color: "blue", 
    miles: 70000 
};
```

Car object
Property
Property Value
type,
Toyota
model
Corolla
color
blue
miles
70000
We can extract the property value by specifying the object name followed by a dot, then the property like this
```js
console.log(car.miles);

//or

console.log(car["miles"]
```

now lets talk about the this  keyword. this  can be on of the more confusing keywords in JavaScript.  lets add a function to our car object, and for this example, I'm going to use a regular function first
```js
const car = { 
    type: "Toyota", 
    model: "Corolla", 
    color: "blue", 
    miles: 70000, 
    myCar: function () { 
        return `hey check out my new ${this.type} ${this.model}` 
    }, 
}; 
console.log(car.myCar());
//hey checkout my new toyota corolla
```

but lets see what happens when we change our function into an arrow function
```js
const car = { 
    type: "Toyota", 
    model: "Corolla", 
    color: "blue", 
    miles: 70000, 
    myCar: () => { 
        return `hey check out my new ${this.type} ${this.model}` 
    }, 
}; 
console.log(car.myCar()); 
//hey check out my new undefined undefined
```

what going on here? Well, this  can be a bit confusing. however, this acts differently between regular functions and arrow functions 
when using the arrow function, this is not bound, and is always represented by the function that defined  it. So in our case its myCar.
when using a regular function , this is represented by the object that called the function. so in our case its car. let me show you.
arrow function
```js
const car = { 
    type: "Toyota", 
    model: "Corolla", 
    color: "blue", 
    miles: 70000, 
    myCar: () => { 
        return this 
    }, 
}; 
console.log(car.myCar());

// output
{ }
```
normal function
```js
const car = { 
    type: "Toyota", 
    model: "Corolla", 
    color: "blue", 
    miles: 70000, 
    myCar: function ()  { 
        return this 
    }, 
}; 
console.log(car.myCar());
// output
{ 
  type: 'Toyota', 
  model: 'Corolla', 
  color: 'blue', 
  miles: 70000, 
  myCar: [Function: myCar] 
}
```

there is still a way to write this shorthand however, and that is like this.
```js
const car = { 
    type: "Toyota", 
    model: "Corolla", 
    color: "blue", 
    miles: 70000, 
    myCar() { 
        return this 
    }, 
}; 
console.log(car.myCar()); 
// output 
{ 
  type: 'Toyota', 
  model: 'Corolla', 
  color: 'blue', 
  miles: 70000, 
  myCar: [Function: myCar] 
}
```

I don't want to over complicate objects and the 'this' keyword but There is one final thing I want to leave you with, and is important for us as automation engineers which involves this
**In an event, this refers to the element that received the event.**
we will see this in our upcoming lessons in playwright.