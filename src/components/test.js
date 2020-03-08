import React from "react"
import { Styled } from "theme-ui"
import "../gatsby-plugin-theme-ui"
import styled from "@emotion/styled"
import gatsbyPluginThemeUi from "../gatsby-plugin-theme-ui"
import { Container } from "theme-ui"

const TestColor = {
  item1: "yellow",
  item2: "orange",
}

const Emotionstyled = styled.div`
  color: blue;
`

const ThemeUIStyled = styled.div`
  background: ${gatsbyPluginThemeUi.colors.background};
`

const InFileStyle = styled.div`
  color: ${TestColor.item2};
`

const Test = () => (
  <div>
    <Container p={4} bg="muted">
      Imported Centered container component from Theme-ui
      <ThemeUIStyled>
        <Emotionstyled>
          {/*inline styled from theme-ui*/}
          <Styled.h1>
            Everything in this block is from the "Test" component
          </Styled.h1>
          <InFileStyle>This is 'infilestyle'</InFileStyle>
        </Emotionstyled>
      </ThemeUIStyled>
    </Container>
  </div>
)
export default Test
