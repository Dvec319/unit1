// console.log(document);
// console.log(document.body);
// console.log(document.body.children[0]);

// document.querySelector("css selector")
// return the first DOM node that matches the selector
// How to select an element by tag name
console.log(document.querySelector("button"));
// How to select an element by ID - #
console.log(document.querySelector("#cheese"));
// How to select an element by class - .
console.log(document.querySelector(".hello"));
// How to select an element by attribute
console.log(document.querySelector("[key='value']"));

// Save a node in a variable
const button = document.querySelector("button")
console.dir(button)

// Add a click event to the button
// node.addEventListener("event", callback)
button.addEventListener("click", () => {
    console.log("Hello")

    const span = document.querySelector("div span")
    console.log(span)
    console.log(span.style)

    // Manipulating CSS via the Style object
    span.style.backgroundColor = "pink";
    span.style.color = "blue"

    // Manipulating CSS via classes
    span.classList.add("border")

    // change the text of the element
    span.innerText = "Cheese"

    // Create a new H1
    const h1 = document.createElement("h1")
    console.dir(h1)

    // add some text to the h1
    h1.innerText = "More Words"

    // append it to the div
    document.querySelector("[key='value']").append(h1)
})