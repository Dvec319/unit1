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

// Year 3

const $ul = $("<ul>").attr("storage", "trunk")

const $li1 = $('<li>').text('butter beer');

const $li2 = $('<li>').text('invisibility cloak').addClass('secret');

const $li3 = $('<li>').text('magic map').addClass('secret');

const $li4 = $('<li>').text('time turner').addClass('secret');

const $li5 = $('<li>').text('leash').addClass('owl');

const $li6 = $('<li>').text("Bertie Bott's Every Flavor [Jelly] Beans");

$ul.append($li1, $li2, $li3, $li4, $li5, $li6);
$container.append($ul);