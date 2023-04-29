// Strings
// Anything inside single quotes '', double quotes "", or backticks ``

// console.log('hello world') is a string
// console.log("hello world") is a string
// console.log(`hello world`) is a string
console.log("Test string")
console.log(`My name is Michael`)

// Numbers
// examples: 1, 1.1, -1, -1.1, Infinity, -Infinity, NaN (sticking to regular numbers for now)
console.log(1)
console.log(46)
console.log(-83)

// Boolean
// true false
console.log(true)

//null
console.log(null)

//undefined
console.log(undefined)

// Variables
// A variable can hold any primitive values or objects (we will get to them later in the cohort)
// A variable can be made up of letters, numbers and some characters (like _ and $)
// It cannot start with a number. It is capable of holding any kind of data.

let z;
let y = 'y'
let x = 1

// Objects
// are surrounded by curly braces {}
// contains key/value pairs
// Keys and values are separated by a colon

let obj = {
    animal: 'dog',
    name: 'spike',
    age: 1,
    abilities: ['bubble blast', 'lickem', 'tackle'],
    ishuman: false, 
}

console.log(
    obj.animal,
    obj['animal']
)

// Arrays
// An array is represented with square brackets [] and each item is separated by commas.
// The elements have an order that starts at 0.

let arr = [1, 2, 3, 4, 5]

let arrTwo = [
    100,
    'hello world',
    false,
    null,
    { name: 'spike'}
]
console.log(arrTwo[1])

// Variables

const winston = 'Winston';
let issac = 'issac c'
issac = 'issac a'

