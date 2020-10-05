import React from "react"

// import { DiGithubBadge } from "react-icons/di"
import { BiLink } from "react-icons/bi"

const ProjectCard = ({ project }) => {
  return (
    <div className="flex max-w-sm rounded overflow-hidden rounded-b-lg border-t-4 border-black shadow-lg">
      <div className="m-auto px-6 pt-4">
        <div className="font-bold text-xl mb-2">
          {project.name}{" "}
          <span className="inline-block text-2xl align-middle">
            <a href="https://github.com/awsomsauce">
              <BiLink size={28} />
            </a>
          </span>
        </div>

        <p className="text-gray-700 text-base">{project.description}</p>
        <div className="pb-4 pt-1">
          {project.tech &&
            project.tech.map(technology => (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {technology}
              </span>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
