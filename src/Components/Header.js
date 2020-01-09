import React from 'react'; 
import '../App.css'; 

//in functional component, we need to pass props if we wanna use it inside a component, 
//also make sure we don't do this.props we do just props 
function Header(props) { 
  console.log(props)
  return (
    <div className="header">
      <h2> Welcome to Application page </h2>
      {props.name}
    </div>
  )
}


export default Header; 