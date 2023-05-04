console.log("It's working")

// alert("Hello there!")

// const age = prompt("What is your age");

// if (parseInt(age) > 50){
//     console.log("you are over 50");
// } else {
//     console.log("you are under 50");
// };

// const getStringLength =(str) => {
//     const split = str.split("");
// 	const length = split.length;
//     return length
// }

// const longFunc = (x) => {
//     return getStringLength(x) * 100
// };

// console.log(longFunc("Hello"))

// const func1 = () => {
// 	console.log(1);
// 	func2(); //why can I call this now, even though the definition is below?
// 	func3();
// 	console.log('Finished!');
// };
// const func2 = () => {
// 	console.log(2);
// 	func4();
// 	func6();
// };
// const func3 = () => {
// 	console.log(3);
// 	func5();
// };
// const func4 = () => {
// 	console.log(4);
// };
// const func5 = () => {
// 	console.log(5);
// };
// const func6 = () => {
// 	console.log(6);
// };
// func1();


// let apples;
// let money;

// const start = () => {
// 	apples = 0;
// 	money = 20;
// 	askForAction();
// };
// const showStatus = () => {
// 	alert('You have ' + apples + ' apples and $' + money);
// };
// const askForAction = () => {
// 	showStatus();
// 	const choice = prompt(
// 		'What do you want to do?',
// 		'buy apple / eat apple / restart'
// 	);
// 	if (choice === 'buy apple') {
// 		buyApple();
// 	} else if (choice === 'eat apple') {
// 		eatApple();
// 	} else if (choice === 'restart') {
// 		start();
// 	}
// };
// const buyApple = () => {
// 	apples++;
// 	money -= 1;
// 	askForAction();
// };
// const eatApple = () => {
// 	apples--;
// 	askForAction();
// };

// start();

// I want to transform each item in an array
// array, functin ---> func ---> array
// create an empty array
// loop over the array
// on each loop run the function on the item
// push result into the empty array
// return the array with the transformed values

function map(arr, func) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const resultOfLoop = func(arr[i])
        newArr.push(resultOfLoop);
    };
    return newArr
};

console.log(map([1,2,3,4], (x) => x + 1))

// Pseudo Code attempt

// I want to make a peanut butter and jelly sandwich
// get a plate
// get peanut butter from pantry
// get jelly from the fridge
// grab bread from the counter top
// get a butter knife
// spread peanut butter onto the bread
// spread jelly onto the bread
// put pieces of bread together
// put sanwich on the plate
// the sandwich is made

// getting a value
    // getHeight
    // getName

// change a value
    // setHeight
    // updatePerson

// destroying a value
    // deleteHeight
    // removeHeight
    // destroyHeight

// create a new value
    // createPerson
    // createDog
    // newPerson
    // newDog


