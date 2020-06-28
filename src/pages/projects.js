import React from "react"

import Header from "../components/header"
import Projects from "../texts/Projects"

const BlogIndex = ({ data, location }) => {

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
        <Projects />
      </div>
    </>
  )
}

export default BlogIndex
