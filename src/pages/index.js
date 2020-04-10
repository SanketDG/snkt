import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../texts/Hero"
import { Global } from "@emotion/core"
import { Styled, Container, css } from "theme-ui"
import Header from "../components/header"

const IndexPage = () => (
  <Styled.root data-testid="theme-root">
      <SEO title="Home" />
      <Header siteTitle="SanketDG" />
      <Layout>
        <Hero />
      </Layout>
  </Styled.root>
)

export default IndexPage
