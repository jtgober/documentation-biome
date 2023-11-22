# JavaScript Conditionals, control flow and Logical operators  part 1

We need to be able to control the behavior of outcomes in JavaScript in order to determine whether or not to run certain chunks of our code or not.

There are multiple different types of conditionals in JavaScript which include

- "if" statements: When a condition is true it will specifically run that block of code
-  "Else" statements: When that same condition is proven to be false, it executes this block of code
-  "Else if" states: When this is ran, this specifies a new test if the first condition is false

The above are the basics for understanding JavaScript development. Lets check out examples.

```js
let conditionIsTrue = true
if(conditionIsTrue){
    console.log("This block of code runs");
}
```
Here is what's going on with the statement

1. The "if" keyword tells our JavaScript code to begin the conditional statement
2. The "conditionIsTrue" variable is tested and in this example we have it set to true
3. Since the condition is true, the space within the { } is ran
4. a log is shown as the statement is ran

we can extend the statement with another block with the "else" statement
```js
let conditionIsFalse = false 
if (conditionIsFalse) { 
    console.log("This block of code runs"); 
} else { 
    console.log("This is the else block") 
}
```
and of course now with the "else if" added
```js
let conditionIsFalse = false
let conditionIsTrue = true

if (conditionIsFalse) { 
    console.log("This block of code runs"); 
} else if (conditionIsTrue){ 
    console.log("This is the else if block") 
} else { 
    console.log("This is the else block")
```
multiple conditions can be ran, but do note, that only the first one truth statement will be ran

```js
let conditionIsFalse = false 
let conditionIsTrue = true

if (conditionIsFalse) { 
    console.log("This block of code runs"); 
} else if (conditionIsTrue){  
    console.log("This is the else if block1")  
}else if (conditionIsTrue){  
    console.log("This is the else if block2")  
}else if (conditionIsTrue){  
    console.log("This is the else if block3")  
} else {  
    console.log("This is the else block") }
```
Lastly, we don't need to have an "else" statement at the end of the statement. if nothing is true, and there is no else at the end of the block, our code just moves forward and runs nothing.
```js
let conditionIsFalse = false

if (conditionIsFalse) { 
    console.log("This block of code runs"); 
} else if (conditionIsFalse) { 
    console.log("This still does not run") 
}
```