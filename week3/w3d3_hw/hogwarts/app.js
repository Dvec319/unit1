// if (typeof jQuery == 'undefined') {
// 	console.log('oops! I still have to link my jQuery properly!');
// } else {
// 	console.log('I did it! I linked jQuery and this js file!');
// }

// Year 1

const $container = $("#container");
// console.log($container)

const $h1 = $("<h1>");
// console.log($h1)

$h1.text("Hogwarts");
// console.log($h1)

$container.append($h1);

// Year 2

const $name = $("<h2>").text("Michael");

const $house = $("<h3>").text("Ravenclaw");

const $pet = $("<h4>").addClass("owl").text("Chimble");

const $wand = $("<h4>").text("Holly Wand with Unicorn Hair Core")

$container.append($name, $house, $pet, $wand)