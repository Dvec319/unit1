// examples of arrays

const arr = [];

const squares = [1, 4, 9, 16, 25 ,36, 49, 64, 81, 100]

const satchel = [
	'chair', //0
	'table', //1
	'candle', //2
	'map', //3
	'magnifying glass', //4
	'rupees', //5
	'Pepto Bismol', //6
	'boomerang', //7
];

// Accessing element
// we can hard code for the element to be accessed 
console.log(satchel[5]) // rupees
console.log(satchel[100]) // undefines because no index of 100

// we can use a variable for the element to be accessed
const x = 2 * 2 + 1 // 5
console.log(satchel[x]) // same as console.log(satchel[5])

// .length gives the length of the array
console.log(satchel.length)

// how to log the last element of an array three different ways
console.log(satchel[7])
console.log(satchel[satchel.length - 1])

let boom = satchel.length - 1
console.log(satchel[boom])

// if we want to get the middle
console.log(satchel[satchel.length / 2])
const shortArray = ['first', 'second', 'third']
console.log(shortArray[Math.floor(shortArray.length / 2)])
console.log(satchel[Math.floor(satchel.length / 2)]);

// =============================================================

// iterating through an array using a for loop and the length of the array - very important

for (let i = 0; i < satchel.length; i++) {
    console.log(satchel[i])    
}

// =============================================

const pairs = [
    ['Harold', 'Kumar'],
    ['Laurel', 'Hardy']
]

console.log(pairs[0][1]) //Kumar