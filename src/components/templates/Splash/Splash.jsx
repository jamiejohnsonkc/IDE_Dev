import React from "react"
import Themeprovider from "styled-components"
import Theme from "../../../theme"
import PropTypes from "prop-types"
import Layout from "../../organisms/Layout"
import Hero from "../../organisms/Hero"
//import { Test } from './Splash.styles';

const Splash = () => (
  <div>
    no wrapper
    <text>text wrapper</text>
    <h1>heading h1</h1>
    <h2>heading h2</h2>
    <h3>heading h3</h3>
    <h4>heading h4</h4>
    <h5>heading h5</h5>
    <h6>heading h6</h6>
    <p>
      Sint est Lorem consequat duis consequat. Aliqua aliquip exercitation
      officia in labore incididunt mollit dolore in qui ut labore voluptate
      exercitation. Labore qui proident exercitation nisi deserunt fugiat cillum
    </p>
    <p>nostrud cupidatat incididunt aute ipsum pariatur. Ex elit dolor id</p>
  </div>
)

Splash.propTypes = {
  // bla: PropTypes.string,
}

Splash.defaultProps = {
  // bla: 'test',
}

export default Splash
