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
      <div className="container" id="signup">
        <h3 style ={{backgroundColor:"#FEBBDD",
              fontWeight: "bold",
              color:"#fff",
              textShadow: "2px 2px gray",
              textAlign:"center",
              fontFamily:"FC.otf",
              padding: 10,
              borderRadius: 8,
              boxShadow: "1px 3px 1px #9E9E9E",
              marginBottom: 20,
              marginTop: 20,
              }}>Sign Up</h3>

        <form style = {
                    {backgroundColor: "#fff",
                    padding: 10,
                    margin: 10,              
                    marginBottom: 30,
                    paddingBottom: 28,
                    borderRadius: 8,
                    boxShadow: "1px 3px 1px #9E9E9E",
                    
                    }}onSubmit={formHandler}>
          
          <input type="file" className="input" />
          <button style = {{
                    textAlign :"center",
                    backgroundColor:"#F43A6B",
                    color:"white",
                    padding: 6,
                    borderRadius: 8,
                    boxShadow: "1px 3px 1px #9E9E9E",
                 
                  }} type="submit">Upload</button>
        </form>
        <form  style = {
                    {backgroundColor: "#fff",
                    padding: 10,
                    margin: 10,
                    marginBottom: 30,
                    paddingBottom: 28,
                    width: 1010,
                    borderRadius: 8,
                    boxShadow: "1px 3px 1px #9E9E9E",
                    
                    }}onSubmit={this.handleSubmit}>


          <div className="input-field">
            <label htmlFor="email"><a style ={{fontWeight: "bold",color:"black"}}>Email</a></label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password"><a style ={{fontWeight: "bold",color:"black"}}>Password</a></label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName"><a style ={{fontWeight: "bold",color:"black"}}>First Name</a></label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName"><a style ={{fontWeight: "bold",color:"black"}}>Last Name</a></label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button style = {{
                    textAlign :"center",
                    backgroundColor:"#F43A6B",
                    color:"white",
                    padding: 6,
                    borderRadius: 8,
                    boxShadow: "1px 3px 1px #9E9E9E",
                 
                  }}>Sign Up</button>
            <div className="center red-text">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
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
