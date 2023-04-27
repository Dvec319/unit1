//Section 1

// DRY stands for Don't Repeat Yourself. We should pay attention to it because it helps you keep your code clean and organized and limits the errors you could cause by accidentally reassigning a variable and causing any number of errors. Also other people who are looking at your code will be able to understand it better. 

// Const is a keyword that is used to declare a variable that is block scoped and can't be changed.
// Let is a keyword that is used to declare a variable that is block scoped but it can be altered by the user.
// Var is the oldest keyword to declare a variable and is global scoped.

//Section 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
let g = 0;
g = b + c;

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
console.log(a < b < c);
console.log(a == a != d);
console.log(e != 'Kevin');
console.log(48 == '48');
console.log(f != e);
console.log(g);

// I used let becasue it allows you to change the variable while const doesn't.
// If you don't use const let or var it still gives you the correct output.
// It gives you an error, specifically Invalid left-hand side in assignment.

// Bonus
console.log(a < (b || f) === !f && e !== c);

// Section 3

// while (true) {
// 	console.log('Do not run this loop');
// }

// This will run as an infinite loop because the condition will always be set to true.

// const runProgram = true;

// while (runProgram) {
// 	console.log('Do not run this loop');
// 	runProgram = false;
// }

// This while loop wouldn't be an infinite loop because after the first iteration runProgram would be set to false. But in this code example given by the homework we are setting runProgram as a const which means the loop wouldn't be able to update it and we would be met with an error. To resolve this we could just replace const with let.

let letters = 'A';
let i = 0;

// start a while loop that runs as long as i is less than 20
while (i < 20) {
    // this adds another A to the letters variable
	letters += 'A';
    // this increases i by 1
	i++;
// this closes the while loop while will run until the condition is returned as false
}
// this prints out the variable lettters
console.log(letters);

// the while loop will continue to add A to the variable letters until the condition is returned as false and then the console log will print letters to our terminal which should be 21 A's
// it came out as expected

// Section 4

// A for loop is used when the number of iterations is already known and the initialization, condition checking, and the iteration statement itself are written at the beginning of the loop. The initialization is done only once.
// A while loop is used when the number of iterations isn't known and the initialization occurs every time the loop is ran. 

/* 
The first part of the control panel is: initialization. 
The second part of the control panel is: condition.
The third part of the control panel is: iteration.
*/

for (let i = 0; i <= 999; i++) {
    console.log(i);
}

// The backslash is an escape character that turns special characters into string characters. This will allow you to use quotes withing a string without it getting chopped up.
console.log('Without you, today\'s emotions are the scurf of yesterday\'s');

for (let i = 999; i >= 0; i--) {
    console.log(i);
}


for (let i = 1; i <= 10; i++) {
    console.log("The value of i is: " + i + " of 10");
}

for (let i = 1; i <= 10; i++) {
	console.log(`The vaule of i is: ${i} of 10`);
}

const starWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (let i = 0; i < starWars.length; i++) {
    console.log(i + " " + starWars[i])
}

for (let i = 0; i < starWars.length; i++) {
    if (i % 2 == 0) {
        console.log(starWars[i]);
    }
}