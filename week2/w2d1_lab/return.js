// Return Values
// The one value that a function gives back that can be used or assigned to a variable

const addNums = (num1, num2) => {
    //send the result out of the function
    return num1 + num2;
};

const result = addNums(1, 1);

console.log(result);

// first function is getListingName takes a firstName and a lastName and returns a string that is "lastName, firstName"

const getListingName = (firstName, lastName) => {
    return `${lastName}, ${firstName}`;
};

console.log(getListingName("Michael", "Delvecchio"))


// second function, takes a string of lastName, firstName and returns a string of "firstName lastName"

const getNormalName = (wholeName) => {
    // split the input into two item array
    const names = wholeName.split(",")
    console.log(names)
    // reverse the array
    names.reverse()
    console.log(names)
    // trim the white space on the first name
    names[0] = names[0].trim()
    // return the string from joining the array
    return names.join(" ")
};

console.log(getNormalName(getListingName("michael", "delvecchio")))

// even functions can be arguments / callbacks

const addTwo = x => x + 2;
const addThree = x => x + 3;
const addSomething = (fun, num) => fun(num);

console.log(addSomething(addTwo, 5));
console.log(addSomething(addThree, 5));