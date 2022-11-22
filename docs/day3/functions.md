# JavaScript Functions

OK! lets get into functions!

functions are a huge part of programming  and a JavaScript function is executed when something invokes it. 

Functions are defined with the "function" keyword, followed by a name, then round brackets.

```js
function name(parameter1, parameter2, parameter3) { 
  // code to be executed 
}
```


```js
function greet() { 
    console.log(`Hello!!!!!`); 
    console.log(`My name is Sam`); 
    console.log(`Whats your name?`); 
} 
greet()
```


```js
function addTwoNumbers(a, b) { 
    return a + b 
} 
addTwoNumbers(5, 5)
```

Function parameters are listed inside the brackets in the function definition
the function arguments are the values received by the function when it is invoked
inside the function the parameters behave as local variables.

Function invocation
Normally for JavaScript programming, a function event occurs when an event occurs (user  clicks a button)
however, for us as automation engineers, most of the time a function will be invoked automatically or when it is called upon.

Function Return
Whenever we reach the return statement, the function will stop executing.


```js
let x = toFahrenheit(30);

let text = `The temperature is ${x} Fahrenheit`; 
function toFahrenheit(celsius) { 
    return (celsius * 1.8) + 32; 
}

console.log(text);
```

Variables declared within a function, become local to that function and can only be accessed from within that function

for example

```js
//code here cant use quesadilla

function getTacos() {
    let quesadilla = "Cheese"
//code here can use quesadilla
}

//code here cant use quesadilla
```

Great! that's really all there is to it with functions. however, yesterday when we looked at the forEach loop we saw the arrow function. sooooo what's up with that?

Every year, the big brains of JavaScript update the language. and with JS 2015 (EcmaScript6) the arrow function was created.

Arrow function allow a shorter syntax for writing function expressions. 

We don't need the function keyword, and you could emit the return keyword and { } brackets if it is a single expression. Personally, i put them in every time.  also, since functions are always a constant value, its best to use the const scoped variable. Finally, arrow functions must be defined before  they are used. lets rearrange our toFahrenheit function to an arrow function

```js
const toFahrenheit = (celsius) => { 
    return (celsius * 1.8) + 32; 
}

let x = toFahrenheit(30); 
let text = `The temperature is ${x} Fahrenheit`;

console.log(text);
```