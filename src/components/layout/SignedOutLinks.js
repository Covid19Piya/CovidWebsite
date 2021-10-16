import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signup'>Signup Volunteer</NavLink></li>
        <li><NavLink to='/signin'>Login Volunteer</NavLink></li>
        <li><NavLink to='/loginp'>Login Patient</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks