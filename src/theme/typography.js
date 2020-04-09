import React from "react"
import { ThemeProvider } from "styled-components"
import githubTheme from "typography-theme-github"

const theme = toTheme(githubTheme)
export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
)
