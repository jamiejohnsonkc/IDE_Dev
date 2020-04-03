/** @jsx jsx */

import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { NavLink, jsx } from "theme-ui"

const NavItem = ({ menuLinks }) => (
  <ul style={{ display: "flex", flex: 1, m: 0 }}>
    {menuLinks.map(link => (
      <li
        key={link.name}
        style={{
          listStyleType: `none`,
          padding: `1rem`,
        }}
      >
        <NavLink>
          <Link to={link.link} sx={{ variant: "links.mainNav" }}>
            {link.name}
          </Link>
        </NavLink>
      </li>
    ))}
  </ul>
)
NavItem.propTypes = {
  siteTitle: PropTypes.string,
}
NavItem.defaultProps = {
  siteTitle: ``,
}
export default NavItem
