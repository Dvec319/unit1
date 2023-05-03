// Functions
// Chunks of code you can run on command

// function fireball(){
//     console.log(`I cast fireball`);
//     console.log(`firrrrrrree`);
//     console.log(`flames consume the land`);
// };

// fireball();

// 3 ways to define a Function

// function declaration

function helloWorld1 (){
    console.log(`Hello World`);
};

helloWorld1();

// statement vs expression
// statements do not evaluate to a single value
// expressions evaluate to a single value

// function expression

const helloWorld2 = function(){
    console.log(`Hello World`);
};

helloWorld2()

// arrow functions

const helloWorld3 = () => {
    console.log(`Hello World`);
};

helloWorld3()