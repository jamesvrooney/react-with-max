import React from 'react';
import Person from './Person/Person'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React developer.</h1>
      <Person age="30">Football</Person>
      <Person age="40"/>
      <Person age="50"/>
    </div>
  );
}

export default App;
