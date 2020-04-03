import React from "react"
import { StaticQuery, graphql, Helmet, Link } from "gatsby"
import NavMenu from "../NavMenu"
import PropTypes from "prop-types"

const NavItems = ({ children }) => (
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
        <NavMenu menuLinks={data.site.siteMetadata.menuLinks} />
        <div>{children}</div>
      </React.Fragment>
    )}
  />
)

export default NavItems
