// events
// node.addEventListener("event", () => {})
// "click" -> when you click on the element
// "submit" -> when a form is submitted (click submit or hit enter)

// selecting the form from the dom
const form = document.querySelector('form');

// listen for the submit event on the form
form.addEventListener('submit', (event) => {
    // prevent the page from refreshing from the submit
    event.preventDefault()

    // // examine the event object
    // console.log(event)
    // // the thing that triggers the event
    // console.log(event.target)

    // grabbing the data one element at a time
    console.log(document.querySelector("input[name='name']"))
    console.log(document.querySelector("input[name='name']").value);

    // using a FormData object to get the data
    const formData = new FormData(form)
    const name = formData.get("name")
    const age = formData.get("age")
    const happy = formData.get("happy")
    console.log(name, age, happy)

    // populate the p element
    const p = document.querySelector("p")
    // ternary: expression ? true : false
    p.innerText = `${name} is ${age} years old and ${happy === "on" ? "is happy" : "is not happy"}`

    // turn on the dialog
    const dialog = document.querySelector("dialog")
    dialog.showModal()

	console.log('Hello');
});

// for closing the modal
document.querySelector("dialog").addEventListener("click", (event) => {
    const dialog = event.target
    dialog.close()
})
