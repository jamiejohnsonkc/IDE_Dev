import React from "react"
import { Box, Flex } from "rebass"
import NavLink from "../../molecules/NavLink"

const Navbar = ({ image, title, description }) => (
  <Flex px={2} color="white" bg="black" alignItems="center">
    <Box mx="auto" />
    <NavLink variant="nav" href="/">
      services
    </NavLink>
    <NavLink variant="nav" href="/">
      insights
    </NavLink>
    <NavLink variant="nav" href="/">
      profile
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
