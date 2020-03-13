import React from "react"
import typography from "../utils/typography"

export default {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    heading: `${typography.options.headerFontFamily}`,
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
    primary: "#07c",
    secondary: "#30c",
    accent: "red",
    highlight: "",
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
    bold: {
      fontWeight: "bold",
    },
    nav: {
      fontWeight: "bold",
      color: "inherit",
      textDecoration: "none",
      px: 2,
      py: 1,
      textTransform: "lowercase",
      letterSpacing: "0.2em",
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
    a: {
      fontFamily: "text.heading",
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
