// A parameter is the name for the value you feed into a function, such as a number or a string or even another function.
// An argument is the actual value that takes the place of the parameter when the function is called.\
// Within a function, console.log will only print out the result to the terminal. We won't be able to do anything with it. When we use return, we are getting back the actual value from the function which we can store in a variable. Also, when the function hits return, it immediately stops and returns the value.

// Palindrome

const checkPalindrome = (str) => {
   const reversed = str.toLowerCase().split('').reverse().join('');
   return (str.toLowerCase() === reversed);
};

console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

// Sum Array

const numArray = [1, 4, 7, 10, 15, 20];

const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

console.log(sumArray(numArray));

const checkPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(checkPrime(4));
console.log(checkPrime(5));

const printPrimes = (limit) => {
    for (let i = 2; i <= limit; i++) {
        if (checkPrime(i)) {
            console.log(i);
        }
    }
};
printPrimes(97);