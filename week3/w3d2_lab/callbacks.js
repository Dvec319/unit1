// Callback - When a function is passed to another function as an argument
// (Function) => {}
// Array Callback Methods
// Array methods that expect a callback function as an argument
// forEach, map, filter, find, findIndex, every, some
// Callback signature: (item, index) =>{}
// arr.forEach((item, index)) => {}
// forEach -> loops over the array and runs the callback on each item
// map -> run the callback on each item and then returns an array of all the return values
// filter -> runs the callback on each item and returns an array of only the values on which the callback returned a truthy value
// find -> runs the callback and returns the first item that the callback returns a truthy value on
// findIndex -> same as find, except returns the index of the item
// some -> return true if the callback return true on at least one item
// every -> returns true if the callback returns true for every item

const arr = [1,2,3,4,5,6]

// REDUCE
// Allows you to reduce all the values in an array into one value
// Doing cumulative operations
// (callback, startingValue) => returns the return value of the last callback
// callback (accumulator, item, index) => {}

const result = arr.reduce((acc, item, index) => {
    return acc + item
}, 0)

console.log(result)

// accumulator | item | return value
//  0          |  1   |     1
//  1          |  2   |     3
//  3          |  3   |     6
//  6          |  4   |     10
//  10         |  5   |     15
//  15         |  6   |     21

const dogs = [
    {name: "Sparky", age: 10},
    {name: "Fido", age: 13}
]

const result2 = dogs.reduce((acc, item) => {
    return acc + `|${item.name} is ${item.age} years old`
}, "")

console.log(result2)

// accumulator               |             item             | return value
//   ""                      |   {name: "Sparky", age: 10}  | "|Sparky is 10 years old"
// "|Sparky is 10 years old" |   {name: "Fido", age: 13}    | "|Sparky is 10 years old|Fido is 13 years old"

// Sort
// Sorts the array
// (callback) => shuffles the items in the array in order based on the callback
// (firstItem, secondItem) => return

// 1,2,3
// 1 - 3 = -2 (negative of 0 means, don't switch)
// 3 - 2 = 1 (positive, switch)

console.log([1,9,2,8,3,7,4,6,5].sort())
console.log(["Dog", "Michael", "Bed"].sort())
console.log([1,9,13,2,22,8,3,44,7,4,6,5].sort())

// fixed using callback
console.log([1, 9, 13, 2, 22, 8, 3, 44, 7, 4, 6, 5].sort((x,y) => x - y)); // ascending
console.log([1, 9, 13, 2, 22, 8, 3, 44, 7, 4, 6, 5].sort((x, y) => y - x)); // descending

const dogs2 = [
    {name: "Pepper", age: 20},
    {name: "Sparky", age: 10},
    {name: "Fido", age: 13}
]

console.log(dogs2.sort((dog1, dog2) => {return dog1.age -dog2.age}));