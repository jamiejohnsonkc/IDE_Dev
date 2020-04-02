/** @jsx jsx */
import React from "react"
import { Box, Flex, jsx } from "theme-ui"
import { Link } from "@reach/router"

const Navbar = ({ image, title, description }) => (
  <Flex px={2} alignItems="center">
    <Box mx="auto" />
    <Link
      to="/"
      sx={{
        variant: "links.mainNav",
      }}
    >
      services
    </Link>
    <Link
      to="/"
      sx={{
        variant: "links.mainNav",
      }}
    >
      insights
    </Link>
    <Link
      to="/"
      sx={{
        variant: "links.mainNav",
      }}
    >
      profile
    </Link>
  </Flex>
)

Navbar.propTypes = {
  // bla: PropTypes.string,
}

Navbar.defaultProps = {
  // bla: 'test',
}

export default Navbar
