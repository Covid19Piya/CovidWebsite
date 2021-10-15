import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
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
    this.props.createProject(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="pink lighten-5" onSubmit={this.handleSubmit}>
          <h5 className="black-text text-darken-3">ข้อมูลส่วนตัว</h5>
          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title">หัวข้อ</label>
          </div>
          <div className="input-field">
            <textarea
              id="content1"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content1">ชื่อ-นามสกุล</label>
          </div>

          <div className="input-field">
            <textarea
              id="content2"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content2">ระบุอายุ</label>
          </div>

          <div className="input-field">
            <textarea
              id="content3"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content3">ระบุเพศ</label>
          </div>

          <div className="input-field">
            <textarea
              id="content4"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content4">ระบุเบอร์โทรศัพท์ที่สามารถติดต่อได้</label>
          </div>

          <div className="input-field">
            <textarea
              id="content5"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="content5">ระบุเบอร์โทรศัพท์ที่สามารถติดต่อได้</label>
          </div>

          

          <div className="input-field">
            <button className="btn green lighten-2">Create</button>
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
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
