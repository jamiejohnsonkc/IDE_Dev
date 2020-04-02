/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"
import Drawer from "./Drawer"
import BlankBg from "../../atoms/BlankBg"

export default {
  title: "Drawer",
}

export const standard = () => (
  <Drawer>
    <BlankBg />
  </Drawer>
)
