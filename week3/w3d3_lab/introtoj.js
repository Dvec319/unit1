$( () => {

// select element: document.querySelector("body")
console.dir(document.body)
const $body = $("body")
console.log($body)

// select all the divs
console.log($("div"))

// select a div by class
console.log($(".div"))

// select a div by id
console.log($("#div"))

// save the h1 to a variable
const $h1 = $("h1")

// h1.innerText = "My Heading"
$h1.text("My Heading")

// h1.sytle.border = "1px solid red"
$h1.css("border", "1px solid red")

// h1.classList.add("heading")
$h1.addClass("heading")

// chaining together jQuery object methods
$h1.text("Another Heading").css("font-size", "3em")

// select all the li
// document.querySelectorAll("li")
const $lis = $("li")
console.log($lis)

// change each of the lis
// lis.forEach((li) => li.style.backgroundColor = "pink")
$lis.css("background-color", "pink")

// const li = document.createElement("li")
const $li = $("<li>") // <--- New li

// add text to the li
$li.text("6")

// append the ul
// document.querySelector("ul").append(li)
$("ul").append($li)

// same thing, one line
$("ul").append($("<li>").text("7").css("background-color", "blue"))

$("button").on("click", (event) => {
    // grab the last li
    const $last = $("li:last-of-type")

    // get the next number
    const num = parseInt($last.text()) + 1

    // append an li
    $("ul").append($("<li>").text(num))
})

});
