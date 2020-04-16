import React from 'react';
import { withStyles } from "@material-ui/styles";
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
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

function DraggableColorBox(props) {
    const { classes, name, color, handleClick } = props;
    return (
        <div className={classes.root} style={{ backgroundColor: color }}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
            </div>
        </div>
    );
}

export default withStyles(styles)(DraggableColorBox);
