import React from "react"

import Header from "../components/header"
import Projects from "../texts/Projects"
import { Grid } from "theme-ui"
import ProjectCard from "../components/projectcard"

const ProjectsIndex = ({ data, location }) => {
  let projects = [
    {
      name: "portfolio",
      description: `Made this portfolio using Gatsby`,
    },
    {
      name: "djurl",
    },
    {
      name: "extenstart",
    },
    {
      name: "khol",
    },
    {
      name: "awsomsauce",
      description: `Experimental next-gen blogging platform that dives deep into
      architecture and systems. I am totally kidding, it's just a blog I
      write with a few of my friends.`,
    },
  ]

  return (
    <>
      <Header />
      <div
        className="blog-main"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1rem 1.0875rem`,
          width: "80%",
        }}
      >
        <h1>Projects</h1>
        <h2>Ongoing</h2>

        <Grid
          gap={4}
          columns={[1, null, 2]}
          sx={{
            margin: "40px 0",
          }}
        >
          {projects.map(project => (
            <ProjectCard project={project} />
          ))}
        </Grid>
      </div>
    </>
  )
}

export default ProjectsIndex
