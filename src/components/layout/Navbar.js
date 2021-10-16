import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import SignInpa from './SignInpa'


const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  let links
  if (auth.email != null && auth.phoneNumber == null) 
  {
    links = auth.email ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  } 
  else if (auth.phoneNumber != null && auth.email == null) 
  {
     links = auth.phoneNumber ? <SignInpa profile={profile} /> : <SignedOutLinks />;
  }
  else
  { 
    links = auth.email ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  }
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">One4All</Link>
        {links}
       

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

export default connect(mapStateToProps)(Navbar)
