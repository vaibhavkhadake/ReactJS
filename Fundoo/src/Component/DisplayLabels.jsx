import React, { Component } from "react";
import { getAllLabels, DeleteNotesLabel } from "../UserServices/noteService";
import TextField from "@material-ui/core/TextField";
import { ListItemIcon, ListItem, ListItemText } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      input: {
        fontSize: "12px",
        margin: "0px",
        padding: "0px"
      }
    },
    MuiListItem: {
      root: {
        paddingTop: "0px",
        paddingBottom: "0px"
      }
    }
  }
});
// <FormGroup>
// <FormControlLabel
//   value="end"
//   control={
//     <Checkbox
//       value="checkedA"
//           style={{ padding: "0px",fontSize:"small"  }}
//       color="primary"
//       //   checked={this.state.checkedA}
//       onChange={this.handleChange("checkedA")}
//       //   value="checkedA"
//     />
//   }
//   labelPlacement="end"
// />
// </FormGroup>

class DisplayLabels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      labelArray: [],
      checkedA: false,
      id: ""
    };
  }
  componentDidMount() {
    this.handleNote();
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleDialogBoxClose = () => {
    this.setState({ open: !this.state.open });
  };

  handleNote = () => {
    getAllLabels()
      .then(response => {
        console.log("Get==response from USER", response.data.data.details);
        this.labelArray = response.data.data.details;
        console.log(" note array ", this.labelArray);
        this.setState({
          labelArray: this.labelArray
        });
      })
      .catch(err => {
        console.log("ERROR NOTE DATA =========>", err);
      });
  };

  handleDeleteNote = () => {
    let labelId = {};
    labelId.id = this.state.id;
    console.log("labelid", labelId.id);
    DeleteNotesLabel(labelId)
      .then(response => {
        console.log("response in delete label", response);
      })
      .catch(err => {
        console.log("Delete label error", err);
      });
  };

  handleNoteSave = note   => {
    this.setState({
      open:!this.state.open,
      uniqueNote: note
    });
  };
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          {this.state.labelArray.map((text, index) => (
            <ListItem
              style={{ padding: "0px", width: "fit-content", margin: "0px" }}
              key={index}
            >
              <ListItemIcon
                style={{ padding: "0px", width: "fit-content", margin: "0px" }}
              >
                <DeleteIcon onClick={this.handleDeleteNote} />
              </ListItemIcon>
              <ListItemText
                style={{
                  fontFamily: "Google Sans, Roboto, Arial, sans-serif",
                  fontSize: "6px",
                  padding: "0px",
                  width: "fit-content",
                  margin: "0px"
                }}
              >
                <TextField
                  onClick={() => this.handleNoteSave(text)}
                  InputProps={{
                    disableUnderline: true
                  }}
                  value={text.label}
                />
              </ListItemText>
            </ListItem>
          ))}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default DisplayLabels;
