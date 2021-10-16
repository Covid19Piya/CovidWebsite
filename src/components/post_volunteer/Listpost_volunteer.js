import React from 'react'
import Summary_volunteer from './ProjectSummaryva'
import { Link } from 'react-router-dom'


const Listpost_volunteer = ({projectsva}) => {
  
  return (
    <div className="project-list section">
      { projectsva && projectsva.map(projectva => {
        return (
          <Link href={'/projectva/' + projectva.id} key={projectva.id}>
            <Summary_volunteer projectva={projectva} />
          </Link>
        )
      })}  
    </div>
  )
}

export default Listpost_volunteer
