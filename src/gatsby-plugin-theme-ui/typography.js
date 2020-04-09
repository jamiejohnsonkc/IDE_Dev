import React from "react"
import { ThemeProvider } from "theme-ui"
import { toTheme } from "@theme-ui/typography"
import githubTheme from "typography-theme-github"

const theme = toTheme(githubTheme)
export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
)
