import React from 'react'
import moment from 'moment'

const Summary_volunteer = ({projectva}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{projectva.title}</span>
        <p>Posted by {projectva.authorFirstName} {projectva.authorLastName}</p>
        <p className="grey-text">{moment(projectva.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default Summary_volunteer
