/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Navbar from "../../molecules/Navbar"
import Logo from "../../atoms/Logo"

const Header = props => (
  <header
    {...props}
    sx={{
      bg: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
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
