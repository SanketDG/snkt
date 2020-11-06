import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../texts/Hero"
import { Styled } from "theme-ui"
import Header from "../components/header"

const IndexPage = () => (
  <Styled.root data-testid="theme-root">
    <SEO title="Home" />
    <Header />
    <Layout>
      <h1
        style={{
          fontFamily: `Patua One`,
          fontSize: `48px`,
          fontWeight: `400`,
        }}
      >
        Hi.
      </h1>

      <h2
        style={{
          fontFamily: `Patua One`,
          fontSize: `32px`,
          fontWeight: `400`,
        }}
      >
        I am Sanket.
      </h2>
      {/* <Text sx={{ fontSize: [4, 5, 6], fontWeight: `bold`, color: `heading` }}>
        Hi.
      </Text> */}

      <Hero />
    </Layout>
  </Styled.root>
)

export default IndexPage
