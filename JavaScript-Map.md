# Map in JavaScript

- Map(func) - creates a new array from results of calling func for every element.

It is one of the most useful and often used

It calls the function for each element of the array and returns the array of results

```JavaScript
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});
```

Given an array of integers, return a new array with each value doubled.

```JavaScript
const maps = (arr) => arr.map((x) => x * 2);
console.log(maps([2, 4, 6]));
```
