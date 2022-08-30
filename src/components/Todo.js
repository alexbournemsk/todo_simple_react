import React, { useState } from 'react';
import TodoForm from './TodoForm';

function Todo(props) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    })
    const { todos, completeTodo, removeTodo, updateTodo } = props

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
          id: null,
          value: ''
        });
      };
    
      if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
      }

    return (
        todos.map((todo, index) => (
            <div
                className={todo.isComplete ? 'todo-row-complete' : 'todo-row'}
                key={index}
            >
                <div onClick={() => { completeTodo(todo.id) }}>{index + 1} . {todo.text}</div>
                <button onClick={() => setEdit({ id: todo.id, value: todo.text })}>Edit</button>
                <button onClick={() => { removeTodo(todo.id) }}>X</button>
            </div>
        ))
    )
}

export default Todo