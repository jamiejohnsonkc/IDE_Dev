import React from "react"
import Navbar from "./Navbar"
import { withKnobs, text } from "@storybook/addon-knobs"

export default {
  title: "NavMenu",
  decorators: [withKnobs],
}

export const standard = () => (
  <div
    style={{
      background: "black",
    }}
  >
    <NavMenu siteTitle={text("siteTitle", "")} />
  </div>
)
