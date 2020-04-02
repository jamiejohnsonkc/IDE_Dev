/** @jsx jsx */
import React from "react"
import { Flex, jsx } from "theme-ui"
import PropTypes from "prop-types"
import Drawer from "../../molecules/Drawer"
import { Link } from "@reach/router"

//import { Test } from './NavDrawer.styles';

const NavDrawer = props => (
  <Drawer>
    <Flex
      sx={{
        height: "100%",
        flexDirection: "column",
        bg: "accent",
        flexGrow: "1",
      }}
    >
      <Link
        to="/"
        sx={{
          variant: "links.drawerNav",
        }}
      >
        TestLink
      </Link>
    </Flex>
  </Drawer>
)

NavDrawer.propTypes = {
  // bla: PropTypes.string,
}

NavDrawer.defaultProps = {
  // bla: 'test',
}

export default NavDrawer
