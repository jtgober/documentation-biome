# Scope

I think we ought to go ahead and go over variable scope. As we saw yesterday, we can redeclare the var  variable like this

```js
var firstName = "Steve"
var firstName = "Will"
console.log(firstName)
```
Now this isn't technically an issue if you wanted to change the firstName variable. but if for some reason you were unaware that there was a firstName variable and adding it later in the code, you may find some issues with your code.

This is one reason why JavaScript added the let and const  variable types. lets first take a look at the let variable and what happens when we change our code .


Let


```js
let firstName = "Steve" 
let firstName = "Will" 
console.log(firstName)

output: SyntaxError: Identifier 'firstName' has already been declared
```

from the output here we can see that it throws an error at us, stating that "firstName" has already been declared.  Also its good to know that let is the preferred way to declare a variable, and is what i will be using from this point forward.

Now this is not to say that let cannot be updated. take a look at this

```js
let firstName = "Steve"  
firstName = "will" 
console.log(firstName) 
```

its also good to know that  let  is block scoped. so, if the same variable is defined in different scopes, there will be no error.

```js
 let greeting = "say Hi!!!!!"; 
 if (true) { 
     let greeting = "say Hellooooo!!!!"; 
     console.log(greeting);  
 } 
 console.log(greeting); 
```


Const


Const is different as it cannot be update, or re-declared. 

So we cannot do this

```js
const firstName = "Steve" 
firstName = "will" 
console.log(firstName)
```

or this

```js
const firstName = "Steve" 
const firstName = "will" 
console.log(firstName)
```
For the remainder of the course, I would recommend using the preferred declaration of let and that is also what I will be using