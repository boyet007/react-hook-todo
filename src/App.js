import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'



function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn about React', inCompleted: false },
    { text: 'Meet friends for lunch', inCompleted: false },
    { text: 'Build really cool app todo', inCompleted: false }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <div className="card-content">
        { todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo}
             completeTodo={completeTodo} removeTodo={removeTodo}/>
        )) }
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
