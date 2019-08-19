// Original solution (broken):

// var list = [];
// var action = prompt("What would you like to do?");

// while(action.indexOf("quit") === -1) {
//   if(action.indexOf("new")) {
//     var newToDo = prompt("Type your Todo item.")
//     list.push(newToDo);
//     action = prompt("What would you like to do?");
//   }
//   else if(action.indexOf("list")){
//       console.log(list);
//       action = prompt("What would you like to do?");
//   }
// }

// Course solution:

var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit") {
  //handle input
  if(input === "list"){
    console.log(todos);
  } else if(input === "new") {
    //ask for new todo
    var newTodo = prompt("Enter new todo.");
    //add to todos array
    todos.push(newTodo);
  }
  //ask again for new input
  input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");