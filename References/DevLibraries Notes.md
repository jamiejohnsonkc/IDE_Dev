# Notes on Libraries & Related Interests

## ThemeUI

(Seems to be) built to compliment Mdx-driven development (as with Gatsby).

What's Good:

- Typography (if better than styled-system)
- Prism/hi-lighting (if needed)
- sx/jsx pragma for tricky styling (if needed)

## Styled-System

Keeping the little things consistent.

### How it works/Synopsis

Most CSS-in-JS libraries accept functions as arguments to create dynamic styles based on props. For example, the following sets color dynamically in styled-components based on the color prop:

```javascript
import styled from 'styled-components'

const Box = styled.div`
  color: ${props => props.color};

```

Beyond just passing a dynamic value, an entire style declaration can be returned in functions like this.

```javascript
import styled from 'styled-components'

const getColor = props => `color: ${props.color};`

const Box = styled.div`
  ${getColor}
```

Style object can also be returned, which is a much simpler way to handle dynamic values in JavaScript

```javascript
import styled from 'styled-components'

// works exactly the same as the previous function
const getColor = props => ({
  color: props.color,
})

const Box = styled.div`
  ${getColor}
```

By using style objects instead of embedded CSS strings, Styled System is compatible with a wide range of CSS-in-JS libraries.

The core utilities in Styled System are built on this pattern and consist of functions that take props as an argument and return style objects, while making it simpler to use values from a theme and apply styles responsively across breakpoints.

These style functions can be written on a one-off basis, but Styled System is meant to help reduce boilerplate, ensure a consistent styling API, and speed the development of component-based design systems.

### What's Good

- variants
- space (margins & padding)
- size (consistent widths & heights)
- Grid layout
- background
- border
- responsive
- position
- shadow
- variants (more flexible than theme-ui)
- can used styled-components or emotion

### Questions about

- How far does it color prop extend: should I use theme-ui color objects instead
- Is it's typography prop the same/similar to theme ui?

### Observations

- flex prop appears to be the same iteration as theme-ui
- appears to employ the same jsx pragma; difference being that it supports pure css where theme-ui supported all theme style-objects (at least I think that's it)
