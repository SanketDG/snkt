import React from "react"

import { DiGithubBadge } from "react-icons/di"
import { BiLink } from "react-icons/bi"

const ProjectCard = () => {
  return (
    <div className="flex max-w-sm rounded overflow-hidden rounded-b-lg border-t-4 border-black shadow-lg">
      <div className="m-auto px-6 pt-4">
        <div className="font-bold text-xl mb-2">
          awsomsauce{" "}
          <span className="inline-block text-2xl align-middle">
            <a href="https://github.com/awsomsauce">
              <BiLink size={28} />
            </a>
          </span>
        </div>

        <p className="text-gray-700 text-base">
          Experimental next-gen blogging platform that dives deep into
          architecture and systems. I am totally kidding, it's just a blog I
          write with a few of my friends.
        </p>
        <div className="px-6 pb-4 pt-1">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Hugo
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Tachyons
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Netlify
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
