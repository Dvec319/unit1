{
	const adventurer = {
		name: 'Timothy',
		hitpoint: 10,
		belongings: ['Sword', 'potion', 'tums'],
        companion: {
            name: "Velma",
            type: "Bat",
            companion: {
                name: "Tim",
                type: "Parasite",
                belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
            }
        }
	};

	console.log(adventurer); // whole object
	console.log(adventurer.belongings);
    console.log(adventurer.belongings[0]);

    // traditional for loop
    for (let i = 0; i < adventurer.belongings.length; i++) {
        console.log(adventurer.belongings[i])
    }

    // for of loop
    for (let belonging of adventurer.belongings) {
        console.log(belonging)
    }

    // logging an object in an object
    console.log(adventurer.companion)

    // logging a property of an object in an object
    console.log(adventurer.companion.name)

    // console.log tims type
    console.log(adventurer.companion.companion.type)

    // console.log tims health insurance
    console.log(adventurer.companion.companion.belongings[2])
};

// --------------------------------------------------------------------------------------------------------
console.log("#############################################################################################")
// --------------------------------------------------------------------------------------------------------

{
const movies = [
	{ title: 'Tokyo Story' },
	{ title: 'Paul Blart: Mall Cop' },
	{ title: "L'Avventura" },
];

// log the first object in the array
console.log(movies[0])

// access a property of an object in an array
console.log(movies[0].title)

// loop over an array of objects
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i])
    console.log(movies[i].title)
}

// for (let thing of things)
for (let movie of movies) {
    console.log(movie);
    console.log(movie.title);
}

};

//---------------------------------------------------------------
console.log("###################################################");
//---------------------------------------------------------------

{

    // a function inside of an object
    const foo = {
        someMethod: () => {
            console.log("oh hai!")
        }
    }

    foo.someMethod()
}

{
    const foo = [
        ["0,0", "0,1", "0,2"],
        ["1,0", "1,1", "1,2"],
        ["2,0", "2,1", "2,2"]
    ]

    console.log(foo[1])
    console.log(foo[1][2])
}

{
    // accessing functions in arrays
    const foo = [1, "hi", () => console.log("fun")]

    foo[2]()
}

{
    // accesing an object returned by a function
    const summonBird = () => {
        return {
            color: "blue"
        }
    }

    console.log(summonBird) // function as a value
    console.log(summonBird()) // invoking the function
}

{
    // accessing an array returned from a function
    const createBag = () => {
        return ["apple", "banana", "pear"]
    }

    console.log(createBag)
    console.log(createBag())
    console.log(createBag()[1])
}

{
    // access a function in a function
    const generateSpell = () => {
        return () => {
            console.log("Fireball!!!")
        }
    }

    console.log(generateSpell)
    console.log(generateSpell())
    generateSpell()()
}

// Function Currying
// Chop a function that takes multiple arguments into a chain of functions

// not curried
function addNums (x, y) {
    return x + y
};

console.log(addNums(2, 2))

// curried
function addNumsCurried (x) {
    return (y) => x + y
};

console.log(addNumsCurried(2)(2))