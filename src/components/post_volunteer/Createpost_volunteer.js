import React, { Component } from "react";
import { connect } from "react-redux";
import { createProjectva } from "../../store/actions/projectActionsva";
import { Redirect } from "react-router-dom";
import storage from "../../config/fbConfig";
import { useState } from "react";
import firebase from "../../config/fbConfig";

class Createpost_volunteer extends Component {
  state = {
    Title: "",
    content: "",
    Name: "",
    Description: "",
    PhoneNumber2: "",
    Other: "",
    Location: "",
    id: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProjectva(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    console.log(auth.email);
    this.state.id = auth.email;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Need Help Form</h5>

          <div className="input-field">
            <input type="text" id="Name" onChange={this.handleChange} />
            <label htmlFor="title">ชื่อของคุณ</label>
          </div>
          <div className="input-field">
            <textarea
              id="Title"
              className="materialize-textarea"
            ></textarea>
            <label htmlFor="content">ชื่อเรื่อง</label>
          </div>
          <div className="input-field">
            <textarea
              id="Description"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content">คำอธิบาย</label>
          </div>
          <div className="input-field">
            <textarea
              id="Location"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content">สถานที่</label>
          </div>
          <div className="input-field">
            <textarea
              id="PhoneNumber2"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content">เบอร์โทรศัพท์</label>
          </div>
          <div className="input-field">
            <textarea
              id="Other"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content">หมายเหตุ</label>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1" >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProjectva: (projectva) => dispatch(createProjectva(projectva)),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Createpost_volunteer);
