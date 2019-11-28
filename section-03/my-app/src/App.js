import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 45},
      {name: 'John', age: 25},
      {name: 'Peter', age: 35}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'John', age: 145},
        {name: 'Serge', age: 125},
        {name: 'Mike', age: 135}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React developer.</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Football</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
