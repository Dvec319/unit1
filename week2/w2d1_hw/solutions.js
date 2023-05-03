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