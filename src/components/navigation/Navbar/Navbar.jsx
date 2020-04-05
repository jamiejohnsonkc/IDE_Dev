/** @jsx jsx */

import { jsx, Box, Flex, space } from "theme-ui"
import React, { useState } from "react"
import PropTypes from "prop-types"
import Logo from "../../atoms/Logo"
import NavbarLinks from "../NavbarLinks"
import styled from "@emotion/styled"

const Navigation = styled.nav`
  padding: ${props => props.theme.space.p4};
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex: 1;
`

const Toggle = styled.div`
  display: none;
  height: "100%";
  cursor: pointer;

  @media (max-width: 786px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: ;
    transition: all 0.3s ease-in;
    /* top: 8vh; */
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #fff;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #fff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation
      sx={{
        p: 4,
      }}
    >
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

Navbar.propTypes = {
  // bla: PropTypes.string,
}

Navbar.defaultProps = {
  // bla: 'test',
}
export default Navbar
