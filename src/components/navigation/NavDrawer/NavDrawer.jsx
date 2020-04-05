/** @jsx jsx */
import React from "react"
import { Flex, jsx, NavLink } from "theme-ui"
import PropTypes from "prop-types"
import Drawer from "../../molecules/Drawer"
import Navbar from "../Navbar"
//import { Test } from './NavDrawer.styles';

const NavDrawer = props => (
  <Drawer
    sx={{
      backgroundColor: "blue",
    }}
  >
    <Navbar />
  </Drawer>
)

NavDrawer.propTypes = {
  // bla: PropTypes.string,
}

NavDrawer.defaultProps = {
  // bla: 'test',
}

export default NavDrawer
