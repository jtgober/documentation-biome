# Types and Comparisons

```js
// -------------- Numbers and math operations
console.log(3 + 3) // 6
console.log(3 - 3) // 0
console.log(3 * 3) // 9
console.log(3 / 3) // 1
console.log(3 % 3) // 0

//The modulo gets the remainder of the operation
//So if we did an operation like 12 % 5 the result of this would be 2
console.log(12 % 5) // 2

// ------------------- Strings
//we can also type out full sentences with string like
console.log("I see Coffee and donuts in my future") // prints

//we can also combine strings like this
console.log("Hello" + "World!")

//Single quotes are also acceptable
console.log('Hey this works too!') 

//However watch out for sentences like this
console.log('i don't like coffee') // will fail

//we need to add an \ before the ' in don't to get this working properly 
console.log('i don\'t like coffee') 

//We can combine strings as well
console.log("Hello" + "World!")

//but with this there is a small problem with spacing. We can solve this 3 different ways.
console.log("Hello " + "World!")
console.log("Hello" + " World!")
console.log("Hello" + " " + "World!")



//In a later section we will also talk about Template literals which is a much cleaner way to write with variables 

// ------------------- Booleans and Comparisons
//true or false
//and with booleans its easy to show with comparisons so lets also talk about that.
//the 2x = operator is a abstract comparison.
//so, 

//it doesn't check for exact type matching
console.log(3 == 3) // true
console.log("3" == 3) // also true

//the 3x = operator is a STRICT type comparison.
console.log(3 === 3) // true 
console.log("3" === 3) // false, as it is also checking for type matching

//also, this is an importing for us to use with string values on a page. 
console.log("Coffee" === "Coffee") // true 

//but be sure spelling is correct, if i remove an "e" from coffee
console.log("Coffee" === "Coffe") // false

//then there is the less than "<" greater than ">", less than or equal to "<=" and greater than or equal to ">="
console.log(3 <= 3) // true
console.log(3 < 3) // false because it is equal to
console.log(3 < 4) // true
console.log(3 > 2) // true
console.log(3 > 4) // false
console.log(3 >= 3) // true

// ------------------- AND OR comparisons
console.log(3 === 3 && 4 === 4) // true
console.log(3 === 3 && 4 === 3) // false
console.log(3 === 3 || 4 === 4) // true
console.log(3 === 3 || 4 === 3) // true
// it can get confusing the more you add
console.log(3 === 3 && 1 === 2 || 3 === 3) //true
console.log(3 === 3 || 1 === 2 || 3 === 3) //true
```