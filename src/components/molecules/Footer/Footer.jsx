import React from "react"
import PropTypes from "prop-types"
//import { Test } from './Footer.styles';

const Footer = props => <div>test footer</div>

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
