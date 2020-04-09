import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  /* padding: 2px 8px 2px 8px; */
  text-decoration: none;
  font-weight: normal;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  cursor: pointer;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    text-decoration: none;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/services">services</NavItem>
      <NavItem to="/insights">insights</NavItem>
      <NavItem to="/profile">profile</NavItem>
    </>
  )
}

NavbarLinks.propTypes = {
  // bla: PropTypes.string,
}

NavbarLinks.defaultProps = {
  // bla: 'test',
}

export default NavbarLinks
