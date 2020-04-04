export default {
  navMenu: {
    horizontal: {
      box: {
        px: 2,
      },
      ul: {
        m: 0,
        flex: 1,
      },
      li: {
        listStyleType: "none",
        p: 10,
      },
      link: {
        fontSize: 0,
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
  },
}
