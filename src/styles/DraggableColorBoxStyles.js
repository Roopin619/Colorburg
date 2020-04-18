import sizes from './sizes';

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-5px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "20%" 
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "10%"
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: "5%",
        }
    },
    boxContent: {
        width: "100%",
        position: "absolute",
        left: "0px",
        bottom: "0px",
        padding: "0.4rem",
        color: "rgba(0, 0, 0, 0.5)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "0.6rem",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        fontSize: "1rem",
        transition: "all 0.3s ease-in-out"
    }
}

export default styles;