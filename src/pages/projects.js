import React from "react"

import Header from "../components/header"
import Projects from "../texts/Projects"
import { Grid, Box, Card, Text } from "theme-ui"

const BlogIndex = ({ data, location }) => {
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
          gap={3}
          columns={[2]}
          sx={{
            margin: "40px 0",
          }}
        >
          {projects.map(project => {
            return (
              <Card
                sx={{
                  width: "100%",
                  margin: "0 auto",
                  border: "3px solid #000",
                  padding: "15px",
                  maxWidth: 400,
                }}
              >
                <Text
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {project}
                </Text>
              </Card>
            )
          })}
        </Grid>
        <Projects />
      </div>
    </>
  )
}

export default BlogIndex
