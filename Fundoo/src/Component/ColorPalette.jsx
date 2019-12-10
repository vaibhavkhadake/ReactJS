import React, { Component } from 'react'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import PaletteIcon from '@material-ui/icons/Palette';
import Popover from '@material-ui/core/Popover';
import { ChangeColorNotes } from '../UserServices/noteService'


const theme = createMuiTheme({
    overrides: {
        MuiPaper: {
            root: {
                width: '23%',
            }
        }
    }
})
const colorsPallete = [
    {
        colorName: "White",
        colorCode: "#ffffff"
    },
    {
        colorName: "Red",
        colorCode: "#ea2e2e"
    },
    {
        colorName: "Orange",
        colorCode: "#ffb600"
    },
    {
        colorName: "Yellow",
        colorCode: "#e1e82e"
    },
    {
        colorName: "Green",
        colorCode: "#ccff90"
    },
    {
        colorName: "Teal",
        colorCode: "#a7ffeb"
    },
    {
        colorName: "Blue",
        colorCode: "#281bd6"
    },
    {
        colorName: "Dark blue",
        colorCode: "#aecbfa"
    },
    {
        colorName: "Purple",
        colorCode: "#d7adfb"
    },
    {
        colorName: "Pink",
        colorCode: "#fdcfe8"
    },
    {
        colorName: "Dark Brown",
        colorCode: "#e6c9a7"
    },
    {
        colorName: "Gray",
        colorCode: "#e8eaed"
    }
]


class ColorPalette extends Component {

    constructor() {
        super()
        this.state = {
            colorOpen: false,
            anchorEl: null
        }
    }
    handleColor = (event) => {
        this.setState({
            colorOpen: !this.state.colorOpen,
            anchorEl: event.currentTarget
        })
    }
    handleColorClose = () => {
        this.setState({ colorOpen: !this.state.colorOpen })
    }

    //color contain "colorName" and "colorCode"
    handleAddColor = (color) => {
        console.log(" color in handle ", color.colorCode);
        console.log("Note 97 info==============>", this.props.colorNoteId);

        let loginToken = localStorage.getItem('token');
        let noteObject = {};
        noteObject.noteIdList = [this.props.colorNoteId];
        noteObject.color = color.colorCode;

        ChangeColorNotes(noteObject, loginToken)
            .then(data => {
                console.log("Added color successfully",data);
               
                this.setState({ colorOpen: !this.state.colorOpen })
            })
            .catch(err => {
                console.log(" error in response");
                console.log("Error in Adding color", err);
            })
    }
    render() {

        return (
            <div>
                <MuiThemeProvider theme={theme}>

                    <Tooltip title="color">
                        <IconButton onClick={this.handleColor}>
                            <PaletteIcon/>
                        </IconButton>
                    </Tooltip>
                    <Popover
                        open={this.state.colorOpen}
                        // "anchorEl" will check your position from state where you clicked
                        anchorEl={this.state.anchorEl}
                        onClose={this.handleColorClose}
                        anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                        }}
                        style={{ width: '25%'}}
                    >
                        {colorsPallete.map((color, index) => (
                            <IconButton key={index} style={{ backgroundColor: color.colorCode }} 
                            onClick={() => this.handleAddColor(color)}></IconButton>
                        ))}
                    </Popover>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default ColorPalette