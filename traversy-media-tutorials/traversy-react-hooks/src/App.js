import React, { useState } from 'react';
import './App.css'

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div 
      style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} 
      className="todo">
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => { // takes an event ('e') as an argument
    e.preventDefault(); // prevent default submit behavior of page refresh
    if(!value) return; // check for a value, return if no value is present
    addTodo(value); 
    setValue(''); // resets the input value to an empty string
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      className="input" 
      value={value} 
      placeholder='Add Todo...'
      onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo 
              key={index} 
              index={index} 
              todo={todo} 
              {...{completeTodo}} 
              {...{deleteTodo}}/>
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
    </div>
  )
}

export default App;