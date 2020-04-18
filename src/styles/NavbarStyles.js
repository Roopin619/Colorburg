import sizes from './sizes';

export default {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh"
    },
    logo: {
        marginRight: "1rem",
        padding: "0.2rem 0.7rem 0 0.7rem",
        backgroundColor: "#eceff1",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [sizes.down("xs")]: {
            display: "none"
        }
    },
    slider: {
        width: "15rem",
        margin: "0 0.8rem",
        display: "inline-block",
        "& .rc-slider-track": {
            backgroundColor: "transparent"
        },
        "& .rc-slider-rail": {
            height: "0.5rem"
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover": {
            backgroundColor: "#4a47a3",
            outline: "none",
            border: "2px solid #4a47a3",
            boxShadow: "none",
            width: "0.8rem",
            height: "0.8rem",
            marginTop: "-3px"
        },
        [sizes.down("md")]: {
            width: "8rem"
        }
    },
    selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem"
    }
};