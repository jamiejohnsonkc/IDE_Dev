import React from "react"
import PropTypes from "prop-types"
import "./Icon.css"
import Arc from "./icons/arc.svg"
import Shapes from "./icons/shapes.svg"
import Jimglyph from "./icons/jimglyph.svg"
import Webpack from "./icons/webpack.svg"
import Hamburger from "./icons/hamburger.svg"

const Icon = props => {
  switch (props.name) {
    case "Jimglyph":
      return <Jimglyph {...props} />
    case "Arc":
      return <Arc {...props} />
    case "Shapes":
      return <Shapes {...props} />
    case "Webpack":
      return <Webpack {...props} />
    case "Hamburger":
      return <Hamburger {...props} />
  }
}

export default Icon
