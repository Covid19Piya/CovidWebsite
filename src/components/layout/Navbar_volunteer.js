import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const Navbar_volunteer = (props) => {
  return (
    <div >
      <ul className="right" style = {{backgroundColor:"#FEBBDD"}}>
        <li ><NavLink style = {{color: "#F43A6B"}} to='/NewsDonateVolunteer'>Donate Post</NavLink></li>
        <li><NavLink style = {{color: "#F43A6B"}} to='/create_volunteer'>Post For Help</NavLink></li>
        <li ><NavLink style = {{color: "#F43A6B"}} to='/test'>Patient</NavLink></li>
        <li ><NavLink style = {{color: "#F43A6B"}} to='/test3'>Your Case</NavLink></li>
        <li><NavLink to='/Home' onClick={props.signOut}>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(Navbar_volunteer)
