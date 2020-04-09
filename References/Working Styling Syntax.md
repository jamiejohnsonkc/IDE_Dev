# Working

## Emotion styling + objects

```javascript
//extending existing component + use of object styles

import styled from "@emotion/styled"

const Newcontainer = styled(Container)(
  {
    height: "50px",
  },
)

const Slate = props => (
  <Newcontainer>
    <Flex>
      <Box>
        <BlankBg/>
      </Box>
    </Flex>
  </Newcontainer>
)
```

## Pure Emotion with Styled

```javascript
import styled from "@emotion/styled"

const EmotionTest = styled.div`
  height: 50px;
  background: red;
`

const Slate = props => (
  <Container>
    <Flex>
      <EmotionTest>EmotionTest</EmotionTest>
      <Box>props.children</Box>
    </Flex>
  </Container>
)
```