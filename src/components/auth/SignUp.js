import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { useState } from "react";
import firebase from "firebase";

//หน้า สมัคร Volunteer 
//มีemail password firstname lastname ให้กรอก

class SignUp extends Component {
  state = {
    progress: 0,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    url: '',
    fileType: '',
    fileName: ''
  }

  uploadFiles = (file) => {
    //
    const uploadTask = firebase.storage().ref(`files/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.state.progress = prog;
      },
      (error) => console.log(error),
      () => {
        firebase.storage()
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/Home' />

    const formHandler = (e) => {
      e.preventDefault();
      const file = e.target[0].files[0];
      console.log(file)
      this.state.fileName = file.name
      this.state.fileType = file.type
      uploadFiles(file);
    };

    const uploadFiles = (file) => {
      //
      const uploadTask = firebase.storage().ref(`files/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.state.progress = prog;
        },
        (error) => console.log(error),
        () => {
          firebase.storage()
            .ref("files")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              this.state.url = url
              console.log(url);
            });
        }
      );
    };


    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className="center red-text">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
        <form onSubmit={formHandler}>
          <input type="file" className="input" />
          <button type="submit">Upload</button>
        </form>
        <hr />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
