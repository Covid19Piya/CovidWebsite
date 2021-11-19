import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const Navbar_patient = (props) => {
  return (
    <div>
      <ul className="right" style={{textDecoration:"none"}}>
        <li><NavLink style ={{fontweight:"bold",color: "#F43A6B",textDecoration:"none"}}to='/create'>Need For Help</NavLink></li>
        <li><NavLink style ={{fontweight:"bold",color: "#F43A6B",textDecoration:"none"}}to='/NewsDonateVolunteer'>Donate News</NavLink></li>
        <li><NavLink style ={{fontweight:"bold",color: "#F43A6B",textDecoration:"none"}}to='/seepatient'>Your Case</NavLink></li>
        <li><NavLink style ={{fontweight:"bold",color: "#F43A6B",textDecoration:"none"}}to='/PatientChat'>Chat To Volunteer</NavLink></li>
        <li><NavLink style = {{fontweight:"bold",textDecoration:"none"}}to='/Home' onClick={props.signOut}>Log Out</NavLink></li>
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
