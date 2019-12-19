import React, { Component } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import { TrashNotes } from "../UserServices/noteService";
import Tooltip from "@material-ui/core/Tooltip";
class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false,
      popper: false,
      deleteButton: false
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleDeleteNote = async event => {
    await this.setState({
      anchorEl: null,
      deleteButton: !this.state.deleteButton
    });

    let loginToken = localStorage.getItem("token");
    // console.log("delete Note Id=->", this.props.trashNoteId);
    let noteObject = {};
    noteObject.noteIdList = [this.props.trashNoteId];
    noteObject.isDeleted = this.state.deleteButton;
    TrashNotes(noteObject, loginToken)
      .then(data => {
        console.log("Trashed Note DATA==>", data);
        this.props.onSave();
      })
      .catch(err => {
        console.log("Trashed note ERROR==>", err);
      });
  };
  // handleClickLabel = event => {
  //   // const { currentTarget } = event;
  //   console.log("in more click");
  //   this.setState(state => ({
  //     anchorEl: null,
  //     open: !this.state.open,
  //     popper: !this.state.popper
  //   }));
  // };
  handleQuestionAnswer = async event => {
    event.preventDefault();

    await this.setState({
      anchorEl: null
    });
    // let noteObject = {};
    // noteObject.noteIdList = this.props.trashNoteId;
    // getNoteDetails(this.props.trashNoteId)
    //   .then(data => {
    //     console.log("More question Note DATA==>", data);

    //     this.props.onSave();
    //   })
    //   .catch(err => {
    //     console.log("More note ERROR==>", err);
    //   });
    this.props.props.history.push("/QuestionAnswer/" + this.props.trashNoteId);
  };
  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <IconButton onClick={event => this.handleClick(event)}>
          <Tooltip title="More">
            <MoreVertIcon />
          </Tooltip>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={event => this.handleDeleteNote(event)}>
            Delete Note
          </MenuItem>
          <MenuItem onClick={event => this.handleQuestionAnswer(event)}>
            Ask a question
          </MenuItem>
        </Menu>
        {/* <Popper open={this.state.open} popper={this.state.popper}>
          <Card>
           
            <List>
              <ListItem button style={{ fontSize: "12px" }}>
                Delete Note
              </ListItem>
              <ListItem
                button
                onClick={event => this.handleClickLabel(event)}
                style={{ fontSize: "12px" }}
              >
                Add Label
              </ListItem>
            </List>
          </Card>
        </Popper >
    */}
      </div>
    );
  }
}

export default More;
