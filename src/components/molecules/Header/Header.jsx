/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import NavBar from "../../navigation/NavBar"
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
          display: "flex",
          alignItems: "center",
          justifyContent: theme => `${theme.header.justifyContent}`,
          backgroundColor: theme => `${theme.header.backgroundColor}`,
        }}
      >
        {/* <h1>{data.site.siteMetadata.title}</h1> */}
        <Logo />
        <NavBar />
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
