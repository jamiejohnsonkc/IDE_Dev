/** @jsx jsx */

import { jsx } from "theme-ui"
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { Box, Flex } from "theme-ui"

const NavBar = props => (
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
          sx={{
            variant: "navBar.vertical.box",
          }}
        >
          <Flex
            as="ul"
            sx={{
              variant: "navBar.vertical.ul",
            }}
          >
            {data.site.siteMetadata.menuLinks.map(link => (
              <li
                key={link.name}
                sx={{
                  variant: "navBar.vertical.li",
                }}
              >
                <Link to={link.link} sx={{ variant: "navBar.vertical.link" }}>
                  {link.name}
                </Link>
              </li>
            ))}
          </Flex>
        </Box>
      </React.Fragment>
    )}
  />
)

export default NavBar
