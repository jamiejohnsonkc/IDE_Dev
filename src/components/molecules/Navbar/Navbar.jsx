import React from "react"
import { Box, Flex, Link, Text } from "rebass"

const Navbar = ({ image, title, description }) => (
  <Flex px={2} color="white" bg="black" alignItems="center">
    <Text p={2} fontWeight="bold">
      Rebass
    </Text>
    <Box mx="auto" />
    <Link variant="nav" href="/">
      Profile
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
