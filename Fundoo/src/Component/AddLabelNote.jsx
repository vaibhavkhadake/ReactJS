import React, { Component } from "react";
//import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import DisplayLabels from "./DisplayLabels";

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        display: "flex",
        flexDirection: "column",
       
        width: "fit-content"
        
      }
    },
    MuiListItem: {
      root: {
        padding: "0px"
      }
    }
  }
});

class AddLabelNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: null,
      open: true
    };
  }

  handleClose = () => {
    this.setState({ open: !this.state.open });
  };

  handleEditLabel = event => {
    this.setState({
      label: event.target.value
    });
  };

  handleDoneLabel = () => {};

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Paper style={{ padding: "15px", width: "150px" }}>
            <h5>Label Note</h5>
            {/*  <TextField
              value={this.state.label}
              onChange={this.handleEditLabel}
              autoFocus
              margin="dense"
              label="Label Name"
              fullWidth
    />*/}
            <DisplayLabels />
                    {/*<Button
              onClick={this.handleDoneLabel}
              color="inherit"
              style={{ padding: "0px", width: "fit-content" }}
            >
              Done
            </Button>*/}
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default AddLabelNote;
