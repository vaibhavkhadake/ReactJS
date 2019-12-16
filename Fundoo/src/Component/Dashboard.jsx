import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Tooltip from "@material-ui/core/Tooltip";
import AppsIcon from "@material-ui/icons/Apps";
import RefreshIcon from "@material-ui/icons/Refresh";
import { Paper } from "@material-ui/core";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import DragIndicatorSharpIcon from "@material-ui/icons/DragIndicatorSharp";
import CloudDoneIcon from "@material-ui/icons/CloudDone";
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
// import TrashNote from './TrashNote';
// import { NoteService } from '../UserServices/noteService';
// const notesService = new NoteService()

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
      listView: true
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

  handlenotes = () => {
    console.log("In notes ", this.state.notes);
    this.setState({
      notes: true,
      reminder: false,
      trash: false,
      label: false,
      archive: false
    });
  };

  handlereminder = () => {
    console.log("In notes ", this.state.reminder);
    this.setState({
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

  handlelabels = () => {
    this.setState({
      notes: false,
      reminder: false,
      trash: false,
      label: true,
      archive: false
    });
  };

  handlearchive = () => {
    console.log("In archive", this.state.archive);
    this.setState({
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

  render() {
    let drawer = !this.state.open ? "hideDrawer" : "search2";

    // const trash=this.state.trash;
    // const notes=this.state.notes;
    // const archive=this.state.archive;

    //  var button;

    //    if(trash==='true')
    //     {
    //     return (button= <DisplayTrashNotes />);
    //     }
    //     else if(archive==='true')
    //     {
    //       return ( button=<DisplayAllArchiveNotes />);
    //     }
    //     else if(notes==='true')
    //     {
    //       return (button=<DisplayAllNotes
    //          notes={this.props.notes}
    //         />);
    //     }

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
                            style={{ paddingLeft: "15px" }}
                          />
                        </div>
                      </div>
                    </Paper>

                    <div className="appIcon2">
                      <div className="refreshIcon">
                        <IconButton onClick={this.handleRefreshIcon}>
                          <Tooltip title="Refresh">
                            {this.state.refreshIcon === true ? (
                              <RefreshIcon />
                            ) : (
                              <CloudDoneIcon />
                            )}
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

                  <div style={{ width: "600px" }}>
                    <TakeANote />
                  </div>

                  {this.state.notes ? (
                    <DisplayAllNotes view={this.state.gridView} />
                  ) : null}
                  {this.state.trash ? (
                    <DisplayTrashNotes view={this.state.gridView} />
                  ) : null}
                  {this.state.label ? <AddLabel /> : null}
                  {this.state.reminder ? <ReminderMain /> : null}
                  {this.state.archive ? (
                    <DisplayAllArchiveNotes view={this.state.gridView} />
                  ) : null}
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