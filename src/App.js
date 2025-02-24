// File Name: App.js

import React from 'react'; // Importing React library for component creation
import './App.css'; // Importing global CSS for styling
import TodoList from './components/TodoList'; // Importing the TodoList component

// Functional component 'App' that acts as the root component
function App() {
  return (
    // Main container div with the class "App" for styling purposes
    <div className="App">
      
      {/* Header section of the app */}
      <header className="App-header">
        
        {/* Application Title */}
        <p>Todo list</p>

        {/* Rendering the TodoList component */}
        <TodoList />
        
      </header>
    </div>
  );
}

// Exporting App component as the default export
export default App;
