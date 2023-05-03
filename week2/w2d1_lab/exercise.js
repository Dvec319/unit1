// Anonymous Function with Function Keyword

// Not hoisted, generates a prototype

// const helloWorld = function () {
// 	console.log('Hello World');
// };

// helloWorld();

// Not hoisted, no prototype

// const helloWorld = () => {
// 	console.log();
// };

// helloWorld();


//Name is a parameter/variable that receives the first argument passed to nameAPony
const nameAPony = (name) => {
    console.log(`The name of my pony is ${name}`)
}

//Each invocation of nameAPony receives a different argument
nameAPony("Charlie")
nameAPony("Susie")
nameAPony("Lisa")



const logTheThing = (stuff = 'Hello World') => {
	console.log(stuff);
};

logTheThing('cheese');
logTheThing();



// function manyArgs() {
// 	//See the arguments object in the console
// 	console.log(arguments);

// 	//loop over the arguments
// 	for (arg of arguments) {
// 		console.log(arg);
// 	}

// 	//turn the arguments object into an array with the spread operator and log it
// 	console.log([...arguments]);
// }

// manyArgs(1, 2, 3, 4, 5, 6, 7);

const manyArgs = (...args) => {
	console.log(args);
};

manyArgs(1, 2, 3, 4, 5, 6, 7);
