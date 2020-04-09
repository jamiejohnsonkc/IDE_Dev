import React from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"
import { Link } from "@reach/router"
import styled from "@emotion/styled"
//import { Test } from './Logo.styles';

const IconMargin = styled(Icon)`
  width: 3rem;
  fill: white;
  /* margin: 2rem 2rem; */
  &:hover {
    fill: blue;
  }
`
const Logo = props => (
  <Link to="/">
    <IconMargin name="Jimglyph" />
  </Link>
)

Logo.propTypes = {
  // bla: PropTypes.string,
}

Logo.defaultProps = {
  // bla: 'test',
}

export default Logo
