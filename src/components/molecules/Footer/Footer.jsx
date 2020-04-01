/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
//import { Test } from './Footer.styles';

const Footer = props => (
  <footer
    {...props}
    sx={{
      bg: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <div
      sx={{
        color: "white",
      }}
    >
      test footer
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
