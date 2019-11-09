import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import { createMuiTheme, MuiThemeProvider, Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import Dialog from '@material-ui/core/Dialog';
import { Button } from '@material-ui/core';

import { UpdateNotes } from '../UserServices/noteService'
import { Tooltip, IconButton } from '@material-ui/core';

import PaletteIcon from '@material-ui/icons/Palette';
import ColorPalette from './ColorPalette';
import Reminder from './Reminder';
import More from './More';


const theme = createMuiTheme({
    overrides: {
        'MuiPaper': {
            'root': {
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                marginTop: "15%",
                width: '20%',
                minHeight: "30px",
                margin: '80px auto',
                paddingBottom: '20px',
            }
        },
    }
})

export class DialogBox extends Component
{    constructor(props) {
    super(props)
    this.state = {
        title: '',
        description: '',
        noteData:'',
        open:false
    }
}

componentWillReceiveProps(nextProps) {
    
    // console.log("Color of note in dialog bos",nextProps.singleNote.color);
    this.setState({
        title: nextProps.singleNote.title,
        description: nextProps.singleNote.description,
        noteData:nextProps.singleNote
    })
}

handleDialogBox = () => {
    this.props.dialogBoxClose();
}
handleColor = () => {
    console.log("color in dialog box")
    this.setState({ open: !this.state.open });
}



handleChangeNoteTitle = (event) => {
    console.log("===>EDITED NOTE", event.target.value);
    console.log("Note 99 info==============>", this.props.colorNoteId);
    this.setState({ 
        title: event.target.value });
};

handleChangeNoteDescription=(event)=>{
    console.log("====>EDIT DESRIPTION",event.target.value);
    
    this.setState({description:event.target.value})
}

handleUpdateNote=()=>{
    let loginToken = localStorage.getItem('token');
    let noteObject = {}
    console.log("NOTE@@@@@@@@@@@@@@@@@@@",this.state.noteData.id);

    noteObject.noteId=this.state.noteData.id;
    noteObject.title = this.state.title;
    noteObject.description = this.state.description;

    UpdateNotes(noteObject, loginToken)
    .then(data => {
        console.log("update note data", data.data);

    })
    .catch(err => {
        console.log("update note ERRRR", err);
    })
     this.props.dialogBoxClose();
    // this.props.refreshedNotesProps()

}

        render()
        {
            // console.log("DIALOG BOX NOTE",this.props.singleNote);
            return(

                <MuiThemeProvider theme={theme}>
                <div>
                    <Dialog
                         style={{ color :this.state.noteData.color}}
                        open={this.props.dialogOpen}
                        onClose={this.handleDialogBox}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <TextField
                            value={this.state.title}
                            onChange={this.handleChangeNoteTitle}
                            margin='normal'
                            placeholder='Title'
                            InputProps={{
                                disableUnderline: true
                            }}
                            
                        />
                        <TextField
                            
                            value={this.state.description}
                            onChange={this.handleChangeNoteDescription}
                            margin='normal'
                            placeholder='Description'
                            InputProps={{
                                disableUnderline: true
                            }}
                        />
                        <Divider/>
                            {/* <ColorPalette open={this.props.colorNoteId} onClick={this.handleColor} /> */}
                            <Button  onClick={this.handleUpdateNote}>Close</Button>
                    </Dialog>

                </div>
            </MuiThemeProvider>

            )
        }

}

export default DialogBox 
