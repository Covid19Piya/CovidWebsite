import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbarpa = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links2 = auth.phoneNumber ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;


  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">One4All</Link>
        {links2}
       

      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbarpa)
