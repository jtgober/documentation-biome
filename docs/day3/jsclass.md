# JavaScript Class

Oh boy oh boy, here we go with JavaScript classes! 🐱‍👤

JavaScript classes are templates for JavaScript objects which we just talked about in our last video.

to create a class, we use the class keyword, followed by the class name and some curly brackets {} within those brackets, we add a method called constructor() followed by more brackets

```js
class ClassName { 
  constructor() { ... } 
}
```

a little bit about the Constructor method:
- It has to have the exact name "constructor"
- It is executed automatically when a new object is created
- It is used to initialize object properties
if its not added, JavaScript will add an empty constructor method.

Also just like let and const, you cant have 2 classes with the same name
```js
class Person { 
    constructor(firstName, lastName) { 
        this.firstName = firstName; 
        this.lastName = lastName; 
    } 
    greeting() { 
        return `Hello my name is ${this.firstName} ${this.lastName}` 
    } 
}

class Person { 
    constructor(firstName, lastName) { 
        this.firstName = firstName; 
        this.lastName = lastName; 
    } 
    greeting() { 
        return `Hello my name is ${this.firstName} ${this.lastName}` 
    } 
}

//Error Person has already been declared
```

To fully utilize the class we would need to create a new instance of that class.

```js
class Person { 
    constructor(firstName, lastName) { 
        this.firstName = firstName; 
        this.lastName = lastName; 
    } 
    greeting() { 
        return `Hello my name is ${this.firstName} ${this.lastName}` 
    } 
} 
let person1 = new Person("Frodo", "Baggins") 
let person2 = new Person("Bilbo", "Baggins") 
let person3 = new Person("Samwise", "Gamgee") 
let person4 = new Person("Pippin", "Took") 
let person5 = new Person("Merry", "Brandybuck")

console.log(person1.greeting()) 
console.log(person2.greeting()) 
console.log(person3.greeting()) 
console.log(person4.greeting()) 
console.log(person5.greeting())

module.exports = {Person}
```

then we can export over to a new page

```js
const { Person } = require("./day3") 
const hobbit1 = new Person("Frodo", "Baggins") 
let hobbit2 = new Person("Bilbo", "Baggins") 
let hobbit3 = new Person("Samwise", "Gamgee") 
let hobbit4 = new Person("Pippin", "Took") 
let hobbit5 = new Person("Merry", "Brandybuck") 
console.log(hobbit1.greeting()) 
console.log(hobbit2.greeting()) 
console.log(hobbit3.greeting()) 
console.log(hobbit4.greeting()) 
console.log(hobbit5.greeting())
```