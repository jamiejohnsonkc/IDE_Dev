/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui"
import { TypeScale, TypeStyle, space } from "@theme-ui/style-guide"

const Row = props => (
  <div
    {...props}
    sx={{
      display: "flex",
      alignItems: "baseline",
      flexWrap: "wrap",
      "& > div": {
        px: 3,
      },
    }}
  />
)

export default props => {
  const { theme } = useThemeUI()
  const { fonts, fontWeights, lineHeights } = theme

  return (
    <section id="typography">
      <Styled.h2>Typography</Styled.h2>
      {fonts && (
        <div>
          <Styled.h3>Font Families</Styled.h3>
          <Row my={3}>
            {Object.keys(fonts).map(name => (
              <div key={name}>
                <TypeStyle fontFamily={name} fontSize={4}>
                  AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890
                </TypeStyle>
                <Styled.code title={fonts[name]}>{name}</Styled.code>
              </div>
            ))}
          </Row>
        </div>
      )}
      <Styled.h3>Presets</Styled.h3>
      <div>
        <Row>
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
          <h4>h4</h4>
          <h5>h5</h5>
          <h6>h6</h6>
        </Row>
      </div>
      <Styled.h3>Font Sizes</Styled.h3>
      <TypeScale />
      {fontWeights && (
        <div>
          <Styled.h3>Font Weights</Styled.h3>
          <Row>
            {Object.keys(fontWeights).map(name => (
              <div key={name}>
                <TypeStyle fontSize={3} fontWeight={name}>
                  {fontWeights[name]}
                </TypeStyle>
                <Styled.code>{name}</Styled.code>
              </div>
            ))}
          </Row>
        </div>
      )}
      {lineHeights && (
        <div>
          <Styled.h3>Line Heights</Styled.h3>
          <Row>
            {Object.keys(lineHeights).map(name => (
              <div key={name}>
                <TypeStyle fontSize={6} lineHeight={name}>
                  {lineHeights[name]}
                </TypeStyle>
                <Styled.code>{name}</Styled.code>
              </div>
            ))}
          </Row>
        </div>
      )}
    </section>
  )
}
