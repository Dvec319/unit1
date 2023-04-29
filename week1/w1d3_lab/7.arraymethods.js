// These methods can only be used against arrays

// indexOf
// returns the first index at which the match presents itself

const beasts = ['ant', 'bison', 'bison', 'camel', 'duck', 'bison']
console.log(beasts);
// console.log(beasts.indexOf('bison')) //1

// console.log(beasts.indexOf('mbison')) //-1 because it doesn't exist in the array

// console.log(beasts)

// ============================================================

// push
// the push method adds to the end of an array
// mutation
// beasts.push('cow')
// console.log(beasts)

// ============================================================

// pop
// the pop method removes the last element in the array
// mutation
// beasts.pop()
// console.log(beasts)

// ============================================================

// reverse
// the reverse method reverses and array in place -- only works if the array is strings or numbers
// mutation

// beasts.reverse()
// console.log(beasts)

// ============================================================

// unshift
// the unshift method adds the specified element to the beginning of the array
// mutation

// beasts.unshift('dog', 'cat', 'hamster')
// console.log(beasts)

// ============================================================

// shift
// the shift method removes the first element in the array
// mutation

// beasts.shift()
// console.log(beasts)

// ============================================================

// splice
// the splice method changes the content of any array by removing or replacing elements
// mutation

// beasts.splice(3, 0, 'cow')
// console.log(beasts)

// ============================================================

// sort
// the sort method sorts using ASCII
// mutation
// advanced 
// but if you pass in a call back we can make things sort based on that call back function

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort()
// console.log(months)

// const arrayOne = [1, 30, 4, 21, 100000];
// arrayOne.sort();
// console.log(arrayOne)

// ============================================================

// slice
// the slice method returns a shallow copy of a portion of an array specified from the start and end, not inclusive of the end

const beastsTwo = beasts.slice(2, 4)
console.log(beasts)
console.log(beastsTwo)