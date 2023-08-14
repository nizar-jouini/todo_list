import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import DisplayTodo from './components/DisplayTodo';

function App() {
  const [todoArray, setTodoArray] = useState([])

  return (
    <div className="App">
      <TodoForm todoArray={ todoArray } setTodoArray={ setTodoArray }/>
      <DisplayTodo todoArray={ todoArray } setTodoArray={ setTodoArray }/>
    </div>
  );
}

export default App;
