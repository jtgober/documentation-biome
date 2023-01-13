# JavaScript Loops

Loops are a way for us to easily repeat something. There are several different kinds of loops  but they all basically do the same thing, which is  repeating an action a number of times. there are different situations that can be better used from one type of loop over the others.

for now, lets start with the for  loop, the foreach loop and break everything down. first off lets create a quick array of number starting from 1 and ending at 10

```js
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let index = 0; index < array.length; index++) { 
    const element = array[index]; 
    console.log(element); 
}
```

ok now lets go over the code here line by line

for (let index = 0; index < array.length; index++)

let index = 0;  We know that for all arrays, the starting index always begins with 0. so what this is saying, begin this for loop, starting at index 0. lets see what happens when we change that index to 1 
```js
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let index = 1; index < array.length; index++) {  
    const element = array[index];  
    console.log(element);  
}

//output
2 
3 
4 
5 
6 
7 
8 
9 
10
```

index < array.length; = we are doing a comparison here. So, we know that the .length property will give us all the items in an array, so its saying "is the current index is less than the length of the array" which is true currently,  go through the {} brackets again lets change the < to an >

```js
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
for (let index = 1; index > array.length; index++) {  
    const element = array[index];  
    console.log(element);  
}
//output
[Running] node "c:\Users\gober\OneDrive\Desktop\Array Challenge\ArrayExercise.js" 
[Done] exited with code=0 in 0.085 seconds

```

and finally,  index++.  what that is doing, is for each iteration of this loop, add 1 to our current index. so ++ means "add one to"

```js
let index = 3 
index++ 
console.log(index);
```

 { 
    const element = array[index]; 
    console.log(element); 
}

With   const element = array[index]; ,  we are creating a new const that is named "element" that is assigned to the index value of our array. then we of course know what console.log(element) does. lets change around the values so we can see them change

```js
let array = [4, 5, 98, 4, 2, 6, 7, 88, 4, 60]

for (let index = 0; index < array.length; index++) { 
    const element = array[index]; 
    console.log(element); 
}
```

but wouldn't you know,  there is an even cleaner way to write our for loops.  we can also use the forEach loop. im going to revert to our starting array of 1 through 10, and remove the for loop

```js
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.forEach(element => { 
    console.log(element); 
});
```

This is a bit cleaner, but what's going on here? well, this is something we haven't gone over yet, but what we are looking at is an arrow function. we will talk more about that tomorrow, but for now know that the arrow function is the same as if we did this

```js
array.forEach( function(element) { 
    console.log(element); 
});
```

ok. lets lastly talk about the While loop. we see that its a bit more straight forward. so lets give it a condition and log something in that code block

```js
while (condition) { 
     
}
```

```js
while (10 === 10) { 
    console.log("Hi Mom!"); 
}
```

When we run this... uh oh. we have a good ol' fashioned endless loop. Go ahead and right click the output and click stop code run

Because 10 will always be equal to 10, we need to do something a little bit different. lets add a counter

```js
let counter = 0

while (counter !== 10) { 
    console.log("Hi Mom!"); 
    counter++ 
}
```

adding the counter to our while loop and incrementing at the end of our code block allows us to escape the while loop.

Lastly the do while loop
```js
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
```

very similar to the while loop. However, the condition is checked after the block of code is ran

There are other loops, but for now I think this is a good stopping point