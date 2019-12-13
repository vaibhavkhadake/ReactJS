import React, { Component } from "react";
import {
  createMuiTheme,
  MuiThemeProvider,
  IconButton,
  Divider,
  Card,
  Popper,
  ListItem,
  List,
  ListItemText
} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";

import { getAllUserList } from "../UserServices/noteService";

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
//     handleOnChange = event => {
//         console.log("In handle on change");
//     this.setState({
//       anchorEl:  event.currentTarget,
//       popper: !this.state.popper
//     });
//   };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCollaborator = event => {
      this.setState({
          [event.target.name]: event.target.value
      });

    let data = {
      searchWord: this.state.data
    };

    getAllUserList(data)
      .then(response => {
        console.log(
          "response in collaborator get user list",
          response.data.data.details
        );

        this.setState({ userList: response.data.data.details });
      })
      .catch(err => {
        console.log("ERROR collaborator DATA =========>", err);
      });

    if (this.state.data.length > 1) {
      this.setState(
          {
          anchorEl:  event.currentTarget,
          popper: true
        },
        () => {
          console.log("poper state ", this.state.popper);
        }
      );
    }
  };

  render() {
    let email = this.state.email;
    let fullName = this.state.firstName + " " + this.state.lastName;

    let userlist = this.state.userList;
    let filterlist = userlist.filter(list => list.email === this.state.data);
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
                    <TextField
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
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Save
                </Button>
              </DialogActions>
                    </MuiThemeProvider>
                    <Popper
                    open={this.state.popper}
                    anchorEl={this.state.anchorEl}
                    style={{ zIndex: "10000" }}
                  >
                    <Card>
                      <List>
                        {filterlist.map((text, index) => (
                          <ListItem key={index}>
                            <ListItemText>{text.email}</ListItemText>
                          </ListItem>
                        ))}
                      </List>
                    </Card>
                  </Popper>
          </Dialog>
        </MuiThemeProvider>
       
      </div>
    );
  }
}

export default Collaborator;
