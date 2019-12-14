import React, { Component } from "react";
import {
  createMuiTheme,
  MuiThemeProvider,
  IconButton,
  Divider,
  ListItem,
  MenuList,
  InputBase
} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";

import { getAllUserList, AddCollaborator } from "../UserServices/noteService";

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        display: "flex",
        flexDirection: "column",

        width: "100%",
        minHeight: "30px"
      }
    }
  }
});
const theme2 = createMuiTheme({
  overrides: {
    MuiButtonBase: {
      root: {
        border: "1px solid",
        size: "small"
      }
    },
    MuiIconButton: {
      sizeSmall: {
        size: "small"
      }
    }
  }
});


class Collaborator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      email: localStorage.getItem("email"),
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      data: "",
      userList: [],
      popper: false,
      anchorEl: null
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleCollaborator = event => {
    this.setState({
      [event.target.name]: event.target.value
    });

    var data = {
      searchWord: this.state.data
    };

    getAllUserList(data)
      .then(response => {
        console.log(
          "response in collaborator get user list",
          response.data.data.details
        );
        var list = response.data.data.details;
        this.setState({ userList: list });
      })
      .catch(err => {
        console.log("ERROR collaborator DATA =========>", err);
      });

    if (this.state.data.length > 1) {
      this.setState(
        {
          anchorEl: event.currentTarget,
          popper: true
        },
        () => {
          console.log("popper state ", this.state.popper);
        }
      );
    }
  };

  handleClose = () => {
    this.setState({ open: false });
    let nodeObject = {};
    nodeObject.id = this.props.collaboratorId;
    nodeObject.email = this.state.data;

    AddCollaborator(nodeObject)
      .then(data => {
        console.log("collaborator data", data.data);
      })
      .catch(error => {
        console.log("collaborator Error", error);
      });
  };
  render() {
    let email = this.state.email;
    let fullName = this.state.firstName + " " + this.state.lastName;

    var collaboratorsList = this.state.userList.map(item => {
      return (
        <div>
          <ListItem
            style={{ border: "none" }}
            button
            onClick={this.handleClose}
          >
            {item.email}
          </ListItem>
        </div>
      );
    });
    console.log("user list", collaboratorsList);

    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Tooltip title="Collaborator">
            <IconButton>
              <PersonAddOutlinedIcon onClick={this.handleClickOpen} />
            </IconButton>
          </Tooltip>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <MuiThemeProvider theme={theme2}>
              <DialogTitle id="form-dialog-title">Collaborators</DialogTitle>
              <Divider />
              <DialogContent>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div>
                    <IconButton>
                      <PersonOutlineTwoToneIcon />
                    </IconButton>
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <b>{fullName}</b>
                    <i>(Owner)</i>
                    <DialogContentText>{email}</DialogContentText>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <IconButton>
                    <PersonOutlineTwoToneIcon />
                  </IconButton>
                  <div style={{ marginLeft: "20px" }}>
                    <InputBase
                      autoFocus
                      margin="dense"
                      name="data"
                      value={this.state.data}
                      placeholder="Person email to share with"
                      type="text"
                      fullWidth
                      onChange={event => this.handleCollaborator(event)}
                    />
                  </div>
                </div>
                <div>
                  <MenuList
                    open={this.state.popper}
                    anchorEl={this.state.anchorEl}
                    style={{ zIndex: "4000", border: "none" }}
                  >
                    {collaboratorsList}
                  </MenuList>
                </div>
              </DialogContent>

              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Save
                </Button>
              </DialogActions>
            </MuiThemeProvider>
            <div></div>
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Collaborator;
