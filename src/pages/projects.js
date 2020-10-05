import React from "react"

import Header from "../components/header"
import Projects from "../texts/Projects"
import { Grid } from "theme-ui"
import ProjectCard from "../components/projectcard"

const ProjectsIndex = ({ data, location }) => {
  let projects = ["portfolio", "awsomsauce", "modern-django-tooling", "khol"]

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
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Grid>
      </div>
    </>
  )
}

export default ProjectsIndex
