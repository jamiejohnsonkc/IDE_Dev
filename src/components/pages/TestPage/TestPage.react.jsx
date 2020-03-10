import React from "react"
import { Link } from "gatsby"
import { Styled } from "theme-ui"
import Layout from "../../../components/organisms/Layout"
import Image from "../../../components/image"
import SEO from "../../../utils/seo"
import TestComp from "../../../components/molecules/TestComp"
import TestNav from "../../../components/molecules/TestNav"
import Text from "../../../components/atoms/Text"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TestNav />
    <TestComp />
    <Text>Test Text</Text>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
