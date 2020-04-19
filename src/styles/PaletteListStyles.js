import sizes from './sizes';
import bg from './bg.svg';

export default {
    "@global": {
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 500ms ease-out"
        }  
    },
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        /* background by SVGBackgrounds.com */
        backgroundColor: "#394bad",
        backgroundImage: `url(${bg})`,
        overflow: "auto"
    },
    heading: {
        fontSize: "2rem",
        margin: "1.8rem 0"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        marginBottom: "2rem",
        flexWrap: "wrap",
        [sizes.down("md")]: {
            width: "70%"
        },
        [sizes.down("sm")]: {
            width: "80%"
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        "& a": {
            color: "white"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        justifyContent: "space-between",
        [sizes.down("xl")]: {
            gridTemplateColumns: "repeat(3, 30%)",
            gridGap: "3rem",
        },
        [sizes.down("lg")]: {
            gridTemplateColumns: "repeat(3, 30%)",
            gridGap: "2rem",
        },
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 45%)",
            gridGap: "2.5rem"
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 90%)",
            gridGap: "2.5rem",
            justifyContent: "space-around",
        }
    }
};