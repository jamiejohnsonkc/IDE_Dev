/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

const Drawer = ({ props, children }) => (
  <Flex
    sx={{
      flexGrow: "1",
      flexDirection: "column",
      height: "100%",
    }}
  >
    {children}
  </Flex>
)

Drawer.propTypes = {
  // bla: PropTypes.string,
}

Drawer.defaultProps = {
  // bla: 'test',
}

export default Drawer
