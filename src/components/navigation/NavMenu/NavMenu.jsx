/** @jsx jsx */

import { jsx } from "theme-ui"
import React from "react"
import { StaticQuery, graphql, Helmet, Link } from "gatsby"
import NavItem from "../NavItem"
import PropTypes from "prop-types"
import { Box, NavLink, Flex } from "theme-ui"

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
          sx={{
            variant: "navMenu.horizontal.box",
          }}
        >
          <Flex
            as="ul"
            sx={{
              variant: "navMenu.horizontal.ul",
            }}
          >
            {data.site.siteMetadata.menuLinks.map(link => (
              <li
                key={link.name}
                sx={{
                  variant: "navMenu.horizontal.li",
                }}
              >
                <Link
                  to={link.link}
                  sx={{ variant: "navMenu.horizontal.link" }}
                >
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

export default NavMenu
