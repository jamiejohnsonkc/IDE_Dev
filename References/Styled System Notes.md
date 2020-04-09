# Styled System Notes



## Quick Example

```javascript
import styled from 'styled-components' //or "@emotion/styled
import { space, color, layout } from 'styled-system'

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  color,
  layout
)

export default Box
```

## Props List

## Spacing

There are many ways to approach spacing (margin and padding) in a web application, and Styled System is intended to work at a low enough level to support several of these depending on your team's preferences.

If you're not familiar with Styled System's space utility, you might want to read the Getting Started documentation first.
Where does space belong?

Generally speaking, it's a good idea to avoid adding default margins to reusable components in React. Some people prefer to use a declarative approach by adding a "spacer" component in between other components. This is the spacer.gif of React, and it's a completely acceptable practice, despite what some people may say.

Others prefer creating wrapper layout components that apply spacing to child components. This is also an acceptable approach, but requires an additional layer of abstraction and creates a larger API surface area for your component library. This approach will also be less familiar to people new to React.

The third common way, and the way that Styled System's API encourages you to approach this is through spacing props.

All three approaches are valid, and all three can be used together with Styled System helping ensure that the values used for spacing are consistent across your entire application.

### Spacer Component

One of the simpler approaches comes from the early days of the web, and is a really great way to add space to UI.

To create a spacer component with Styled System, you can either reuse a Box component or create a specialized component for this purpose.

```javascript
// example Spacer component
import styled from 'styled-components'
import { space } from 'styled-system'

const Spacer = styled.div(space)
```

To use the Spacer component, render it without any children and use the margin props.

```javascript
// example Spacer usage
<Header />
<Spacer mb={4} />
<Section />
```

The Spacer component is also really great for flexbox layouts, where margin: auto will fill any remaining space.

```javascript
// example Spacer in flexbox
<Flex>
  <Logo />
  <Spacer m="auto" />
  <Link>Beep</Link>
  <Link>Boop</Link>
</Flex>
```

### Wrapper Component

Some people use a wrapping parent component to control spacing on child components. This is exactly what Rebass Space does and can be useful for tiled layouts or grid systems.

To target child elements you can either use the React.Children API to map over child elements, or use child CSS selectors. The use of child CSS selectors can lead to styling bugs and isn't generally recommended.

```javascript
// example using child CSS selectors
import styled from 'styled-components'
import { space } from 'styled-system'

const SpaceChildren = styled.div`
  & > * {
    ${space}
  }
```

The following example comes from Rebass Space. This approach does not create a wrapping element and does not rely on child CSS selectors.

```javascript
import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const classnames = (...args) => args.join(' ')
const getClassName = el => (el.props && el.props.className) || ''

export const StyledChildren = ({ className, children, ...props }) => {
  const styledChildren = React.Children.toArray(children).map(child =>
    React.cloneElement(child, {
      className: classnames(getClassName(child), className),
    })
  )
  return <>{styledChildren}</>
}

const SpaceChildren = styled(StyledChildren)(space)

SpaceChildren.propTypes = space.propTypes

export default SpaceChildren
```

### Space Props

While the above approaches work perfectly fine, it can be useful to control margin and padding on a per-element basis. This is where Styled System's space utility really shines. It lets you add margin and padding props to any component, whether it's a Box layout component, a heading, or a button. By including the space props in your components, you can quickly make one-off adjustments and adapt to changing requirements.

The space utility can be added to any component that accepts the className prop.

```javascript
// example
import styled from 'styled-component'
import { space } from 'styled-system'

const Heading = styled.h2(space)
```

When using the component, you can adjust margin and padding in any direction needed.

```javascript
// example usage
<Heading mt={0} mb={4} pl={0}>
  Hello
</Heading>
```

While the space utility is a perfect choice for most cases, it can be useful to add only margin or padding props to a component. To handle those cases, Styled System provides subsets of the space utility: padding and margin utilities.

The padding utility adds only padding props to a component and the margin utility adds only margin props. Usage of the utilities are the same as the usage of space utility

```javascript
// margin utility example
import styled from 'styled-component'
import { margin } from 'styled-system'

const Paragraph = styled.p(margin)
```

When using the component, you can adjust margin, but not padding:


```javascript
// example usage
<Paragraph mt={0} mb={4}>
  I have only margin props available
</Paragraph>
```

## Extending A Styled Component *(styled components or Emotion)*

Two Methods:

1. Creating an extended style component
2. Using the css prop

### Extending with styled

An alternative to using the css prop is to create a completely new styled component using the styled HOC. You can create these components anywhere, but it's common to colocate these in the same module that they're used in.

```javascript
import React from 'react'
import styled from 'styled-components'
import Box from './Box'

// extended Box component
const Card = styled(Box)({
  borderRadius: '4',
  border: '1px solid #f6f6f6',
  boxShadow: '0 2px 4px rgba(0, 0, 0, .125)',
})

//code for the component using the extended component would follow
```

### CSS prop

The css prop is a very popular way to handle one-off styles. If your Box component needs a small style change you can make it inline or create an extended component for reuse.

To use the css prop, you'll need to make sure you have either babel-plugin-styled-components installed, or a Babel plugin or custom JSX pragma configured for Emotion.

```javascript
export default props => (
  <Box
    p={2}
    css={{
      borderBottom: '2px solid',
    }}
  >
    This Box is using the css prop inline
  </Box>
)
```

To use the css prop to extend the Box component for reuse, you can do something like the following:

```javascript
// extended Box component example
import React from 'react'

export default ({ large, ...props }) => (
  <Box
    {...props}
    p={large ? 4 : 2}
    css={{
      borderRadius: '4',
      border: '1px solid #f6f6f6',
      boxShadow: '0 2px 4px rgba(0, 0, 0, .125)',
    }}
  />
)
```

## Default Values

A question that comes up quite often is how do you define defaults for Styled System props. Luckily, React has a built-in way to set defaults for props with the defaultProps object.

Let's say you have a Card component that nine times out of ten, has a specific padding, but every once in a while, you need to change it up. To add a default value for any Styled System prop, use defaultProps on your component.

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

With the default props above, your Card component will have padding and a white background by default. You can override these styles when needed by passing a prop to the component.


```javascript
// example overriding default styles
<Card p={3} bg="lightgray">
  <Image />
  <Text />
</Card>
```

## Responsive Markup

```javascript
// example usage
<Box width={[1, 1 / 2]} p={4} mb={3} bg="tomato">
  This is a tomato box, with responsive width, some padding, and margin bottom
</Box>
```

## Variants

Use the variant API to apply complex styles to a component based on a single prop. This can be a handy way to support slight stylistic variations in button or typography components.

Import the variant function and pass variant style objects in your component definition. When defining variants inline, you can use Styled System like syntax to pick up values from your theme.

>Note: Inline variants is a new feature in v5.1.0, which uses @styled-system/css.

```javascript
// example Button with variants
import styled from 'styled-components'
import { variant } from 'styled-system'

const Button = styled('button')(
  {
    appearance: 'none',
    fontFamily: 'inherit',
  },
  variant({
    variants: {
      primary: {
        color: 'white',
        bg: 'primary',
      },
      secondary: {
        color: 'white',
        bg: 'secondary',
      },
    }
  })
)
```

The Button component can now use the variant prop to change between a primary and secondary style.

```javascript
<Button variant='primary'>Primary</Button>
<Button variant='secondary'>Secondary</Button>
```

## Custom Prop Name

If you'd like to use a custom prop name other than variant, use the prop option.


```javascript
const Text = styled('div')(
  variant({
    prop: 'size',
    variants: {
      big: {
        fontSize: 4,
        lineHeight: 'heading',
      },
      small: {
        fontSize: 1,
        lineHeight: 'body',
      },
    }
  })
)

// <Text size='big' />
```

## Themeable Variants

If you'd like to enable theming of variants from the global theme object, use the scale option to define the theme key to use for variants.

```javascript
const Button = styled('button')(
  variant({
    scale: 'buttons',
    variants: {
      primary: {
        color: 'white',
        bg: 'primary',
      },
      secondary: {
        color: 'white',
        bg: 'secondary',
      },
    },
  })
)
```

With the scale option above, the theme.buttons object can be used to overrided variants defined in the component.


```javascript
// example theme
export default {
  // base theme values...
  // custom button variants
  buttons: {
    primary: {
      color: 'white',
      bg: 'red',
    },
    secondary: {
      color: 'white',
      bg: 'tomato',
    },
  }
}
```

## Styled System Packages

The main styled-system package is composed of several other packages that can be installed and used on their own for special use-cases

| Package Name              | Exports                                        |
| ------------------------- | ---------------------------------------------- |
| @styled-system/core       | system, createParser, createStyleFunction, get |
| @styled-system/space      | space, margin, padding                         |
| @styled-system/color      | color                                          |
| @styled-system/layout     | layout                                         |
| @styled-system/typography | typography                                     |
| @styled-system/flexbox    | flexbox                                        |
| @styled-system/border     | border                                         |
| @styled-system/background | background                                     |
| @styled-system/position   | position                                       |
| @styled-system/grid       | grid                                           |
| @styled-system/shadow     | shadow                                         |
| @styled-system/variant    | variant, textStyle, buttonStyle, colorStyle    |

The Styled System ecosystem also includes these optional packages

| Package Name                       | Description                                                                       |
| ---------------------------------- | --------------------------------------------------------------------------------- |
| @styled-system/css                 | Styled System for the css prop                                                    |
| @styled-system/jsx                 | Custom JSX pragma for using Styled System with the css prop                       |
| @styled-system/should-forward-prop | Utility for filtering Styled System props with Emotion's shouldForwardProp option |
| @styled-system/prop-types          | Prop type definitions for components built with Styled System                     |
| @styled-system/theme-get           | Utility to safely access values from a theme                                      |
| @styled-system/edit                | Debugging components for live editing Styled System theme objects                 |
| @styled-system/props               | Utilities for working with Styled System Props                                    |

# Reference Table

Styled System is organized into categories of style props. Each function provides the following props and maps to scales defined in a theme

## Space

```javascript
import { space } from 'styled-system'
// or `import space from '@styled-system/space'`

<Box m={2}>
  Tomato
</Box>
```

| Prop              | CSS Property                   | Theme Field |
| ----------------- | ------------------------------ | ----------- |
| m, margin         | margin                         | space       |
| mt, marginTop     | margin-top                     | space       |
| mr, marginRight   | margin-right                   | space       |
| mb, marginBottom  | margin-bottom                  | space       |
| ml, marginLeft    | margin-left                    | space       |
| mx                | margin-left and margin-right   | space       |
| my                | margin-top and margin-bottom   | space       |
| p, padding        | padding                        | space       |
| pt, paddingTop    | padding-top                    | space       |
| pr, paddingRight  | padding-right                  | space       |
| pb, paddingBottom | padding-bottom                 | space       |
| pl, paddingLeft   | padding-left                   | space       |
| px                | padding-left and padding-right | space       |
| py                | padding-top and padding-bottom | space       |


## Color


```javascript
import { color } from 'styled-system'
// or `import color from '@styled-system/color'`

<Text color="white" bg="black">
  Header
</Text>
```

| Prop                | CSS Property     | Theme Field |
| ------------------- | ---------------- | ----------- |
| color               | color            | colors      |
| bg, backgroundColor | background-color | colors      |
| opacity             | opacity          | none        |


## Typography

```javascript
import { typography } from 'styled-system'
// or `import typography from '@styled-system/typography'`

<Header fontFamily="Helvetica" fontSize={2}>
  Hello!
</Header>
```
| Prop          | CSS Property   | Theme Field    |
| ------------- | -------------- | -------------- |
| fontFamily    | font-family    | fonts          |
| fontSize      | font-size      | fontSizes      |
| fontWeight    | font-weight    | fontWeights    |
| lineHeight    | line-height    | lineHeights    |
| letterSpacing | letter-spacing | letterSpacings |
| textAlign     | text-align     | none           |
| fontStyle     | font-style     | none           |

## Layout

```javascript
import { layout } from 'styled-system'
// or `import layout from '@styled-system/layout'`

<Box width="100%" height={32} overflow="hidden" />
```

| Prop          | CSS Property   | Theme Field |
| ------------- | -------------- | ----------- |
| width         | width          | sizes       |
| height        | height         | sizes       |
| minWidth      | min-width      | sizes       |
| maxWidth      | max-width      | sizes       |
| minHeight     | min-height     | sizes       |
| maxHeight     | max-height     | sizes       |
| size          | width height   | sizes       |
| display       | display        | none        |
| verticalAlign | vertical-align | none        |
| overflow      | overflow       | none        |
| overflowX     | overflowX      | none        |
| overflowY     | overflowY      | none        |

## Flexbox

```javascript
import { flexbox } from 'styled-system'
// or `import flexbox from '@styled-system/flexbox'`

<Flex alignItems="center" justifyContent="space-between">
  Blog
</Flex>
```

| Prop           | CSS Property     | Theme Field |
| -------------- | ---------------- | ----------- |
| alignItems     | align-items      | none        |
| alignContent   | align-content    | none        |
| justifyItems   | justify-items    | none        |
| justifyContent | justify-content  | none        |
| flexWrap       | flex-wrap        | none        |
| flexDirection  | flex-direction   | none        |
| flex           | flex (shorthand) | none        |
| flexGrow       | flex-grow        | none        |
| flexShrink     | flex-shrink      | none        |
| flexBasis      | flex-basis       | none        |
| justifySelf    | justify-self     | none        |
| alignSelf      | align-self       | none        |
| order          | order            | none        |


## Grid Layout

```javascript
import { grid } from 'styled-system'
// or `import grid from '@styled-system/grid'`

<Grid gridGap={2} gridAutoFlow="row dense">
  Grid
</Grid>
```

| Prop           | CSS Property     | Theme Field |
| -------------- | ---------------- | ----------- |
| alignItems     | align-items      | none        |
| alignContent   | align-content    | none        |
| justifyItems   | justify-items    | none        |
| justifyContent | justify-content  | none        |
| flexWrap       | flex-wrap        | none        |
| flexDirection  | flex-direction   | none        |
| flex           | flex (shorthand) | none        |
| flexGrow       | flex-grow        | none        |
| flexShrink     | flex-shrink      | none        |
| flexBasis      | flex-basis       | none        |
| justifySelf    | justify-self     | none        |
| alignSelf      | align-self       | none        |
| order          | order            | none        |

## Background

```javascript
import { background } from 'styled-system'
// or `import background from '@styled-system/background'`

<Image
  backgroundImage="url('/images/dog.png')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
/>
```

| Prop               | CSS Property        | Theme Field |
| ------------------ | ------------------- | ----------- |
| background         | background          | none        |
| backgroundImage    | background-image    | none        |
| backgroundSize     | background-size     | none        |
| backgroundPosition | background-position | none        |
| backgroundRepeat   | background-repeat   | none        |

## Border

```javascript
import { border } from 'styled-system'
// or `import border from '@styled-system/border'`

<Box border={1} borderRadius={2}>
  Card
</Box>
```

| Prop                    | CSS Property               | Theme Field  |
| ----------------------- | -------------------------- | ------------ |
| border                  | border                     | borders      |
| borderWidth             | border-width               | borderWidths |
| borderStyle             | border-style               | borderStyles |
| borderColor             | border-color               | colors       |
| borderRadius            | border-radius              | radii        |
| borderTop               | border-top                 | borders      |
| borderTopWidth          | border-top-width           | borderWidths |
| borderTopStyle          | border-top-style           | borderStyles |
| borderTopColor          | border-top-color           | colors       |
| borderTopLeftRadius     | border-top-left-radius     | radii        |
| borderTopRightRadius    | border-top-right-radius    | radii        |
| borderRight             | border-right               | borders      |
| borderRightWidth        | border-right-width         | borderWidths |
| borderRightStyle        | border-right-style         | borderStyles |
| borderRightColor        | border-right-color         | colors       |
| borderBottom            | border-bottom              | borders      |
| borderBottomWidth       | border-bottom-width        | borderWidths |
| borderBottomStyle       | border-bottom-style        | borderStyles |
| borderBottomColor       | border-bottom-color        | colors       |
| borderBottomLeftRadius  | border-bottom-left-radius  | radii        |
| borderBottomRightRadius | border-bottom-right-radius | radii        |
| borderLeft              | border-left                | borders      |
| borderLeftWidth         | border-left-width          | borderWidths |
| borderLeftStyle         | border-left-style          | borderStyles |
| borderLeftColor         | border-left-color          | colors       |
| borderX                 | border-left & border-right | borders      |
| borderY                 | border-top & border-bottom | borders      |

## Position

```javascript
import { position } from 'styled-system'
// or `import position from '@styled-system/position'`

<Box position="absolute" top={0} left={0} right={0} bottom={0}>
  Cover
</Box>
```

| Prop     | CSS Property | Theme Field |
| -------- | ------------ | ----------- |
| position | position     | none        |
| zIndex   | z-index      | zIndices    |
| top      | top          | space       |
| right    | right        | space       |
| bottom   | bottom       | space       |
| left     | left         | space       |

## shadow

```javascript
import { shadow } from 'styled-system'
// or `import shadow from '@styled-system/shadow'`

<Text textShadow="2px 2px #ff0000" boxShadow="5px 10px #888888">
  Text with shadows
</Text>
```

| Function Name | Prop      | Theme Field |
| ------------- | --------- | ----------- |
| textStyle     | textStyle | textStyles  |
| colorStyle    | colors    | colorStyles |
| buttonStyle   | variant   | buttons     |

## variants

The built-in variants use the following props and theme keys:

```javascript
import { textStyle, colorStyle, buttonStyle } from 'styled-system'
// or `import { textStyle, colorStyle, buttonStyle } from '@styled-system/variant'`

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
```

| Function Name | Prop      | Theme Key   |
| ------------- | --------- | ----------- |
| textStyle     | textStyle | textStyles  |
| colorStyle    | colors    | colorStyles |
| buttonStyle   | variant   | buttons     |
