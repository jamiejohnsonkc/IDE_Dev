/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Navbar from "../../molecules/Navbar"
import Hero from "../Hero"
import Header from "../../molecules/Header"

const Layout = () => (
  <div>
    <Header />
    <Navbar />
    <Hero />
  </div>
)

export default Layout
