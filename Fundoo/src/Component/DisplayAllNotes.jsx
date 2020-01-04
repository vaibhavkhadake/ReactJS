import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import "./DisplayAllNotes.css";
import Reminder from "./Reminder";
import More from "./More";
import DialogBox from "./DialogBox";
import { Tooltip } from "@material-ui/core";
import ColorPalette from "./ColorPalette";
import ArchiveNote from "./ArchiveNote";
import Collaborator from "./Collaborator";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Masonry from "react-masonry-css";
import "./Masonry.css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};
const breakpointRowObj = {
  default: 1,
  1100: 1,
  700: 1,
  500: 1
};
class DisplayAllNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      noteArray: [],
      uniqueNote: {},
      isArchived: true,
      gridView: false,
      listView: true
    };
  }

  handleDialog = note => {
    console.log("dialog cliked", this.state.open);
    console.log("UNIQUE NOTE VALUE NOTE", this.state.uniqueNote);
    this.setState({ open: !this.state.open, uniqueNote: note });
  };

  handleDialogBoxClose = () => {
    this.setState({ open: !this.state.open });
  };

  handleApiHit = () => {
    this.props.hitapi();
  };
  handleNoteSave = note => {
    this.setState({ open: !this.state.open, uniqueNote: note });
  };
  render() {
    let classes = this.props.view ? "allNotesMain" : "allNotesMainColumn";
    let listGridView = this.props.view
      ? breakpointColumnsObj
      : breakpointRowObj;
    var data = this.props.displayAllNotes;
    var allData = data.filter(
      user => user.isArchived !== true && user.isDeleted !== true
    );

    return (
      <div>
        <div className={classes}>
          <Masonry
            breakpointCols={listGridView}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {allData.map((note, index) => (
              <div className="allNotes" key={index}>
                <Card
                  className="displayNotes"
                  style={{ backgroundColor: note.color }}
                >
                  <div>
                    <TextField
                      onClick={() => this.handleNoteSave(note)}
                      InputProps={{
                        disableUnderline: true
                      }}
                      value={note.title}
                      multiline
                      placeholder="Title"
                      style={{ paddingLeft: "15px" }}
                    />
                    <br />
                    <TextField
                      onClick={() => this.handleNoteSave(note)}
                      InputProps={{
                        disableUnderline: true
                      }}
                      multiline
                      value={note.description}
                      placeholder="Description"
                      style={{ paddingLeft: "15px" }}
                    />
                  </div>

                  <div style={{ padding: "0px 15px", margin: "none" }}>
                    {note.collaborators.map(colabN => (
                      <Tooltip key={colabN.email} title={colabN.email}>
                        <AccountCircleOutlinedIcon />
                      </Tooltip>
                    ))}
                  </div>

                  <div style={{ fontSize: "small" }}>
                    <div className="noteLogo">
                      <Reminder />
                      <Collaborator
                        collaboratorId={note.id}
                        collaborators={note.collaborators}
                        displayAllNotes={this.props.displayAllNotes}
                        onSave={this.handleApiHit}
                      />
                      <Tooltip title="Change color">
                        <ColorPalette
                          colorNoteId={note.id}
                          onSave={this.handleApiHit}
                        />
                      </Tooltip>
                      <ArchiveNote
                        archiveNoteId={note.id}
                        onSave={this.handleApiHit}
                      />
                      <More
                        trashNoteId={note.id}
                        onSave={this.handleApiHit}
                        displayAllNotes={this.props.displayAllNotes}
                        props={this.props.props}
                      />
                    </div>
                    <div></div>
                  </div>

                  {note.questionAndAnswerNotes.length > 0 ? (
                    <React.Fragment>
                      <h4 style={{ margin: "10px" }}>Asked Question</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: note.questionAndAnswerNotes[0].message
                        }}
                      ></div>
                    </React.Fragment>
                  ) : null}
                </Card>

                <br />
              </div>
            ))}
          </Masonry>

          <DialogBox
            dialogOpen={this.state.open}
            singleNote={this.state.uniqueNote}
            dialogBoxClose={this.handleDialogBoxClose}
            onSave={this.handleApiHit}
            displayAllNotes={this.props.displayAllNotes}
          />
        </div>
      </div>
    );
  }
}
export default DisplayAllNotes;
