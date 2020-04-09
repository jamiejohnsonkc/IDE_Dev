import React from "react"
import PropTypes from "prop-types"

const BlankBg = props => (
  <div
    style={{
      background: "#f1f1f1",
      display: "flex",
      flexGrow: "1",
      color: "black",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "10px",
      letterSpacing: ".05rem",
      fontWeight: "bold",
      fontFamily: "monospace",
    }}
  >
    intentionally blank
  </div>
)

BlankBg.propTypes = {
  // bla: PropTypes.string,
}

BlankBg.defaultProps = {
  // bla: 'test',
}

export default BlankBg
