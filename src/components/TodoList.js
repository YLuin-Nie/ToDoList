// File Name: TodoList.js

import React, { useState } from 'react';

function TodoList() {
    // State for storing the list of todos
    const [todos, setTodos] = useState([]);

    // State for handling user input
    const [inputValue, setInputValue] = useState('');

    // Handles changes in the input field
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    // Adds a new todo item if the input is not empty
    function handleSubmit() {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue.trim()]);
            setInputValue(''); // Clears input field after adding
        }
    }

    // Deletes a todo item based on its index
    function handleDelete(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <div>
            {/* Input field for adding new todos */}
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Enter a todo..."
            />
            {/* Button to add a new todo */}
            <button onClick={handleSubmit}>Add Todo</button>

            {/* List of todos */}
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        {/* Button to delete the specific todo */}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
