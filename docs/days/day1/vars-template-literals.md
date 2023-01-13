# Variables and Template Literals Exercise

```js
console.log(typeof myNum);
console.log(typeof myName.toString());
console.log(typeof String(myName));
console.log(typeof Number(myName));
console.log(typeof parseInt(myName));

var firstName = "Severus" 
var lastName = "Snape" 
console.log(`This is professor ${firstName} ${lastName}`)
```

 Now, just a reminder. variables can hold anything. So for instance, a variable can hold booleans like this.

```js
var isActive = true

//but what would happen if i did this?

var isActive = true
var isActive = "Coffee"
```

you get Coffee, because it reassigned the true value we had to "Coffee" and discarded the true value.

In a later section we will talk about the importance of scope, and the other variable types “let” and “const” but for now, understand that when using “var” you can redeclare the same variable to be something else. 

what happens when we do this?

```js
var firstName
console.log(firstName);
```

undefined is actually another type in JavaScript and is used when nothing is assigned to that variable