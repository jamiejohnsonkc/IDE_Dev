/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Navbar from "../../molecules/Navbar"
import Logo from "../../molecules/Logo"

const Header = (props) => (
  <header>
    <Logo />
    <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
