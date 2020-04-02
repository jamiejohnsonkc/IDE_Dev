import React from "react"
import { Link } from "@reach/router"
import PropTypes from "prop-types"
//import { Test } from './PageLinks.styles';

const PageLinks = () => (
<Link to="/">services</Link>
<Link to="/">insights</Link>
<Link to="/">profile</Link>
)

PageLinks.propTypes = {
  // bla: PropTypes.string,
}

PageLinks.defaultProps = {
  // bla: 'test',
}

export default PageLinks
