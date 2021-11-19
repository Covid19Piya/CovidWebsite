import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink style ={{fontweight:"bold",color: "#F43A6B",textDecoration:"none"}}to='/signup'>Signup Volunteer</NavLink></li>
        <li><NavLink style ={{fontweight:"bold",color: "#F43A6B",textDecoration:"none"}}to='/signin'>Login Volunteer</NavLink></li>
        <li><NavLink style = {{fontweight:"bold",color: "#F43A6B",textDecoration:"none"}}to='/loginp'>Login Patient</NavLink></li>
      </ul>
    </div>
  ) 
}

export default SignedOutLinks