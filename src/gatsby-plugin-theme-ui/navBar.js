export default {
  header: {
    backgroundColor: "primary",
    justifyContent: "space-between",
  },
  navBar: {
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
    vertical: {
      box: {
        display: "flex",
        height: "100%",
        flexGrow: 1,
        px: 2,
        backgroundColor: "primary",
        width: ["100%", null, "25%"],
        justifyContent: "center",
        alignItems: "center",
      },
      ul: {
        m: 0,
        display: "flex",
        flexDirection: "column",
      },
      li: {
        listStyleType: "none",
        p: 10,
        flexGrow: 1,
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
