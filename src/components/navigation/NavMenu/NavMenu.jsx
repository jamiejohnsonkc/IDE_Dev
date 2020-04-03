import React from "react"
import { StaticQuery, graphql, Helmet, Link } from "gatsby"
import NavItem from "../NavItem"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const NavMenu = () => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Box
          as="nav"
          style={{
            padding: "1.45rem 1.0875rem",
            justifyItems: "space-between",
            alignItems: "center",
          }}
        >
          <NavItem menuLinks={data.site.siteMetadata.menuLinks} />
        </Box>
      </React.Fragment>
    )}
  />
)

export default NavMenu
