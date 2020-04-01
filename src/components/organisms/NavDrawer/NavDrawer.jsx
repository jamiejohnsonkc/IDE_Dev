import React from "react"
import PropTypes from "prop-types"
import Drawer from "../../molecules/Drawer"
//import { Test } from './NavDrawer.styles';

const NavDrawer = props => (
  <Drawer>
    <Flex>Test Drawer</Flex>
  </Drawer>
)

NavDrawer.propTypes = {
  // bla: PropTypes.string,
}

NavDrawer.defaultProps = {
  // bla: 'test',
}

export default NavDrawer
