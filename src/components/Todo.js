import React from 'react'

const Todo = ({ todo, index, completeTodo, removeTodo }) => 
(
<div className="todo" 
    style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} >
        { todo.text }
   <div>
       <button onClick={() => completeTodo(index)}>Complete</button>
       <button onClick={() => removeTodo(index)}>X</button>
   </div>
</div>
)
 
export default Todo;