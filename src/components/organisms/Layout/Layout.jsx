/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"
import Navbar from "../../navigation/Navbar"
import Footer from "../../molecules/Footer"

const Layout = ({ props, children }) => (
  <Flex
    sx={{
      flexDirection: "column",
      height: "100%",
    }}
  >
    <Navbar />
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
