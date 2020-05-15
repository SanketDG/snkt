import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
        <div style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `2rem 1.0875rem`,
            width: "80%"
        }}>
            {/* <Bio /> */}
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
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
                        {title}
                      </p>
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "100"
                        }}
                      >
                        {node.frontmatter.date}
                      </p>
                      <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </section>
                    </div>

                )
            })}
        </div>
    )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
