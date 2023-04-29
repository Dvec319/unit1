////////////////////////////////
// Easy Going
////////////////////////////////

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////

for (let i = 0; i <= 200; i += 2) {
    console.log(i);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////

for (let i = 1; i <= 100; i++) {
    if (i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");
    } else if (i%5 === 0) {
        console.log("Buzz");
    } else if (i%3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ['Wolfy', 'wolf', 16, 'Yukon Territory'];
const sharky = ['Sharky', 'shark', 20, 'Left Coast'];
const plantee = ['Plantee', 'plant', 5000, 'Mordor'];
const porgee = ['Porgee', 'Porg', 186, 'Ahch-To'];
const dart = ["D'Art", 'Demogorgan Dog', 2, 'Upside Down'];

plantee[2] = 5001
wolfy[3] = "Gotham City"
dart.push("Hawkins")
wolfy[0] = "Gameboy"

console.log(plantee)
console.log(wolfy)
console.log(dart)
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

let upperTurtles = "";
for (let x of turtles) {
    upperTurtles += x.toUpperCase() + "\n";
}
console.log(upperTurtles)

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = [
	'Jaws',
	'The Fellowship of the Ring',
	"Howl's Moving Castle",
	'Django Unchained',
	'Cloud Atlas',
	'The Usual Suspects',
	'Toy Story',
	'Conan the Barbarian',
	'Titanic',
	'Harry Potter',
	'Fried Green Tomatoes',
	'Volver',
	'Oculus',
	'Seven',
	'Black Panther',
	'Harry Potter',
	'Imitation of Life',
	'Snatch',
	'Fast and Furious',
];

titanicIndex = favMovies.indexOf('Titanic');
console.log(titanicIndex)
favMovies.sort()
console.log(favMovies)
favMovies.pop()
console.log(favMovies)
favMovies.push("Guardians of the Galaxy")
console.log(favMovies)
favMovies.reverse()
console.log(favMovies)
favMovies.shift()
console.log(favMovies)
favMovies.unshift()
// The unshift method won't return anything to the array unless actually given an input.
console.log(favMovies)
djangoIndex = favMovies.indexOf('Django Unchained')
favMovies.splice(djangoIndex, 1, "Avatar")
console.log(favMovies)
const halfMovies = favMovies.length / 2;
const lastHalf = favMovies.slice(halfMovies)
console.log(lastHalf)
console.log(favMovies.indexOf('Django Unchained')) // This logs out as a -1 because we removed it from the array.
////////////////////////////////
// Where is Waldo
////////////////////////////////

////////////////////////////////
//  Excited Kitten
////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////
