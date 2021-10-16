import React from 'react'
import ProjectSummaryva from './ProjectSummaryva'
import { Link } from 'react-router-dom'


const ProjectListva = ({projectsva}) => {
  
  return (
    <div className="project-list section">
      { projectsva && projectsva.map(projectva => {
        return (
          <Link href={'/projectva/' + projectva.id} key={projectva.id}>
            <ProjectSummaryva projectva={projectva} />
          </Link>
        )
      })}  
    </div>
  )
}

export default ProjectListva
