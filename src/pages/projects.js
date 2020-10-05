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
      description: `A minimal self-hosted URL shortener built using Django built with
      modern tooling for Python and best practices in mind.`,
    },
    {
      name: "extenstart",
      description: `Opinionated Boilerplate for Web Extensions`,
    },
    {
      name: "khol",
      description: `A minimalistic shell written in C with support for redirection,
      history and pipes.`,
    },
    {
      name: "awsomsauce",
      description: `An engineering blog that I and some of my friends write!`,
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
