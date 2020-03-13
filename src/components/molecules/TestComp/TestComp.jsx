import React from "react"
import { Styled } from "theme-ui"
import "../../../gatsby-plugin-theme-ui"
import styled from "@emotion/styled"

import { Container } from "theme-ui"

const TestColor = {
  item1: "yellow",
  item2: "orange",
}

const Emotionstyled = styled.div`
  color: blue;
`

{
  /*
const GatsbyThemeUIStyled = styled.div`
  background: ${gatsbyPluginThemeUi.colors.accent};
`
*/
}

const InFileStyle = styled.div`
  color: ${TestColor.item2};
`

const Test = () => (
  <div>
    <Container p={4} bg="muted">
      Imported Centered container component from Theme-ui
      <Emotionstyled>
        {/*inline styled from theme-ui*/}
        <h1>Everything in this block is from the "Test" component</h1>
        <Styled.h1>This line is styled with Theme-Ui (Style.h1)</Styled.h1>
        <InFileStyle>This is 'infilestyle'</InFileStyle>
      </Emotionstyled>
    </Container>
  </div>
)
export default Test
