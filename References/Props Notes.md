# Props Reference

## Styling with Functional Props in React (w/o styled-components or emotion)

### Defining props in style objects

```jsx
const TestTheme = {
  colors: {
    me: "#c6fcb3",
  },
}
```

### Setting props in the child component

```jsx
<Foo color={props.color} />
```

### Calling props in the parent component

```jsx
<Foo color={TestTheme.colors.me} />
```

## Styling via Styled-System

```javascript
// example
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Card = styled.div(
  {
    borderRadius: '2px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.125)',
  },
  space,
  color
)

Card.defaultProps = {
  p: 2,
  bg: 'white',
}

export default Card
```


## Styling via emotion

```javascript
const Button = styled.button`
  font-size: 1em;
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`

const theme = {
  main: "mediumseagreen",
}
render(
  <div>
    <Button theme={{ main: "royalblue" }}>Ad hoc theme</Button>
    <ThemeProvider theme={theme}>
      <div>
        <Button>Themed</Button>
        <Button theme={{ main: "darkorange" }}>Overidden</Button>
      </div>
    </ThemeProvider>
  </div>
)
```

## Styling via jsx/sx

```jsx
const Header = ({ props }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header
        {...props}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: theme => `${theme.header.justifyContent}`,
          backgroundColor: theme => `${theme.header.backgroundColor}`,
        }}
      >
        {/* <h1>{data.site.siteMetadata.title}</h1> */}
        <Navbar />
      </header>
    )}
  />
)
```
