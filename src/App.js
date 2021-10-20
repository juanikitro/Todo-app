// import './App.css';
import React from 'react';
import './static/bootstrap.min.css'
import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton.js';

const todos = [
  {text: 'Comprar cebolla', completed: true},
  {text: 'Cortar cebolla', completed: false},
  {text: 'Comer cebolla', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed} 
            />
          ))}
      </TodoList>

      <CreateTodoButton /> 
    </React.Fragment>
  );
}

export default App;
