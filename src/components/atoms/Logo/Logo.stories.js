/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Logo from "./Logo"

export default {
  title: "Logo",
}

export const Reversed = () => (
  <div style={{ background: "black" }}>
    <Logo />
  </div>
)
