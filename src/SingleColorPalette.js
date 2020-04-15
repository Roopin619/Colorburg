import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from "@material-ui/styles";

const styles = {
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

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state = { format: "hex" };
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    }

    gatherShades = (palette, colorToFilterBy) => {
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors) {
            shades.push(
                allColors[key].find(color => color.id === colorToFilterBy)
            );
        }
        return shades.slice(1);
    }

    changeFormat = (val) => {
        this.setState({ format: val });
    }

    render() {
        const { format } = this.state;
        const { paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const colorBoxes = this._shades.map(color => (
            <ColorBox
                key={color.name}
                name={color.name}
                background={color[format]}
                showingFullPalette={false}
            />
        ));
        return (
            <div className={classes.Palette}>
                <Navbar handleChange={this.changeFormat} showingAllColors={false} />
                <div className={classes.colors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`}>GO BACK</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default withStyles(styles)(SingleColorPalette);
