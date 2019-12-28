import React, { Component } from "react";
// import { connect } from "react-redux";
// import { drawer, typedText, view } from "../Redux/Actions";
// import compose from "recompose/compose";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Tooltip from "@material-ui/core/Tooltip";
import AppsIcon from "@material-ui/icons/Apps";

import { Paper } from "@material-ui/core";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import DragIndicatorSharpIcon from "@material-ui/icons/DragIndicatorSharp";
import "./Dashboard.css";
import Keep from "./keep_48dp.png";
import Drawer2 from "./Drawer2";
import ImageLogo from "./ImageLogo";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core";
import TakeANote from "./TakeANote";
import DisplayAllNotes from "./DisplayAllNotes";
import DisplayTrashNotes from "./DisplayTrashNotes";
import DisplayAllArchiveNotes from "./DisplayAllArchiveNotes";
import AddLabel from "./AddLabel";
import ReminderMain from "./ReminderMain";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import { NoteService } from "../UserServices/noteService";
import SearchNote from "./SearchNote";
const notesService = new NoteService();

const theme = createMuiTheme({
  overrides: {
    MuiExpansionPanelSummary: {
      content: {
        margin: "0",
        padding: "0",
        color: "ffff00"
      }
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: "white"
      }
    }
  }
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      open: true,
      refreshIcon: true,
      settingIcon: false,
      imagelogo: false,
      notes: true,
      noteOpen: true,
      trash: false,
      reminder: false,
      label: false,
      archive: false,
      gridView: true,
      listView: true,
      search: ""
    };
  }

  handleView = () => {
    console.log("view in list ", this.state.listView);
    console.log("view in grid ", this.state.gridView);
    this.setState({
      listView: !this.state.listView,
      gridView: !this.state.gridView
    });
  };

  handlenotes = async () => {
    console.log("In notes ", this.state.notes);
    await this.setState({
      notes: true,
      reminder: false,
      trash: false,
      label: false,
      archive: false
    });
  };

  handlereminder = async () => {
    console.log("In notes ", this.state.reminder);
    await this.setState({
      notes: false,
      reminder: true,
      trash: false,
      label: false,
      archive: false
    });
  };

  handletrash = async () => {
    await this.setState({
      notes: false,
      reminder: false,
      trash: true,
      label: false,
      archive: false
    });
    console.log("In trash ", this.state.trash);
  };

  handlelabels = async () => {
    await this.setState({
      notes: false,
      reminder: false,
      trash: false,
      label: true,
      archive: false
    });
  };

  handlearchive = async () => {
    console.log("In archive", this.state.archive);
    await this.setState({
      notes: false,
      reminder: false,
      trash: false,
      label: false,
      archive: true
    });
  };

  handleImageLogo = () => {
    this.setState({ note: !this.state.note });
  };
  handleRefreshIcon = () => {
    this.setState({ refreshIcon: !this.state.refreshIcon });
  };

  handlesettingIcon = () => {
    console.log("dashbpard setting");
    this.setState({ settingIcon: !this.state.settingIcon });
  };

  handleDrawerOpen() {
    this.setState({ open: !this.state.open });
  }

  handleNoteOpen = () => {
    console.log("note open click", this.state.noteOpen);
    this.setState({ noteOpen: !this.state.noteOpen });
  };
  handleSearch = async event => {
    event.preventDefault();

    await this.setState({ search: event.currentTarget.value });
    // this.state.typedText(this.state.search);
    console.log("searched:==>", this.state.search);
  };

  handleNote = () => {
    notesService
      .getAllNoteService()
      .then(response => {
        this.noteArray = response.data.data.data;
        console.log(" note array in Dashboard ", this.noteArray);

        this.setState({ noteArray: this.noteArray });
      })
      .catch(err => {
        console.log("ERROR NOTE DATA =========>", err);
      });
  };

  UNSAFE_componentWillMount() {
    this.handleNote();
  }
  render() {
    let drawer = !this.state.open ? "hideDrawer" : "search2";
    return (
      <div>
        <div className="appBar">
          <div>
            <MuiThemeProvider theme={theme}>
              <div className="onlyAppbar">
                <AppBar position="fixed" color="default" className="onlyAppBar">
                  <Toolbar>
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={() => this.handleDrawerOpen()}
                    >
                      <Tooltip title="Drawer">
                        <MenuIcon />
                      </Tooltip>
                    </IconButton>
                    <div className="keepimage">
                      <img src={Keep} alt="smiely face " />
                    </div>
                    <div className="textkeep">
                      <h2> FunDoo </h2>
                    </div>
                    <Paper>
                      <div className="search">
                        <div className="searchIcon">
                          <SearchIcon
                            className="searchIcon"
                            style={{ paddingLeft: "5px" }}
                          />
                          <InputBase
                            placeholder="search"
                            multiline
                            value={this.state.search}
                            onChange={event => this.handleSearch(event)}
                            style={{ paddingLeft: "15px" }}
                            variant="outlined"
                          />
                        </div>
                      </div>
                    </Paper>

                    <div className="appIcon2">
                      <div className="refreshIcon">
                        <IconButton onClick={this.handleRefreshIcon}>
                          <Tooltip title="Shopping Card">
                            <ShoppingCartTwoToneIcon />
                          </Tooltip>
                        </IconButton>
                      </div>

                      <div className="dragHandleIcon">
                        <IconButton onClick={this.handleView}>
                          <Tooltip title="View">
                            {this.state.listView === true ? (
                              <DragHandleIcon />
                            ) : (
                              <DragIndicatorSharpIcon />
                            )}
                          </Tooltip>
                        </IconButton>
                      </div>

                      <div className="appsIcon">
                        <IconButton>
                          <Tooltip title="Applications">
                            <AppsIcon />
                          </Tooltip>
                        </IconButton>
                      </div>
                      <div className="accountCircle">
                        <ImageLogo props={this.props} />
                      </div>
                    </div>
                  </Toolbar>
                </AppBar>
              </div>
            </MuiThemeProvider>
          </div>

          <div>
            <div className={drawer}>
              <div className="handledrawer">
                <MuiThemeProvider theme={theme}>
                  <Drawer2
                    open={this.state.open}
                    handleReminder={this.handlereminder}
                    handleTrash={this.handletrash}
                    handleArchived={this.handlearchive}
                    handleNotes={this.handlenotes}
                    handleLabels={this.handlelabels}
                    props={this.props}
                  />
                  {this.state.search.length > 0 ? (
                    <div>
                      {this.state.noteArray
                        .filter(
                          notedata =>
                            notedata.title.includes(this.state.search) ||
                            notedata.description.includes(this.state.search)
                        )
                        .map(data => (
                          <SearchNote data={data} />
                        ))}
                    </div>
                  ) : (
                    <div>
                      <div style={{ width: "600px" }}>
                        <TakeANote hitapi={this.handleNote} />
                      </div>

                      {this.state.notes ? (
                        <DisplayAllNotes
                          view={this.state.gridView}
                          displayAllNotes={this.state.noteArray}
                          hitapi={this.handleNote}
                          props={this.props}
                        />
                      ) : null}
                      {this.state.trash ? (
                        <DisplayTrashNotes
                          view={this.state.gridView}
                          hitapi={this.handleNote}
                        />
                      ) : null}
                      {this.state.label ? <AddLabel /> : null}
                      {this.state.reminder ? <ReminderMain /> : null}
                      {this.state.archive ? (
                        <DisplayAllArchiveNotes view={this.state.gridView} />
                      ) : null}
                    </div>
                  )}
                </MuiThemeProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
