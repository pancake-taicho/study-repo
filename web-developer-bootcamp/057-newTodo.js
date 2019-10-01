const todos = ['Buy new turtle'];

let input = prompt('What would you like to do?');

while (input !== 'quit') {
  // handle input
  if (input === 'list') {
    listTodos();
  } else if (input === 'new') {
    addTodo();
  } else if (input === 'delete') {
    deleteTodo();
  }
  // ask again for new input
  input = prompt('What would you like to do?');
}
console.log('OK, YOU QUIT THE APP');

function listTodos() {
  console.log('**********');
  todos.forEach(function(todo, i) {
    console.log(`${i + 1}: ${todo}`);
  });
  console.log('**********');
}

function addTodo() {
  // ask for new todo
  const newTodo = prompt('Enter new todo.');
  // add to todos array
  todos.push(newTodo);
  console.log('Added Todo');
}

function deleteTodo() {
  // ask for index of todo to be deleted
  const index = prompt('Enter index of todo you would like to delete.');
  // delete that todo
  // splice()
  todos.splice(index - 1, 1);
  // todos.splice(index,1) means that we will remove index items starting at "index",
  // and 1 indicates how many items we want to delete following that "index",
  // in this case, 1.
  console.log('Deleted Todo');
}
