# Array Challenge Answer

::: danger STOP
Danger zone, do not proceed unless you gave it your all!
:::

::: details Click me to view the code

```js
/*
* Follow the below comments
*/

let allKindsOfDonuts = ["Original", "Sugar", "Glazed", "Chocolate Iced", "Strawberry Iced", "Powdered", "Coffee Roll", "Boston Creme", "Chocolate Cruller", "Glazed Cruller", "Jelly Filled", "Sour Cream", "Glazed Blueberry", "Glazed Chocolate", "Apple Fritter", "Cookies and Creme", "S'mores"]

console.log(allKindsOfDonuts);


//list below the number of items in the array
console.log(allKindsOfDonuts.length);

//remove the last item of the array
allKindsOfDonuts.pop()

//add "Maple Bar" at the beginning of the array
allKindsOfDonuts.unshift("Maple Bar")

//determine the index of "Glazed Cruller"
console.log(allKindsOfDonuts.indexOf("Glazed Cruller"));

//Remove the "Jelly Filled" and the "Sour Cream" donut
console.log(allKindsOfDonuts.indexOf("Jelly Filled"));
console.log(allKindsOfDonuts.indexOf("Sour Cream"));
console.log(allKindsOfDonuts.splice(11, 2));

// Print out the final array -
//Array should contain these items
//   'Maple Bar',         'Original',
//   'Sugar',             'Glazed',
//   'Chocolate Iced',    'Strawberry Iced',
//   'Powdered',          'Coffee Roll',
//   'Boston Creme',      'Chocolate Cruller',
//   'Glazed Cruller',    'Glazed Blueberry',
//   'Glazed Chocolate',  'Apple Fritter',
//   'Cookies and Creme'
console.log(allKindsOfDonuts);
```
:::