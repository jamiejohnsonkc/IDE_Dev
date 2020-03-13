import React from "react"
//import { Button, T0, T1, T2, T3, T4, T5 } from "./"
import { Styled } from "theme-ui"
import Text from "./"
import gatsbyPluginThemeUi from "../../../gatsby-plugin-theme-ui"

export default {
  title: "Text",
}

// const Test = Styled(gatsbyPluginThemeUi.styles.d1)`
//   color: red;
// `
export const standard = () => (
  <div>
    <Text>Testy Text Text</Text>
    <Styled.h1>New Test Text?</Styled.h1>
  </div>
)

/* export const standard = props => (
  <div>
    <Button>This is the button</Button>
    <h1>This is the h1 header</h1>
    <h2>This is the h2 header</h2>
    <h3>This is the h3 header</h3>
    <h4>This is the h4 header</h4>
    <h5>This is the h5 header</h5>
    <h6>This is the h6 header</h6>
  </div>
) */
