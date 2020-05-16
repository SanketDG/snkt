import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `2rem 1.0875rem`,
          width: "80%",
        }}
      >
        <div
          style={{
            paddingBottom: "0.5rem",
          }}
        >
          <p
            style={{
              fontSize: "40px",
              fontWeight: "500",
              marginBottom: "5px",
            }}
          >
            {frontmatter.title}
          </p>
          <p
            style={{
              fontSize: "20px",
            }}
          >
            Sanket | {frontmatter.date}
          </p>
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
