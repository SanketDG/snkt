import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../texts/Hero"
import { Global } from "@emotion/core"
import { Styled, Container, css } from "theme-ui"
import Header from "../components/header"
import BlogPostTemplate from "../templates/blogpost"

const IndexPage = () => (
  <Styled.root data-testid="theme-root">
      <SEO title="Home" />
      <Header />
      <Layout>
        <h1>Hi.</h1>

        <h2>I am Sanket.</h2>
      {/* <Text sx={{ fontSize: [4, 5, 6], fontWeight: `bold`, color: `heading` }}>
        Hi.
      </Text> */}

        <Hero />

      </Layout>
  </Styled.root>
)

export default IndexPage
