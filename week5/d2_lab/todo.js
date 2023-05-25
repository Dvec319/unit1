// create the class
class TodoList extends HTMLElement {
	// constructor
	constructor() {
		// run the parent constuctor
		super();
		// create an array to track our todos
		this.todos = [];
		//attach a shadowDom
		this.attachShadow({ mode: 'open' });
		// create boilerplate for todo list
		this.shadowRoot.innerHTML = `
        <h1>${this.getAttribute('title')}</h1>
        <div id=container>
            <div id=form>
                <form>
                    <input type=text name="text">
                    <input type=submit valu="create todo">
                </form>
            </div>
            <div id=todos>
        
        
            </div>
        </div>
                <style>

        #container {
            display: flex;
            text-align: center;
            background-color: ${this.getAttribute('bg')};
            color: ${this.getAttribute('color')}
            padding: 20px;
            width: 90%;
            margin: auto;
        }

        h1 {
            text-align: center;
            background-color: ${this.getAttribute('bg')};
            color: ${this.getAttribute('color')}
        }

        .todo {
            background-color: ${this.getAttribute('bg')};
            color: ${this.getAttribute('color')};
            text-align: center;
            width: 230px;
        }
        
        
        </style>        
        `;
		// render the initial list of todos
		this.render();
		// grab the room from the shadowRoot
		const form = this.shadowRoot.querySelector('form');
		form.addEventListener('submit', (event) => {
			// prevent the page from refreshing on submit
			event.preventDefault();
			// get formData
			const formData = new FormData(form);
			// get the text inputs value
			const newTodo = formData.get('text');
			// create the todo
			this.createTodo(newTodo);
		});
	}

	// method for adding todos
	createTodo(newTodo) {
		this.todos.push({ text: newTodo, done: false });
		this.render(); // update the shadowDOM
	}

	// function for removing todos
	deleteTodo(index) {
		this.todos.splice(index, 1);
		this.render(); // update the shadowDOM
	}

	render() {
		// create a div to contain all our todos
		const div = document.createElement('div');
		// loop through list of todos, and append to div
		this.todos.forEach((item, index) => {
			// create a div for the todo
			const todoDiv = document.createElement('div');
			// add the text to the todo
			todoDiv.innerText = item.text;
			// add a class to the todos
			todoDiv.classList.add('todo');
			// append the todo to the div
			div.append(todoDiv);
			// add an event for removing a todo
			todoDiv.addEventListener('click', () => {
				// remove the todo
				this.deleteTodo(index);
			});
		});
		// grab the container div which is in the shawdow DOM
		const todoContainer = this.shadowRoot.querySelector('#todos');
		// clear the div
		todoContainer.innerHTML = '';
		// append the todos
		todoContainer.append(div);
	}
}

// register the class as an element
// <todo-list></todo-list>
customElements.define('todo-list', TodoList);
