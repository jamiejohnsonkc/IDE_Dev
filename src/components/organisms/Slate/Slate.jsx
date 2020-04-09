import React from "react"
import { Container, Flex, Box } from "theme-ui"
import PropTypes from "prop-types"
import { layout, flex } from "styled-system"
import styled from "@emotion/styled"

const Newcontainer = styled(Container)(
  backgroundColor: red;
)

const Slate = props => (
  <Newcontainer>
    <Flex>
      <Box>Test</Box>
    </Flex>
  </Newcontainer>
)

Slate.propTypes = {
  // bla: PropTypes.string,
}

Slate.defaultProps = {
  // bla: 'test',
}

export default Slate
