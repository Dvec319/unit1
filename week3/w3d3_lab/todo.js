// our lists
const todos = [1, 2];
const notes = [1, 2];

// adding a note helper function
const createTodo = (text) => todos.push(text);
const createNote = (text) => notes.push(text);

// removing a note helper function
const removeTodo = (index) => todos.splice(index, 1);
const removeNote = (index) => notes.splice(index, 1);

// rendering functions
function renderTodos() {
	// grab the todos
	const $ul = $('#todos ul');
	// empty the ul
	$ul.empty();
	// loop through todos and create li, append them to $ul
	todos.forEach((item, index) => {
		$ul.append($('<li>').text(item).on("click", () =>{
            removeTodo(index) // remove the item
            renderTodos() // update the dom
        }));
	});
}

function renderNotes() {
	// grab the todos
	const $ul = $('#notes ul');
	// empty the ul
	$ul.empty();
	// loop through todos and create li, append them to $ul
	notes.forEach((item, index) => {
		$ul.append($('<li>').text(item).on("click", () => {
            removeNote(index)
            renderNotes()
        }));
	});
}

$('form').on('submit', (event) => {
	console.log(event);

	// prevent the refresh
	event.preventDefault();

	// create formData object
	const formData = new FormData(event.target);

	// grab the values from formData
	const item = formData.get('item');
	const list = formData.get('list');

	if (list === 'todo') {
		// create the todo
		createTodo(item);
		// re-render the list of todos
		renderTodos();
	}

	if (list === 'note') {
		// create the note
		createNote(item);
		// re-render the list of notes
		renderNotes();
	}
});

// initial render
renderTodos();
renderNotes();
