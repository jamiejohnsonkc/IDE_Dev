import React from "react"
import { ThemeProvider } from "theme-ui"
import theme from "../src/gatsby-plugin-theme-ui"

const ThemeWrapper = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeWrapper
