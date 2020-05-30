import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const years = [
    ...new Set(
      posts.map(({ node }) => {
        return node.frontmatter.year
      })
    ),
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
        {years.map(year => {
          return (
            <div
              style={{
                marginTop: `1rem`,
              }}
            >
              <h1
                style={{
                  marginBottom: "1rem",
                }}
              >
                {year}
              </h1>
              {/* <Bio /> */}
              {posts
                .filter(({ node }) => node.frontmatter.year === year)
                .map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <div
                      style={{
                        marginBottom: "0.5rem"
                      }}
                    >
                      <span
                        style={{
                          fontSize: "24px",
                          fontFamily: `Roboto`,
                          fontStyle: `italic`
                        }}
                      >
                        {node.frontmatter.date}
                      </span>
                      <h1
                        style={{
                          marginBottom: "5px",
                          display: `inline`,
                          marginLeft: `2rem`,
                          fontFamily: `Roboto`,
                          fontWeight: `400`,
                        }}
                      >
                        <Link
                          style={{
                            color: `#2d3748`,
                            textDecoration: `none`,
                            fontSize: "24px",
                          }}
                          to={node.frontmatter.path}
                        >
                          {title}
                        </Link>
                      </h1>

                      {/* <section
                style={{
                  marginTop: "20px",
                }}
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section> */}
                    </div>
                  )
                })}
            </div>
          )
        })}
      </div>
    </>
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
            date: date(formatString: "MMMM DD")
            year: date(formatString: "YYYY")
            title
            description
          }
        }
      }
    }
  }
`
