import React from 'react'
import Summarypost_patient from './Summarypost_patient'
import { Link } from 'react-router-dom'


const Listpost_patient = ({projects}) => {
  
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <Link href={'/project/' + project.id} key={project.id}>
            <Summarypost_patient project={project} />
          </Link>
        )
      })}  
    </div>
  )
}

export default Listpost_patient
