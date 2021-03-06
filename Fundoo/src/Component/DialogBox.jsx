import React, { Component } from "react";
import {
  createMuiTheme,
  MuiThemeProvider,
  Divider,
  Paper
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import { Button } from "@material-ui/core";
import { UpdateNotes } from "../UserServices/noteService";
import Reminder from "./Reminder";
import ColorPalette from "./ColorPalette";
import ArchiveNote from "./ArchiveNote";
import More from "./More";
import { ChangeColorNotes } from "../UserServices/noteService";
// import Collaborator from "./Collaborator";
const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        display: "flex",
        flexDirection: "column"
      }
    }
  }
});

export default class DialogBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      noteData: "",
      color: "",
      open: false
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.singleNote.title,
      description: nextProps.singleNote.description,
      color: nextProps.singleNote.color,
      noteData: nextProps.singleNote
    });
  }
  handleAddColor = color => {
    console.log(" color in handle ", color.colorCode);
    console.log("Note 97 info==============>", this.props.colorNoteId);
    this.setState({ open: !this.state.open });
    let loginToken = localStorage.getItem("token");
    let noteObject = {};
    noteObject.noteIdList = [this.state.noteData.id];
    noteObject.color = color.colorCode;

    ChangeColorNotes(noteObject, loginToken)
      .then(data => {
        console.log("Added color successfully", data);

        this.setState({ colorOpen: !this.state.colorOpen });
        this.props.onSave();
      })
      .catch(err => {
        console.log(" error in response");
        console.log("Error in Adding color", err);
      });
  };

  handleDialogBox = () => {
    this.props.dialogBoxClose();
  };

  handleChangeNoteTitle = event => {
    console.log("===>EDITED NOTE", event.target.value);
    console.log("Note 99 info==============>", this.props.colorNoteId);
    this.setState({
      title: event.target.value
    });
  };

  handleChangeNoteDescription = event => {
    console.log("====>EDIT DESRIPTION", event.target.value);
    this.setState({ description: event.target.value });
  };

  handleUpdateNote = () => {
    let loginToken = localStorage.getItem("token");
    let noteObject = {};
    console.log("NOTE", this.state.noteData.id);
    noteObject.noteId = this.state.noteData.id;
    noteObject.title = this.state.title;
    noteObject.description = this.state.description;
    noteObject.color = this.state.color;
    UpdateNotes(noteObject, loginToken)
      .then(data => {
        console.log("update note data", data.data);
      })
      .catch(err => {
        console.log("update note ERRRR", err);
      });
    this.props.onSave();
    this.props.dialogBoxClose();
  };
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Dialog
            open={this.props.dialogOpen}
            onClose={this.handleDialogBox}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Paper style={{ backgroundColor: this.state.color }}>
              <TextField
                multiline
                value={this.state.title}
                onChange={this.handleChangeNoteTitle}
                margin="normal"
                placeholder="Title"
                style={{ paddingLeft: "15px" }}
                InputProps={{
                  disableUnderline: true
                }}
              />
              <TextField
                multiline
                value={this.state.description}
                onChange={this.handleChangeNoteDescription}
                margin="normal"
                placeholder="Description"
                style={{ paddingLeft: "15px" }}
                InputProps={{
                  disableUnderline: true
                }}
              />
              <Divider />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Reminder />
                {/**    <Collaborator /> */}
                <ColorPalette onClick={this.handleAddColor} />
                <ArchiveNote onClick={this.handleUpdateNote} />
                <More onClick={this.handleUpdateNote} />
                <Button onClick={this.handleUpdateNote}>Close</Button>
              </div>
            </Paper>
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}
