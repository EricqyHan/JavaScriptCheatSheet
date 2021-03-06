# JavaScript Reduce

When we need to iterate over an array - we can use forEach, for or for..of.

When we need to iterate and return the data for each element – we can use map.

The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.

The Syntax is:

```JavaScript
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
```

- accumulator - is the result of the previous function call, equals initial the first time (if initial is provided).
- item - is the current array item
- index - is its position
- array - is the array

```JavaScript
//Find the average of all the numbers from question three
let numberAverage = numbers.reduce((acc, i) => acc + i)/3;
console.log(numberAverage);

```

![Arr Add Element to end of Array](Pictures/ReverseString.png)
