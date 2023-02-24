
"use client";

import { useState } from 'react';
// Define the Home component
export default function Home() {
  // Declare state for the list of todos and the new todo input
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  // Define a function to add a new todo to the list
  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  // Define a function to delete a todo from the list by its index
  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Render the component
  return (
    <div>
      {/* Add a header */}
      <h1>Todo App</h1>

      {/* Add an input field for adding new todos */}
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />

      {/* Add a button to add new todos */}
      <button onClick={addTodo}>Add Todo</button>

      {/* Add a list of todos with a delete button next to each one */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
