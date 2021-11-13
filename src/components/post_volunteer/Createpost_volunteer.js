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
                    
                    }}onSubmit={formHandler}>
            <h6>กรุณาแนบรูปภาพประกอบ</h6>
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
            <input type="text" id="Name" onChange={this.handleChange} />
            <label htmlFor="title"><a style ={{fontWeight: "bold",color:"black"}}>ชื่อของคุณ</a></label>
          </div>
          <div className="input-field">
            <textarea id="Title"
              onChange={this.handleChange}
              className="materialize-textarea"></textarea>
            <label htmlFor="content"><a style ={{fontWeight: "bold",color:"black"}}>ชื่อเรื่อง</a></label>
          </div>
          <div className="input-field">
            <textarea
              id="Description"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content"><a style ={{fontWeight: "bold",color:"black"}}>คำอธิบาย</a></label>
          </div>
          <div className="input-field">
            <textarea
              id="Location"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content"><a style ={{fontWeight: "bold",color:"black"}}>สถานที่</a></label>
          </div>
          <div className="input-field">
            <textarea
              id="PhoneNumber2"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content"><a style ={{fontWeight: "bold",color:"black"}}>เบอร์โทรศัพท์</a></label>
          </div>
          <div className="input-field">
            <textarea
              id="Other"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content"><a style ={{fontWeight: "bold",color:"black"}}>หมายเหตุ</a></label>
          </div>


          <div className="input-field">
            <button style = {{
                    textAlign :"center",
                    backgroundColor:"#F43A6B",
                    color:"white",
                    padding: 6,
                    borderRadius: 8,
                    boxShadow: "1px 3px 1px #9E9E9E",
                 
                  }}>Submit</button>
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
