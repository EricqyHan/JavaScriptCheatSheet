# forEach in JavaScript

- forEach() - to iterate over elements. forEach calls `func` for every element, does not return anything

```js
arr.forEach(function (item, index, array) {
  // ... do something with item
});
```

```js
// Create an array of numbers. Loop the array and add three to each numbeer and replace the old number
let numbers = [42, 88, 9, 11, 18, 22, 43];
numbers.forEach((item, i) => {
  numbers[i] = item + 3;
});
```

![forEach Example](Pictures/forEach1.png)

```JavaScript
//Create a function that takes in an array of numbers.
//Return a new array containing every even number from the original array(do not use map or filter)
let evenNumbArray = (a) => {
  let even = [];
  a.forEach((n) => {
    if (n % 2 === 0) {
      even.push(n);
    }
  });
  return even;
};
```

```JavaScript
//Create a function that takes in an array of numbers.
//Return a new array containing every even number from the original array(do not use map or filter)
let oddNumbArray = (b) => {
  let odd = [];
  b.forEach((n) => {
    if (n % 2 !== 0) {
      odd.push(n);
    }
  });
  return odd;
};
console.log(oddNumbArray([1, 2, 3, 4, 5, 6, 7, 8]));
```

```JavaScript
//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

let arrayMultiple = (arr) => {
  let product = 1;
  // loop through the array
  // Very first time this runs we will get 10 for num
  // Where we see num it's actually 10 and product will be 1
  // after it's done, it will be 10
  // second time this runs, num will be 2 and product will be 10
  // very last time it runs num will be 3 and product will be 20
  arr.forEach((num) => (product *= num));
  return product;
};

console.log(arrayMultiple([10, 2, 4]));
```

```JavaScript
//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ["Lost", "BSG", "Agents of Shield", "King of the Hill"];
tvShows.forEach((tvShow) => {
  console.log(`${tvShow} is awesome`);
});

console.log(tvShows);
```
