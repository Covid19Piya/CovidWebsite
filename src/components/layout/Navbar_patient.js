import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const Navbar_patient = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>Need For Help</NavLink></li>
        <li><NavLink to='/seepatient'>See Post For Help</NavLink></li>
        <li><NavLink to='/PatientChat'>Chat To Volunteer</NavLink></li>
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

export default connect(null, mapDispatchToProps)(Navbar_patient)
