export default {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "4px",
        padding: "0.4rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "6.5rem",
        width: "100%",
        borderRadius: "4px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        padding: "0.5rem 0.5rem 0.2rem 0",
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
        marginBottom: "-3px"
    }
};