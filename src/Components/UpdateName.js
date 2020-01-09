import React, { Component } from 'react'
import '../App.css';

export class UpdateName extends Component {
  constructor() {
    super(); 

    this.state = {
      newF: '', 
      newL: '', 
      newD: '', 
      newA: '', 
      newE: '',
      ageCalc: 30
    }
  }

  handeChange = e => {this.setState ({ [e.target.name]: e.target.value })}

  render() {
    const {newF, newL, newD, newA, newE} = this.state;
    return (
      <div>
         <h2>Full Name:  {this.props.first1} {this.props.last1} </h2>
         <h2>Age:  {this.props.age1} </h2>
         <h2>DOB:  {this.props.dob1} </h2>
         <h2>Employer: {this.props.empl} </h2>
         <div className='lower-container'>
            <br/>
            <label>First Name: </label> <input placeholder='Enter First Name' type='text' name='newF' onChange={e=>this.handeChange(e)} />
            <br/>
            <br/>
            <label>Last Name: </label> <input placeholder='Enter Last Name' type='text' name='newL' onChange={e=>this.handeChange(e)} />
            <br/>
            <br/>
            <label>Date of birth: </label> <input placeholder='Enter Last Name' type='date' name='newD' onChange={e=>this.handeChange(e)} />
            <br/>
            <br/>
            <label>Your age is: {this.state.ageCalc} </label>
            <br/>
            <br/>
            <label>Employer: </label> <input placeholder='Enter your Employer' type='text' name='newE' onChange={e=>this.handeChange(e)} />
         </div>
         <br/>
         <br/>
         <button 
             onClick={()=>this.props.updatePerson1(newF, newL, newD, newA, newE)} > 
             Submit to update 
         </button>
      </div>
    )
  }
}

export default UpdateName
