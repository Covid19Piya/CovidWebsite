import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'


class Creatpost_patient extends Component {
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
          <h3 style ={{backgroundColor:"#FEBBDD",
              fontWeight: "bold",
              color:"#fff",
              textShadow: "2px 2px gray",
              textAlign:"center",
              fontFamily:"FC.otf",
              padding: 10,
              borderRadius: 8,
              boxShadow: "1px 3px 1px #9E9E9E",
              width:1030,

              }}>Need Help Form</h3>
        <form style = {
                    {backgroundColor: "#fff",
                    padding: 10,
                    margin: 10,
                    marginBottom: 30,
                    paddingBottom: 28,
                    width: 1010,
                    borderRadius: 8,
                    boxShadow: "1px 3px 1px #9E9E9E",
                    
                    }} onSubmit={this.handleSubmit}>
      
          <div className="input-field">
            <input type="text" id='Name' onChange={this.handleChange} />
            <label style ={{color:"black"}} htmlFor="title">Name </label>
          </div>
          <div className="input-field">
            <textarea id="Age" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label style ={{color:"black"}} htmlFor="content">Age</label>
          </div>
          <div className="input-field">
            <textarea id="gender" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label style ={{color:"black"}} htmlFor="content">gender</label>
          </div>
          <div className="input-field">
            <textarea id="Address" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label style ={{color:"black"}} htmlFor="content">Address</label>
          </div>
          <div className="input-field">
            <textarea id="PhoneNumber1" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label style ={{color:"black"}} htmlFor="content">Phone Number</label>
          </div>
          <div className="input-field">
            <textarea id="Help" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label style ={{color:"black"}} htmlFor="content">Help</label>
          </div>
          <div className="input-field">
            <button style = {{
                    textAlign :"center",
                    backgroundColor:"#F43A6B",
                    color:"white",
                    padding: 6,
                    fontWeight: "bold",
                    borderRadius: 8,
                    boxShadow: "1px 3px 1px #9E9E9E",
                    paddingLeft: 40,
                    paddingRight: 40,
                 
                  }}>Submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Creatpost_patient)
