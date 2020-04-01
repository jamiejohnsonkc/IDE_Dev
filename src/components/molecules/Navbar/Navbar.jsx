import React from "react"
import { Box, Flex } from "rebass"
import { Link } from "theme-ui"

const Navbar = ({ image, title, description }) => (
  <Flex px={2} color="white" bg="black" alignItems="center">
    <Box mx="auto" />
    <Link variant="MainNav" href="/">
      services
    </Link>
    <Link variant="MainNav" href="/">
      insights
    </Link>
    <Link variant="MainNav" href="/">
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
