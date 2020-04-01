/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Box, Flex } from "theme-ui"
import PropTypes from "prop-types"
//import { Test } from './Drawer.styles';

const Drawer = ({ props, children }) => (
  <Flex
    sx={{
      flexGrow: 1,
      flexDirection: "column",
    }}
  >
    <Box>{children}</Box>
  </Flex>
)

Drawer.propTypes = {
  // bla: PropTypes.string,
}

Drawer.defaultProps = {
  // bla: 'test',
}

export default Drawer
