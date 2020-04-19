import sizes from './sizes';
import chroma from 'chroma-js';

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
        [sizes.down("xl")]: {
            width: "20%",
            height: "25%" 
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
        color: props =>
            chroma(props.color).luminance() <= 0.1
              ? "rgba(255,255,255,0.8)" 
              : "rgba(0,0,0,0.6)",
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