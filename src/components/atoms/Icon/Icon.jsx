import React from "react"
import PropTypes from "prop-types"
import "./Icon.css"
import Arc from "./icons/arc.svg"
import Shapes from "./icons/shapes.svg"
import Webpack from "./icons/webpack.svg"

const Icon = props => {
  switch (props.name) {
    case "Arc":
      return <Arc {...props} />
    case "Shapes":
      return <Shapes {...props} />
    case "Webpack":
      return <Webpack {...props} />
  }
}

export default Icon
