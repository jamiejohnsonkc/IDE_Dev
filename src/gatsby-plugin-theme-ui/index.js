import React from "react"
import typography from "../utils/typography"
import { merge } from "theme-ui"

export default {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    heading: `${typography.options.header}`,
    body: `${typography.options.bodyFontFamily}`,
    monospace: `${typography.options.monospace}`,
  },
  fontWeights: {
    body: `${typography.options.bodyWeight}`,
    heading: `${typography.options.headerWeight}`,
    bold: `${typography.options.boldWeight}`,
  },
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

  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    display: {
      variant: "text.heading",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "body",
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
    tight: {
      letterSpacing: "-.05em",
    },
    loose: {
      letterSpacing: ".025em",
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
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },

    h1: {
      variant: "text.heading",
      fontSize: `${typography.h1}`,
    },
    h2: {
      variant: "text.heading",
      fontSize: `${typography.h2}`,
    },
    h3: {
      variant: "text.heading",
      fontSize: `${typography.h3}`,
    },
    h4: {
      variant: "text.heading",
      fontSize: `${typography.h4}`,
    },
    h5: {
      variant: "text.heading",
      fontSize: `${typography.h5}`,
    },
    h6: {
      variant: "text.heading",
      fontSize: `${typography.h6}`,
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
  },
  th: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
  td: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
}
