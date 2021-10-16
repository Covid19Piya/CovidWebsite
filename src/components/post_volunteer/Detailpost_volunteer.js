import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const Detailpost_volunteer = (props) => {
  const { projectva, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (projectva) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{projectva.title}</span>
            <p>{projectva.content}</p>
            <p>{projectva.content2}</p>
            <p>{projectva.content3}</p>
            <p>{projectva.content4}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {projectva.authorFirstName} {projectva.authorLastName}</div>
            <div>{moment(projectva.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const idva = ownProps.match.params.idva;
  const projectsva = state.firestore.data.projectsva;
  const projectva = projectsva ? projectsva[idva] : null
  return {
    projectva: projectva,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'post_volunteer'
  }])
)(Detailpost_volunteer)
