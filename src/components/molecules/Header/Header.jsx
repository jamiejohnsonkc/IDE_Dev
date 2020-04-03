/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import NavMenu from "../../navigation/NavMenu"
import Logo from "../../atoms/Logo"
import { StaticQuery, graphql } from "gatsby"

const Header = ({ props }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header
        {...props}
        sx={{
          bg: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* <h1>{data.site.siteMetadata.title}</h1> */}
        <Logo />
        <NavMenu />
      </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
