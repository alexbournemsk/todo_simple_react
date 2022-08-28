import React, { useState } from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos ([todo, ...todos])
        console.log(...todos);
    }

    return (
        <div>
            <h1>Whats the plan for today?</h1>
            <TodoForm addTodo = {addTodo}/>
        </div>
    )
}

export default TodoList;