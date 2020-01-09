import React, { Component } from 'react';
import Header from './Components/Header'; 
import UpdateName from './Components/UpdateName'
import './App.css';

class App extends Component {
  constructor () {
    super(); 

    this.state = {
      firstName: 'John', 
      lastName: 'Bozarov', 
      dob: '01/01/1984', 
      age: 30, 
      employer: 'Google', 
    }
  }

  updatePerson = (newFirstName, newLastName, newDOB, newAge, newEployer) => {
    this.setState ({
      firstName: newFirstName, 
      lastName: newLastName, 
      dob: newDOB, 
      age: newAge, 
      employer: newEployer
    })
  }


     render () {
       return (
         <div className="App">
            <Header /> 
            <UpdateName 
                  first1={this.state.firstName} 
                  last1={this.state.lastName}
                  age1={this.state.age}
                  dob1={this.state.dob}
                  empl={this.state.employer}
                  updatePerson1={this.updatePerson}
            />    
         </div>
       )
     }
  }

export default App;
