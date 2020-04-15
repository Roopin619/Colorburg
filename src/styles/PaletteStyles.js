export default {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  colors: {
    height: "90%"
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3px",
    opacity: 1,
    backgroundColor: "black",
    "& a": {
      color: "white",
      width: "5rem",
      height: "1.6rem",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-2.5rem",
      marginTop: "-0.8rem",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "0.8rem",
      lineHeight: "1.6rem",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none"
    }
  }
};