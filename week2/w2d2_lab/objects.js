// Object describe properties and methods/actions of a thing

const alex = {
    name: "Alex",
    age: 37,
    email: "alex.merced@generalassemb.ly"
}

const david = {
    name: "David"
}

const kyle = {
	name: 'Kyle',
};

const winston = {
	name: 'Winston',
};

// Array are ordered lists of things (think plural)
const instructionalTeam = [alex, david, kyle, winston];

// How to access an Object

// log the whole object
console.log(alex);

//log the individual properties in two ways
console.log(alex.name)  // dot notation
console.log(alex["email"]) //square bracket notation