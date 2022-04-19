# JavaScript Master Cheat Sheet

## Basics

- Reverse an array

```JS
let numbers = [1, 2, 7, 4, 5];
let reversedNumbers = numbers.reverse();
console.log(reversedNumbers);
// [5, 4, 7, 2, 1]
// This only reverses the array. It does not reverse the numeric order.
```

- How to reverse an array in a function

```JS
function fixTheMeerkat(arr) {
  //your code here
  return arr.reverse();
}

console.log(fixTheMeerkat(["tail", "body", "head"]));
```

- How to reverse an array without the reverse function

```JS
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = [];

for(let i = numbers.length -1; i >= 0; i--) {
  reversedNumbers.push(numbers[i]);
}

console.log(reversedNumbers);
```
