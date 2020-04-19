import sizes from './sizes';

export default {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "4px",
        padding: "0.4rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover svg": {
            opacity: 1
        }
    },
    colors: {
        backgroundColor: "#dae1e4",
        width: "100%",
        borderRadius: "4px",
        overflow: "hidden",
        [sizes.down("xl")]: {
            height: "10rem"
        },
        [sizes.down("lg")]: {
            height: "7rem"
        },
        [sizes.down("md")]: {
            height: "12rem"
        },
        [sizes.down("sm")]: {
            height: "9rem"
        },
        [sizes.down("xs")]: {
            height: "13rem"
        }
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        padding: "0.7rem 0.5rem 0.4rem 0",
        fontSize: "0.8rem",
        fontWeight: "500",
        position: "relative"
    },
    emoji: {
        fontSize: "0.8rem"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3px",
        [sizes.down("xl")]: {
            marginBottom: "-3.5px"
        },
        [sizes.down("lg")]: {
            marginBottom: "-3px"
        }
    },
    deleteIcon: {
        color: "white",
        backgroundColor: "#eb3d30",
        width: "20px",
        height: "20px",
        position: "absolute",
        right: "0px",
        top: "0px",
        padding: "5px",
        zIndex: 10,
        opacity: 0,
        transition: "all 0.3s ease-in-out"
    }
};