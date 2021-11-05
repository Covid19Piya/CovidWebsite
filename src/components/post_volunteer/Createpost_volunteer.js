import React, { Component } from "react";
import { connect } from "react-redux";
import { createProjectva } from "../../store/actions/projectActionsva";
import { Redirect } from "react-router-dom";

class Createpost_volunteer extends Component {
    state = {
      title: "",
      content: "",
    };
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    };
    handleSubmit = (e) => {
      e.preventDefault();
      // console.log(this.state);
      this.props.createProjectva(this.state);
      this.props.history.push("/");
    };
    render() {
      const { auth } = this.props;
      if (!auth.uid) return <Redirect to="/Home" />;
      return (
        <div className="container" >
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

              }}>ข้อมูลส่วนตัว</h3>
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
              <input type="text" id="title" onChange={this.handleChange} />
              <label style ={{color:"black"}}htmlFor="title">หัวข้อ</label>
            </div>
            <div className="input-field">
              <textarea
                id="content1"
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
              <label style ={{color:"black"}} htmlFor="content1">ชื่อ-นามสกุล</label>
            </div>
  
            <div className="input-field">
              <textarea
                id="content2"
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
              <label style ={{color:"black"}} htmlFor="content2">ระบุ</label>
            </div>
  
            <div className="input-field">
              <textarea
                id="content3"
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
              <label style ={{color:"black"}} htmlFor="content3">ระบุ</label>
            </div>
  
            <div className="input-field">
              <textarea
                id="content4"
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
              <label style ={{color:"black"}} htmlFor="content4">ระบุ</label>
            </div>
  
            <div className="input-field">
              <textarea
                id="content5"
                className="materialize-textarea"
                onChange={this.handleChange}
              ></textarea>
              <label style ={{color:"black"}} htmlFor="content5">ระบุ</label>
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
                 
                  }}>Create</button>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Createpost_volunteer);
  