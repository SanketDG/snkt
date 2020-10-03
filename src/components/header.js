import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { BiPen, BiWrench, BiHomeAlt, BiGlassesAlt } from "react-icons/bi"

const Header = ({ siteTitle }) => (
  <header
    style={{
      fontFamily: `Source Code Pro`,
      marginBottom: `0rem`,
      fontWeight: `700`,
    }}
  >
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: `0 auto`,
        maxWidth: 960,
        padding: `2rem 1.0875rem`,
        width: "50%",
      }}
    >
      <Link
        to="/"
        style={{
          color: `#2d3748`,
          textDecoration: `none`,
        }}
      >
        home
        <BiHomeAlt
          style={{
            marginLeft: "5px",
            display: "inline",
          }}
        />
      </Link>
      <Link
        to="/projects"
        style={{
          color: `#2d3748`,
          textDecoration: `none`,
          marginLeft: `1.5rem`,
        }}
      >
        projects
        <BiWrench
          style={{
            marginLeft: "5px",
            display: "inline",
          }}
        />
      </Link>
      <Link
        to="/resume"
        style={{
          color: `#2d3748`,
          textDecoration: `none`,
          marginLeft: `1.5rem`,
        }}
      >
        resume
        <BiGlassesAlt
          style={{
            marginLeft: "5px",
            display: "inline",
          }}
        />
      </Link>
      <Link
        to="/blog"
        style={{
          color: `#2d3748`,
          textDecoration: `none`,
          marginLeft: `1.5rem`,
        }}
      >
        blog
        <BiPen
          style={{
            marginLeft: "5px",
            display: "inline",
          }}
        />
      </Link>
      <a
        href="https://github.com/SanketDG"
        style={{
          color: `#2d3748`,
          textDecoration: `none`,
          marginLeft: `1.5rem`,
        }}
      >
        github↗
      </a>
      <a
        href="https://twitter.com/SanketDG"
        style={{
          color: `#2d3748`,
          textDecoration: `none`,
          marginLeft: `1.5rem`,
        }}
      >
        twitter↗
      </a>
      <a
        href="https://www.linkedin.com/in/sanketdg"
        style={{
          color: `#2d3748`,
          textDecoration: `none`,
          marginLeft: `1.5rem`,
        }}
      >
        linkedin↗
      </a>
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
