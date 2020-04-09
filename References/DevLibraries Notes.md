# Notes on Libraries & Related Interests

## ThemeUI

(Seems to be) built to compliment Mdx-driven development (as with Gatsby).

What's Good:

- Typography (if better than styled-system)
- Prism/hi-lighting (if needed)
- sx/jsx pragma for tricky styling (if needed)
- basic style components

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

### Questions

- How far does it color prop extend: should I use theme-ui color objects instead
- Is it's typography prop the same/similar to theme ui?

### Observations

- flex prop appears to be the same iteration as theme-ui
- appears to employ the same jsx pragma; difference being that it supports pure css where theme-ui supported all theme style-objects (at least I think that's it)

## Typography.js

Configuration via typography.js under gatsby-theme-ui-plugin

When creating a new instance of Typography, you can pass in an configuration object. All configuration keys are optional.

- **_title:_** The theme title.
- **_baseFontSize:_** The base font size in pixels, defaults to 16px.
- **_baseLineHeight:_** The base line height using the css unitless number, defaults to 1.5.
- **_scaleRatio:_** The “scale ratio” for the theme. This value is the ratio between the h1 font size and the baseFontSize. So if the scale ratio is 2 and the baseFontSize is 16px then the h1 font size is 32px.

```javascript
{
  scaleRatio: 2,
}
```

- **_headerFontFamily:_** An array of strings specifying the font family stack for headers e.g. ['Helvetica', 'sans-serif']. Defaults to a system UI font stack.
- **_bodyFontFamily:_** An array of strings specifying the font family stack for the body, defaults to ['georgia', 'serif'].
- **_headerGray:_** The “lightness” value for headers (set in hsl). Defaults to 20.
- **_headerGrayHue:_** The “hue” value for headers (set in hsl). Defaults to 0. Also accepts three named hues, cool, slate, and warm.
- **_bodyGray:_** The “lightness” value for body text (in hsl). Defaults to 20.
- **_bodyGrayHue:_** The “hue” value for body text (in hsl). Defaults to 0. Also accepts three named hues, cool, slate, and warm.
- **_headerWeight:_** Specify the font weight for headers. Defaults to bold.
- **_bodyWeight:_** Specify the font weight for body text. Defaults to normal.
- **_boldWeight:_** Specify the font weight for “bold” (b, strong, dt, th) elements. Defaults to bold.
- **_blockMarginBottom:_** Specify the default margin-bottom for block elements. Defaults to one “rhythm unit” (i.e. the height of the base line height).
- **_includeNormalize:_** Include normalize.css. Normalize.css is an excellent project which works to normalize the base browser CSS across browsers and serves as an excellent foundation for Typography.js. We include normalize.CSS by default but if you’re already including it elsewhere in your project, you can disable including it here by passing false.
- **_overrideStyles:_** Imperative API for directly adding to or overriding auto-generated styles. It’s called with a Vertical Rhythm object, the options object, and the algorithmically generated styles.

```javascript
overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  h1: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  blockquote: {
    ...adjustFontSizeTo('19px'),
    color: gray(41),
    fontStyle: 'italic',
    paddingLeft: rhythm(13/16),
    marginLeft: rhythm(-1),
    borderLeft: `${rhythm(3/16)} solid ${gray(10)}`,
  },
  'blockquote > :last-child': {
    marginBottom: 0,
  },
})
```

- **_overrideThemeStyles:_** This has the same function signature as overrideStyles but should be used in place of overrideStyles when using a 3rd-party theme so as to not delete the theme’s own overrideStyles function.

```javascript
overrideThemeStyles: ({ rhythm }, options, styles) => ({
  'h2,h3': {
    marginBottom: rhythm(1/2),
    marginTop: rhythm(2),
  }
})
```
