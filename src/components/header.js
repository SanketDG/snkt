import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { BiPen, BiWrench, BiHomeAlt, BiGlassesAlt } from "react-icons/bi"
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi"

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
        justifyContent: "space-evenly",
        margin: `0 auto`,
        maxWidth: 960,
        padding: `2rem 1.0875rem`,
      }}
    >
      <Link
        className="nav-item"
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
        className="nav-item"
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
        className="nav-item"
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
        className="nav-item"
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
        className="navbar-icon"
        style={{
          color: `#2d3748`,
          textDecoration: `none`,
          marginLeft: `auto`,
        }}
      >
        <FiGithub
          style={{
            marginLeft: "5px",
            display: "inline",
            textDecoration: `none`,
          }}
        />
      </a>
      <a
        href="https://twitter.com/SanketDG"
        className="navbar-icon"
        style={{
          color: `#2d3748`,
          textDecoration: `none`,
          marginLeft: `1.5rem`,
        }}
      >
        <FiTwitter
          style={{
            marginLeft: "5px",
            display: "inline",
            textDecoration: `none`,
          }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/sanketdg"
        className="navbar-icon"
        style={{
          color: `#2d3748`,
          textDecoration: `none`,
          marginLeft: `1.5rem`,
        }}
      >
        <FiLinkedin
          style={{
            marginLeft: "5px",
            display: "inline",
            textDecoration: `none`,
          }}
        />
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
