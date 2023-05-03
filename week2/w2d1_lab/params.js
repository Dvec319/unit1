// Function Parameters

// Parameters are data that we can send to a function and receive a return value
// Parameters/Input --> Function --> Return Value/Output

// x and y are parameters or placeholders
function addNums(x, y){
    console.log(x + y);
};

// invoke --> pass arguments to fill those parameters
addNums(2, 3);
addNums(3, 3);
addNums(5, 6);

// Write a function that takes 3 arguments, adds the first two and multiplies by the third and logs the result

const printAddMult = (num1, num2, num3) => {
    console.log((num1 + num2) * num3);
};

printAddMult(2, 3, 5);

const printIceCream = (flavor = "Vanilla") => {
    console.log(`The flavor is ${flavor}`);
};

printIceCream("Chocolate");
printIceCream();