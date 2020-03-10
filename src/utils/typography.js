import Typography from "typography"
const typography = new Typography({
  title: "",
  baseFontSize: "16px", // defaults to 16
  baseLineHeight: 1.63, // defaults to 1.45
  scaleRatio: 2, //This value is the ratio between the h1 font size and the baseFontSize. So if the scale ratio is 2 and the baseFontSize is 16px then the h1 font size is 32px.
  headerFontFamily: [
    "Courier",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ], // Defaults to a system UI font stack.
  bodyFontFamily: ["monospace", "serif"], // defaults to ['georgia', 'serif']
  headerGray: "", // The “lightness” value for headers (set in hsl). Defaults to 20.
  headerGrayHue: "", // The “hue” value for headers (set in hsl). Defaults to 0. Also accepts three named hues, cool, slate, and warm.
  bodyGray: "", // The “lightness” value for body text (in hsl). Defaults to 20.
  bodyGrayHue: "", // The “hue” value for body text (in hsl). Defaults to 0. Also accepts three named hues, cool, slate, and warm.
  headerWeight: "", // defaults to bold
  bodyWeight: "", // defaults to normal
  boldWeight: "", // defaults to bold, accepts b, strong, dt, th
  blockMarginBottom: "", //defaults to one rhythm unit
  includeNormalize: "", // default true
})
export default typography

// see value definitions at https://kyleamathews.github.io/typography.js/
