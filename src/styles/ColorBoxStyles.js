import chroma from 'chroma-js';
import sizes from './sizes';

export default {
    ColorBox: {
        width: "20%",
        height: props => (props.showingFullPalette ? "25%" : "50%"),
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3px",
        "&:hover button": {
            opacity: 1
        },
        [sizes.down("xl")]: {
            width: "20%",
            height: props => (props.showingFullPalette ? "25%" : "50%"),
        },
        [sizes.down("md")]: {
            width: "50%",
            height: props => (props.showingFullPalette ? "10%" : "20%"),
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: props => (props.showingFullPalette ? "5%" : "10%"),
            marginBottom: "-4px"
        }
    },
    copyText: {
        color: props =>
            chroma(props.background).luminance() >= 0.7 ? "black" : "white"
    },
    colorName: {
        color: props =>
            chroma(props.background).luminance() <= 0.1 ? "white" : "black"
    },
    seeMore: {
        color: props =>
            chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        width: "3.2rem",
        height: "1.5rem",
        textAlign: "center",
        lineHeight: "1.5rem",
        textTransform: "uppercase",
        fontSize: "0.8rem"
    },
    copyButton: {
        color: props =>
            chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
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
        textDecoration: "none",
        opacity: 0
    },
    boxContent: {
        position: "absolute",
        left: "0px",
        bottom: "0px",
        padding: "0.4rem",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "0.6rem"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
        transform: "scale(0.1)"
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute"
    },
    copyMessage: {
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "2.5rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255, 255, 255, 0.2)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "0.7rem",
            textTransform: "uppercase",
            [sizes.down("xs")]: {
                fontSize: "5rem"
            }
        },
        "& p": {
            fontSize: "1.3rem",
            fontWeight: "100"
        }
    },
    showMessage: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s"
    }
};