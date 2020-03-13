import React from "react"
import { Box, Flex, Text } from "rebass"
import NavLink from "../../molecules/NavLink"
import { Link } from "theme-ui"
import Icon from "../../atoms/Icon"
import styled from "@emotion/styled"

const IconMargin = styled(Icon)`
  background: black;
  width: 3rem;
  fill: white;
  margin: 2rem 2rem;
  &:hover {
    fill: blue;
  }
`

const Navbar = ({ image, title, description }) => (
  <Flex px={2} color="white" bg="black" alignItems="center">
    <Link href="/">
      <IconMargin name="Jimglyph" />
    </Link>
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
