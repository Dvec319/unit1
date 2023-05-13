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

// Year 4

const $table = $("<table>");

const $h5 = $("<h5>").text("Spring 2017");

$container.append($h5);

const $thead = $("<thead>");

const $day = $("<th>").text("Day");

const $classes = $("<th>").text("Classes");

const $tr1 = $("<tr>");

const $tr2 = $("<tr>");

const $tr3 = $("<tr>");

const $tr4 = $("<tr>");

const $tr5 = $("<tr>");

const $tr6 = $('<tr>');

const $monday = $('<td>').text('Monday');

const $mondayClasses = $('<td>').text('Herbology, History of Magic');

const $tuesday = $('<td>').text('Tuesday');

const $tuesdayClasses = $('<td>').text('Divination, Defense Against the Dark Arts');

const $wednesday = $('<td>').text('Wednesday');

const $wednesdayClasses = $('<td>').text('Charms, Potions');

const $thursday = $('<td>').text('Thursday');

const $thursdayClasses = $('<td>').text('Transfiguration, History of Magic');

const $friday = $('<td>').text('Friday');

const $fridayClasses = $('<td>').text('Quidditch Practice, Defense Against the Dark Arts');

$tr1.append($day, $classes);

$tr2.append($monday, $mondayClasses);

$tr3.append($tuesday, $tuesdayClasses);

$tr4.append($wednesday, $wednesdayClasses);

$tr5.append($thursday, $thursdayClasses);

$tr6.append($friday, $fridayClasses);

$table.append($tr1, $tr2, $tr3, $tr4, $tr5, $tr6);

$container.append($table);

// Year 5

$wand.remove();

$li1.remove();

$wand.insertAfter($pet).text("Hornbeam Wand with Dragon Heartstring Core").css("color", "indigo");

$pet.remove().insertAfter($h1);

$pet.remove().insertAfter($house);