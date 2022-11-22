# Fizzbuzz Answer

::: danger STOP
Danger zone, do not proceed unless you gave it your all!
:::

::: details Click me to view the code

```js
const numbers = [...Array(101).keys()]; 
//list out all numbers 
for (let index = 1; index < numbers.length; index++) { 
    const element = numbers[index]; 
    //check if divisable by 15 
    if (element % 15 === 0) { 
        console.log("fizz buzz"); 
        //check to see if divisable by 5 
    } else if (element % 5 === 0) { 
        console.log("buzz"); 
        //check to see if divisable by 3 
    } else if (element % 3 === 0) { 
        console.log("fizz"); 
        //else print a number 
    } else { 
        console.log(element); 
    } 
}
```
:::