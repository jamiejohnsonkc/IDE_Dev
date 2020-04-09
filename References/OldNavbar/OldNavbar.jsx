/** @jsx jsx */
import React from "react"
import { Box, Flex, jsx, NavLink } from "theme-ui"
import { Link } from "@reach/router"

const Navbar = ({ image, title, description }) => (
  <Flex as="nav" px={2} alignItems="center">
    <Box mx="auto" />
    <NavLink>
      <Link
        to="/"
        sx={{
          variant: "links.mainNav",
        }}
      >
        services
      </Link>
    </NavLink>
    <NavLink>
      <Link
        to="/"
        sx={{
          variant: "links.mainNav",
        }}
      >
        insights
      </Link>
    </NavLink>
    <NavLink>
      <Link
        to="/"
        sx={{
          variant: "links.mainNav",
        }}
      >
        profile
      </Link>
    </NavLink>
  </Flex>
)

Navbar.propTypes = {
  // bla: PropTypes.string,
}

Navbar.defaultProps = {
  // bla: 'test',
}

export default Navbar
