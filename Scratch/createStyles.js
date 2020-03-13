import gray from "gray-percentage"
import set from "lodash/set"
import each from "lodash/forEach"
import isNumber from "lodash/isNumber"
import isString from "lodash/isString"
import isFunction from "lodash/isFunction"
import isArray from "lodash/isArray"
import merge from "lodash/merge"
import reduce from "lodash/reduce"

import type { OptionsType } from "Types"

const setStyles = (
  styles: Object = {},
  els: string | string[],
  rules: Object
) => {
  let elements
  if (!isArray(els)) {
    elements = [els]
  } else {
    elements = els
  }
  each(elements, element => {
    each(rules, (value, prop) => {
      set(styles, `${element}.${prop}`, value)
    })
  })
  return styles
}

export default (vr: any, options: OptionsType) => {
  let styles = {}
  const { fontSize, lineHeight } = vr.establishBaseline()

  // All block elements get one rhythm of bottom margin by default
  // or whatever is passed in as option.
  let blockMarginBottom = ""
  if (isNumber(options.blockMarginBottom)) {
    blockMarginBottom = vr.rhythm(options.blockMarginBottom)
  } else if (isString(options.blockMarginBottom)) {
    blockMarginBottom = options.blockMarginBottom
  } else {
    blockMarginBottom = vr.rhythm(1)
  }
  styles = setStyles(styles, ["d1", "d2", "d3", "d4", "d5", "d6"], {
    // Reset margin/padding to 0.
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    marginBottom: blockMarginBottom,
  })

  // Create styles for headers.
  styles = setStyles(styles, ["d1", "d2", "d3", "d4", "d5", "d6"], {
    color: options.headerColor,
    fontFamily: options.headerFontFamily.map(wrapFontFamily).join(","),
    fontWeight: options.headerWeight,
    textRendering: "optimizeLegibility",
  })

  // Set header sizes.
  const d1 = vr.scale(5 / 5)
  const d2 = vr.scale(3 / 5)
  const d3 = vr.scale(2 / 5)
  const d4 = vr.scale(0 / 5)
  const d5 = vr.scale(-1 / 5)
  const d6 = vr.scale(-1.5 / 5)

  each([d1, d2, d3, d4, d5, d6], (header, i) => {
    styles = set(styles, `h${i + 1}.fontSize`, header.fontSize)
    styles = set(styles, `h${i + 1}.lineHeight`, options.headerLineHeight)
  })

  return styles
}
