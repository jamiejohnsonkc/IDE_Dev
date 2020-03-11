import React from "react"
import styled from "@emotion/styled"
import { typography } from "styled-system"

const Text = styled("div")({
  color: "blue", //emotion styled
})

Text.propTypes = {
  // bla: PropTypes.string,
}

Text.defaultProps = {
  // bla: 'test',
}

export default Text
