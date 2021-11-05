import React, { Component } from "react";
import storage from "../../config/fbConfig";
import firebase from "../../config/fbConfig";
import { connect } from "react-redux";
import { createProjectva } from "../../store/actions/projectActionsva";
import { Redirect } from "react-router-dom";

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
    url: "",
    fileType: "",
    fileName: "",
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

    const formHandler = (e) => {
      e.preventDefault();
      const file = e.target[0].files[0];
      this.state.fileType = file.type;
      this.state.fileName = file.name;

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

        },
        (error) => console.log(error),
        () => {
          firebase.storage()
            .ref("files")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              this.state.url = url;
            });
        }
      );
    };

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Need Help Form</h5>

          <div className="input-field">
            <input type="text" id="Name" onChange={this.handleChange} />
            <label htmlFor="title">ชื่อของคุณ</label>
          </div>
          <div className="input-field">
            <textarea id="Title"
              onChange={this.handleChange}
              className="materialize-textarea"></textarea>
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
            <button className="btn pink lighten-1">Submit</button>
          </div>
        </form>

        <form onSubmit={formHandler}>
          <input type="file" className="input" />
          <button type="submit">Upload</button>
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
