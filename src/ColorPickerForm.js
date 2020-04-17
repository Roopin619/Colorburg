import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const styles = {
    picker: {
        width: "100% !important",
        marginTop: "2 rem"
    },
    addColor: {
        width: "100%",
        padding: "1 rem",
        marginTop: "1 rem",
        fontSize: "2 rem"
    },
    colorNameInput: {
        width: "100%",
        height: "70px"
    }
}

class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = { currentColor: "teal", newColorName: "" }
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isColorUnique', (value) =>
            this.props.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        );
    }

    updateCurrentColor = (newColor) => {
        this.setState({ currentColor: newColor.hex });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = () => {
        const newColor = {
            name: this.state.newColorName,
            color: this.state.currentColor
        }
        this.props.addNewColor(newColor);
        this.setState({ newColorName: "" });
    }

    render() {
        const { paletteIsFull, classes } = this.props;
        const { currentColor, newColorName } = this.state;
        return (
            <div>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={this.updateCurrentColor}
                    className={classes.picker}
                />
                <ValidatorForm onSubmit={this.handleSubmit} ref='form'>
                    <TextValidator
                        value={newColorName}
                        className={classes.colorNameInput}
                        variant="filled"
                        margin="normal"
                        placeholder="Color Name"
                        name="newColorName"
                        onChange={this.handleChange}
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={[
                            'Please enter a color name!',
                            'Color name must be unique!',
                            'Color already used!'
                        ]}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.addColor}
                        style={{
                            backgroundColor: paletteIsFull
                                ? "grey"
                                : currentColor
                        }}
                        type="submit"
                        disabled={paletteIsFull}
                    >
                        {paletteIsFull ? 'Palette Full' : 'Add Color'}
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm);
