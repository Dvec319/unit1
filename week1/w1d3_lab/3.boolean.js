// One = sign means I'm setting it to that value afterwards

// let name = 'David'

// === equal value and equal type
console.log(1 === 1)

// == equal value
console.log('1' == 1)

console.log(1 === '1')

// >
// >=
console.log(1 > 1)
console.log(1 >= 1)

// <
// <=
console.log(-1 < -1)
console.log( -1 <= -1)

// !== check for NON equality for type and value
console.log(1 !== 1)
console.log(1 !== 2)

// != check for NON equality for value
console.log('1' != 1)
console.log('1' != 2)

// ====================

const password = 'p1234'
console.log(password === 'p1234')

console.log(1 === 1)
console.log("beans" === "Beans")
console.log((5 + 5 - 3) === ((5 + 5) - 3))
console.log(9 !== false)
console.log( "A" > "a")
console.log('Burger King' > 'McDonalds')
console.log(NaN === NaN)
console.log('B' > 'A')

// ===================

// || or With or, only one needs to be true
// true or false -> true 
console.log(true || false || false || false)

// && and With and, all need to be true
// true and false -> false 
console.log(true && true && true && false)

// ====================

// truthy and falsey

// flasey's are

// 0
// false
// ''
// NaN
// null
// undefined

// truthy is everything that's not a falsey

console.log(true || false)
console.log(null || 'string')

// ====================

// !! bang return the value true or false based on truthy or falsey

console.log(!!null || !!'string')