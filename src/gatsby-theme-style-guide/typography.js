/** @jsx jsx */
import { jsx, Styled, Flex, Box, useThemeUI, space } from "theme-ui"
import { TypeScale, TypeStyle } from "@theme-ui/style-guide"
import Navbar from "../components/navigation/NavDrawer"

const Row = props => (
  <div
    {...props}
    sx={{
      display: "flex",
      alignItems: "baseline",
      flexWrap: "wrap",
      marginY: "3",
      width: "100%",
      "& > div": {
        px: 3,
      },
    }}
  />
)

const SectionHead = props => (
  <Styled.h3
    {...props}
    sx={{
      width: "100%",
    }}
  />
)

export default props => {
  const { theme } = useThemeUI()
  const { fonts, fontWeights, lineHeights } = theme

  return (
    <section id="typography">
      {fonts && (
        <div>
          <Row>
            <Styled.h3>Font Families</Styled.h3>

            <Flex>
              {Object.keys(fonts).map(name => (
                <Box
                  sx={{
                    flex: "1 1 auto",
                    px: "2",
                    py: "3",
                    mx: "1",
                    bg: "muted",
                  }}
                >
                  <div key={name}>
                    <TypeStyle fontFamily={name} fontSize={3}>
                      <div style={{ whiteSpace: "normal" }}>
                        AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890
                      </div>
                    </TypeStyle>
                    <Styled.code title={fonts[name]}>{name}</Styled.code>
                  </div>
                </Box>
              ))}
            </Flex>
          </Row>
        </div>
      )}
      <Row>
        <Box>
          <Styled.h3>Headers</Styled.h3>
          <h1>This is the h1 header element</h1>
          <h2>This is the h2 header element</h2>
          <h3>This is the h3 header element</h3>
          <h4>This is the h4 header element</h4>
          <h5>This is the h5 header element</h5>
          <h6>This is the h6 header element</h6>
        </Box>
      </Row>
      <Row>
        <Box sx={{ flex: "1 1 auto" }}>
          <Styled.h3>Unordered List</Styled.h3>
          <ul>
            <li>Et velit dolore</li>
            <li>Do labore commodo pro aliqua</li>
            <li>Dolor excepteur incididunt</li>
          </ul>
          <Styled.h3>Ordered List</Styled.h3>
          <ol>
            <li>Magna duis duis fugiat culpa </li>
            <li>Magna laboris minim in irure</li>
            <li>
              Ullamco aliqua aute reprehenderit aliquip elit sit excepteur eu.
            </li>
          </ol>
        </Box>
        <Box sx={{ flex: "1 1 auto" }}>
          <Styled.h3>Description List</Styled.h3>
          <dl>
            <dt>Magna</dt>
            <dd>
              Tempor aliqua nulla nulla amet velit commodo laborum elit aute
              consequat est aliqua esse ipsum.
            </dd>
            <dt>Fugaiat</dt>
            <dd>Ut est proident officia pariatur laborum esse.</dd>
          </dl>
        </Box>
      </Row>
      <Row>
        <Box>
          <Styled.h3>Paragraphs</Styled.h3>

          <p>
            Eu ut anim tempor dolor. Fugiat tempor ipsum irure ipsum consectetur
            do enim esse sit magna. Adipisicing ea ut est aute ea culpa mollit
            aute magna velit veniam.
          </p>
          <p>
            Exercitation sunt ad anim do nulla amet veniam do laborum. Pariatur
            ad magna sit enim laborum in. Mollit veniam aliqua cupidatat ut est.
            Laborum aliquip mollit aliqua amet aute qui ex eiusmod fugiat.
          </p>
        </Box>
      </Row>
      <Row>
        <Box>
          <Styled.h3>Figure</Styled.h3>
          <figure>figure</figure>
          <Styled.h3>Parsed Code</Styled.h3>
          <pre>
            <code>someday code will go here</code>
          </pre>
          <Styled.h3>Table</Styled.h3>
          <table style={{ width: "61%" }}>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
              <td>94</td>
            </tr>
          </table>
          <Styled.h3>Block Quote</Styled.h3>
          <blockquote>
            Cupidatat aute proident qui dolore nisi aliquip. In exercitation
            aliqua do ad velit qui anim ea elit aute. Mollit cillum id eiusmod
            aliquip et sunt sint officia voluptate nulla sit adipisicing.
            Occaecat culpa nisi commodo officia sit adipisicing sint quis
            proident amet exercitation non adipisicing est. Duis ex elit
            incididunt aute anim consectetur adipisicing duis commodo officia
            irure est incididunt ea.
          </blockquote>
          <form>form </form>
          <address>address</address>
        </Box>
      </Row>
      {/*  <Row>
        <Box>
          <Styled.h3>Font Sizes</Styled.h3>
          <TypeScale />
        </Box>
      </Row> */}

      {fontWeights && (
        <div>
          <Row>
            <Box>
              <Styled.h3>Font Weights</Styled.h3>
              {Object.keys(fontWeights).map(name => (
                <div key={name}>
                  <TypeStyle fontSize={6} fontWeight={name}>
                    {fontWeights[name]}
                  </TypeStyle>
                  <Styled.code>{name}</Styled.code>
                </div>
              ))}
            </Box>
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
      <div>
        <Row>
          <Box>
            <Styled.h3>Font Sizes</Styled.h3>
            <TypeScale />
          </Box>
        </Row>
      </div>
      <div>
        <Row>
          <Box style={{ width: "100%", padding: "0" }}>
            <Styled.h3>Navbar</Styled.h3>
            <Navbar />
          </Box>
        </Row>
      </div>
    </section>
  )
}
