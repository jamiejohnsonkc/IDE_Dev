import React from "react"
import Layout from "./layout"
import Header from "./header"
import Typography from "./typography"
import Colors from "./colors"
import { Container } from "theme-ui"

export default props => (
  <Layout>
    <Container p={4}>
      <Header />
      <Typography />
      <Colors />
    </Container>
  </Layout>
)
