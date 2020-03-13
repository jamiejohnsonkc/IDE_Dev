/** @jsx jsx */
import { jsx, Link } from "theme-ui"

export default props => (
  <Link
    {...props}
    sx={{
      color: "white",
      bg: "black",
      "&:hover": {
        color: "black",
        bg: "white",
      },
    }}
  />
)
