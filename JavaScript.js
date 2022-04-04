let arr = ["I", "will", "go", "home", "now", "and", "be", "coming", "back"];
// from index 2 remove 5
console.log(arr);
let newArr = arr.splice(2, 5);
console.log(newArr);

let arr2 = ["I", "will", "go", "home", "now", "and", "be", "coming", "back"];
let newArr2 = arr2.slice(2, 5);
// from index 2, copy to element 5
console.log(newArr2);

// Spread Operator
// add the elements of an existing array into a new array
let certsToAdd = ["Algorithms and Data Strucures", "Front End Libraries"];
let certifications = [
  "Responsive Web Dev",
  ...certsToAdd,
  "Data Visualization",
];
console.log(certifications);

// passing elements of an array as arguemts to a function
let addThreeNumbers = (x, y, z) => {
  console.log(x + y + z);
};
let args = [1, 2, 3];
// It would not work if we were to add a fourth element into the array because function only calls for three
addThreeNumbers(...args);

// copying arrays
let oneArray = [1, 2, 3];
let twoArray = [...oneArray];
twoArray.push(4);
console.log(oneArray);
console.log(twoArray);

//Concat Arrays
let concatArr1 = [1, 2, 3];
let concatArr2 = [4, 5, 6];
concatArr1.concat(concatArr2);
// Does same thing as concatArr1.concat(concatArr2)
concatArr1 = [...concatArr1, "freecodecamp", ...concatArr2];
console.log(concatArr1);
