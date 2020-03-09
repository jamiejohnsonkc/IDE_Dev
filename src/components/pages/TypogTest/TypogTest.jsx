import React from "react"
import PropTypes from "prop-types"
import ThemeProvider from "theme-ui"
import theme from "../../../gatsby-plugin-theme-ui/typography"
//import { Test } from './TypogTest.styles';

const TypogTest = props => (
  <ThemeProvider theme={theme}>
    <div className="TypogTestWrapper">Test content</div>
  </ThemeProvider>
)

TypogTest.propTypes = {
  // bla: PropTypes.string,
}

TypogTest.defaultProps = {
  // bla: 'test',
}

export default TypogTest
