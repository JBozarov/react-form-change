import React, { Component } from 'react'



class Lifecycle extends Component {
  constructor () {
    super(); 
    
    this.state = {
      car: 'Tesla Model S', 
    }
  }
  
  
  componentDidMount () {
    this.setState ({ car: 'Geo Metro '}); 
    console.log('ComponentDidMount Fired')

  }
  
  componentDidUpdate () { //Component can take arguments of prviouse state or prvious props 
    console.log('ComponentDidUpdate Fired ')
  }


  

  render() { //
    console.log('Render Fired')
    return (
      <div>
        Lifecycle Mothod Examples 
        <input />
        {this.state.car}
      </div>
    )
  }
}


