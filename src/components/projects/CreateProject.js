import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase'

class CreateProject extends Component {
  state = {
    Address: '',
    Age: '',
    Confirm: '',
    Help: '',
    Name: '',
    PhoneNumber1: '',
    Request: '',
    Status: '',
    gender: '',
    id: ''
    
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push('/');
  }



  render() {
    const { auth } = this.props;

    console.log(auth.phoneNumber)
    this.state.id = auth.phoneNumber
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Need Help Form</h5>
          <div className="input-field">
            <input type="text" id='Name' onChange={this.handleChange} />
            <label htmlFor="title">Name </label>
          </div>
          <div className="input-field">
            <textarea id="Age" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Age</label>
          </div>
          <div className="input-field">
            <textarea id="gender" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">gender</label>
          </div>
          <div className="input-field">
            <textarea id="Address" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Address</label>
          </div>
          <div className="input-field">
            <textarea id="PhoneNumber1" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Phone Number</label>
          </div>
          <div className="input-field">
            <textarea id="Help" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Help</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
