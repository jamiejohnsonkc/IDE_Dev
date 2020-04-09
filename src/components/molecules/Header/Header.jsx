/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import Navbar from "../../navigation/Navbar"
import styled from "@emotion/styled"

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = props => (
  <StyledHeader
    sx={{
      p: 4,
    }}
  >
    <Navbar />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: PropTypes.string,
}

export default Header
