// create an array to store my todos
const todos = ["Breakfast", "Lunch"]

// create function to render data to dom
function render(){
    // empty out the main tag
    document.querySelector("main").innerHTML = "";

    // create a ul to house our todo list
    const ul = document.createElement("ul");

    // loop through the todos and create an li for each
    todos.forEach((todo, index) => {
        const li = document.createElement("li")
        li.innerText = todo
        ul.append(li)

        // add event to the li
        li.addEventListener("click", () => {
            // remove item from the array
            todos.splice(index, 1)
            // update the dom
            render()
        })
    });

    document.querySelector("main").append(ul)
};

render();

// when the button is clicked
document.querySelector("button").addEventListener("click", () => {
    // grab the input from the dom
    const input = document.querySelector("input")
    // grab the inputs value
    const newTodo = input.value
    // push that into the todos array
    todos.push(newTodo)
    // update the dom with the render function
    render()
});