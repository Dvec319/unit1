// Destructuring
// pull values out of an object or an array

// Array Destructuring

const arr = [1, 2, 3];

{
    const one = arr[0];
    const two = arr[1];
    const three = arr[2];
    console.log(one, two, three)
};

{
    const [one, two, three] = arr;
    console.log(one, two, three)
};

// Object Destructuring

const alex = {
    name: "Alex Merced",
    age: 37
};

{
    const name = alex.name;
    const age = alex.age;
    console.log(name, age);
};

{
    const {name, age} = alex;
    console.log(name, age);
};