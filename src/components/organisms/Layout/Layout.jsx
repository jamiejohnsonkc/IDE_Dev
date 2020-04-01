/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"
import Header from "../../molecules/Header"
import Footer from "../../molecules/Footer"

const Layout = ({ children }) => (
  <Flex
    sx={{
      flexDirection: "column",
      height: "100%",
    }}
  >
    <Header />
    <main
      style={{
        flexGrow: 1,
      }}
    >
      {children}
    </main>

    <Footer />
  </Flex>
)

export default Layout
