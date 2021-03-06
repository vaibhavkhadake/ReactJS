import React, { Component } from "react";
import { getAllArchiveNotes } from "../UserServices/noteService";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import "./DisplayAllNotes.css";
import Reminder from "./Reminder";
import More from "./More";
import { Tooltip } from "@material-ui/core";
import ColorPalette from "./ColorPalette";
import ArchiveNote from "./ArchiveNote";
import Masonry from "react-masonry-css";
import "./Masonry.css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

class DisplayAllArchiveNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      noteArray: [],
      uniqueNote: {},
      gridView: false,
      listView: true
    };
  }
  componentDidMount() {
    this.handleNote();
  }

  handleDialog = note => {
    console.log("dialog cliked", this.state.open);
    console.log("UNIQUE NOTE VALUE NOTE", this.state.uniqueNote);
    this.setState({ open: !this.state.open, uniqueNote: note });
  };
  handleDialogBoxClose = () => {
    this.setState({ open: !this.state.open });
  };

  handleNote = () => {
    getAllArchiveNotes()
      .then(response => {
        this.noteArray = response.data.data.data;

        console.log(" note array in archive note", this.noteArray);
        this.setState({ noteArray: this.noteArray });
      })
      .catch(err => {
        console.log("ERROR NOTE DATA =========>", err);
      });
  };

  handleNoteSave = note => {
    this.setState({ open: !this.state.open, uniqueNote: note });
  };

  render() {
    let classes = this.props.view ? "allNotesMain" : "allNotesMainColumn";
    var data = this.state.noteArray;
    var allData = data.filter(user => user.isArchived === true);
    return (
      <div className={classes}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {allData.map((text, index) => (
            <div className="allNotes" key={index}>
              <Card
                className="displayNotes"
                style={{ backgroundColor: text.color }}
              >
                <div>
                  <TextField
                    onClick={() => this.handleNoteSave(text)}
                    InputProps={{
                      disableUnderline: true
                    }}
                    value={text.title}
                    placeholder="Title"
                    style={{ paddingLeft: "15px" }}
                  />
                  <br />
                  <TextField
                    onClick={() => this.handleNoteSave(text)}
                    InputProps={{
                      disableUnderline: true
                    }}
                    value={text.description}
                    placeholder="Description"
                    style={{ paddingLeft: "15px" }}
                  />
                </div>
                <div>
                  <div className="noteLogo">
                    <Reminder />
                    <Tooltip title="Change color">
                      {/* Passing particular note id */}
                      <ColorPalette colorNoteId={text.id} />
                    </Tooltip>
                    <ArchiveNote archiveNoteId={text.id} />
                    <More />
                  </div>
                </div>
              </Card>
              <br />
            </div>
          ))}
        </Masonry>
      </div>
    );
  }
}

export default DisplayAllArchiveNotes;
