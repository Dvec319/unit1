// create a todolist class
// hold the todolist array
// add and remove todos
// render the todos

class TodoList{

    // constructor | node | the dom node to append this todo list to
    constructor(node, id, title) {
        // the node to append the todo list to
        this.$node = $(node)
        this.$container = $("<div>").attr("id", id)
        this.$h1 = $("<h1>").text(title)
        this.$node.append(this.$container)
        this.$container.append(this.$h1)
        this.todos = []
        this.render()

        // create a form for this todo list
        this.$form = $("<form>") // new form
        this.$form.html(`
        <input type="text" name="item">
        <input type="submit" value="create todo for ${title} list">
        `)
        this.$node.append(this.$form)

        // create a submit for our form
        this.$form.on("submit", (event) => {
            // prevent the refresh
            event.preventDefault()

            // generate from data object
            const formData = new FormData(event.target)

            // get the value
            const newTodo = formData.get("item")

            // add the todo
            this.add(newTodo)
        })
    }

    render(){
        // empty the container
        this.$container.empty()

        // reattach the h1
        this.$container.append(this.$h1)

        // loop through the todos
        this.todos.forEach((item, index) => {
            this.$container.append($("<h3>").text(item).on("click", () => {
                this.remove(index)
            }))
        })
    }
    // add a todo based on a string pased in, and re-renders
    add(newTodo){
        this.todos.push(newTodo) // adding the todo to the array
        this.render() // re-rendering
    }

    // remove a todo based on an index that is passed in
    remove(index){
        this.todos.splice(index, 1) // remove item from an array
        this.render() // re-rendering
    }
}

const todoList1 = new TodoList($("#todoone")[0], "firsttodo", "Todos")
const todoList2 = new TodoList($("#todotwo")[0], "secondtodo", "Notes")

// button event to test functionality out
// $("button").eq(0).on("click", () => todoList1.add("test"))
// $('button').eq(1).on('click', () => todoList1.remove(0));
