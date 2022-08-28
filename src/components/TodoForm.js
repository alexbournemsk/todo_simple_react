import React from 'react'
import { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')
    const {addTodo} = props;

    const handleInputChange = (evt) => {
        setInput(evt.target.value)
    }
    const handleSubmit = (evt) => {
        
        evt.preventDefault();

        addTodo({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }
    return (
        <form
            className='todo-form'
            onSubmit={handleSubmit}
        >
            <input
                type='text'
                placeholder='Enter task'
                value={input} 
                name='todo-text'
                className='todo-input'
                onChange={handleInputChange}
            />
            <button className='todo-button'>
                Add task
            </button>

            {input}
        </form>
    )
}

export default TodoForm