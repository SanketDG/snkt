import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `0rem`,
    }}
  >
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: `0 auto`,
        maxWidth: 960,
        padding: `2rem 1.0875rem`,
        width: "50%"
      }}
    >
        <Link
          to="/projects"
          style={{
            color: `#2d3748`,
            textDecoration: `none`,
          }}
        >
          projects
        </Link>
      <Link
        to="/projects"
        style={{
          color: `#2d3748`,
          textDecoration: `none`,
          paddingLeft: `1.5rem`
        }}
      >
        resume
        </Link>
      <Link
        to="/projects"
        style={{
          color: `#2d3748`,
          textDecoration: `none`,
          paddingLeft: `1.5rem`
        }}
      >
        blog
        </Link>
      <Link
        to="/projects"
        style={{
          color: `#2d3748`,
          textDecoration: `none`,
          paddingLeft: `1.5rem`
        }}
      >
        github
        </Link>
      <Link
        to="/projects"
        style={{
          color: `#2d3748`,
          textDecoration: `none`,
          paddingLeft: `1.5rem`
        }}
      >
        twitter
        </Link>
      <Link
        to="/projects"
        style={{
          color: `#2d3748`,
          textDecoration: `none`,
          paddingLeft: `1.5rem`
        }}
      >
        linkedin
        </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
