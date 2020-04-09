import React from "react"
import typography, { options } from "../utils/typography"

export default {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  // lineHeights: {
  //   body: 1.5,
  //   heading: 1.125,
  // },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#000",
    secondary: "#373636",
    accent: "red",
    highlight: "#bfbdbd",
    white: "#fff",
    muted: "#f6f6f6",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
      },
    },
  },
  links: {
    nav: {
      fontWeight: "regular",
      fontSize: 0,
      fontFamily: "monospace",
      color: "white",
      textDecoration: "none",
      px: 2,
      py: 2,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      "&:hover": {
        color: "black",
        bg: "white",
      },
    },
  },
}
