import { Flex } from "rebass"
import React from "react"
import PropTypes from "prop-types"
//import { Test } from './Hero.styles';

const Hero = props => (
  <Flex height="100%" flexGrow="1">
    HeroContent
  </Flex>
)
Hero.propTypes = {
  // bla: PropTypes.string,
}

Hero.defaultProps = {
  // bla: 'test',
}

export default Hero
