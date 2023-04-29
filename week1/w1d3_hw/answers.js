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

const whereIsWaldo = [
	['Timmy', 'Frank'],
	'Eggbert',
	['Lucinda', 'Jacc', 'Neff', 'Snoop'],
	['Petunia', ['Baked Goods', 'Waldo']],
];

const eggbertIndex = whereIsWaldo.indexOf('Eggbert');
whereIsWaldo.splice(eggbertIndex, 1);
console.log(whereIsWaldo);

whereIsWaldo[1][2] = 'No One'
console.log(whereIsWaldo)
console.log(whereIsWaldo[2][1][1])

////////////////////////////////
//  Excited Kitten
////////////////////////////////

const kittySays = [
	'...human...why you taking pictures of me?...', 
	'...the catnip made me do it...', 
	'...why does the red dot always get away...'
]

for (let i = 1; i <= 20; i++) {
	let meow = kittySays[Math.floor(kittySays.length * Math.random())]
	if (i % 2 === 0) {
		console.log(meow)
	}else {
	console.log("Love me, pet me! HSSSSSS!")
	}
}

////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort()
console.log(nums)
console.log(nums[Math.floor(nums.length / 2)]) 
