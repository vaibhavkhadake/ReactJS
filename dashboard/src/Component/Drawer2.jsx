import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createMuiTheme } from '@material-ui/core/styles';
import './Drawer2.css';
import DisplayLabels from './DisplayLabels';


const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        top: '73px',
        left: '0',
        width: '280px',
        color: '#1D1818',
      }
    },
    MuiListItem:{
      root227:{
          paddingTop: '0px',
      paddingBottom: '0px'
      } 
      },
    MuiTypography: {
      body1: {
        fontFamily: ' Google Sans, Roboto, Arial, sans-serif',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '25px',
        color: 'rgb(32, 33, 36)'
      }
    },
    MuiList: {
      padding: {
        paddingTop: '0px',
        paddingBottom: '0px'
      }
    }
  }
});

class Drawer2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: true,
      reminder: false,
      trash: false,
      label: false,
      archive: false
    }
  }
  handleNotes = () => {
    this.props.handleNotes()
  }

  handletReminder = () => {
    console.log("Notes", this.state.notes,
      "Reminder", this.state.reminder,
      "Trash", this.state.trash,
      "Archive", this.state.archive,
      "label", this.state.label);

    this.setState({
      reminder: true,
      notes: false,
      trash: false,
      label: false,
      archive: false
    });
  }
  handleTrash = () => {

    console.log(" propes in trash ", this.props);
          this.props.handleTrash()
  }

  handleArchive = () => {
    this.props.handleArchived();
  }

  handleLabel = () => {
    this.props.handleLabels()
  }

  render() {
   
    return (

      <div className="drawerName">
        <MuiThemeProvider theme={theme}>

          <Drawer variant="persistent" open={this.props.open}>
            <List >
              
              <ListItem button onClick={this.handleNotes} notes={this.state.notes}>
                <ListItemIcon >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="gb_Tc"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg>
                </ListItemIcon>
                <ListItemText> Notes </ListItemText>
              </ListItem>
            </List>

            <List>
              <ListItem button
                value={this.state.reminder}
                onClick={this.handletReminder}>
                <ListItemIcon >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="gb_Tc"><path d="M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"></path></svg>
                </ListItemIcon>
                <ListItemText> Reminder </ListItemText>
              </ListItem>
            </List>
            <Divider />

            <List >
            <label style={{ fontSize: '15px', color: 'silver', marginLeft: '15px' }}>
                Labels
          </label>
          <DisplayLabels />
          <ListItem button onClick={this.handleLabel}  >
                <ListItemIcon >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="gb_Tc"><path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path></svg>
                </ListItemIcon>
                <ListItemText> Edit Label </ListItemText>
              </ListItem>
            </List>
            <Divider />

            <List>
              <ListItem button onClick={this.handleArchive} >
                <ListItemIcon >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="gb_Tc"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"></path></svg>
                </ListItemIcon>
                <ListItemText> Archive </ListItemText>
              </ListItem>
            </List>
            <List>
              <ListItem button onClick={this.handleTrash} >
                <ListItemIcon >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="gb_Tc"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>
                </ListItemIcon>
                <ListItemText> Trash </ListItemText>
              </ListItem>
            </List>
            <Divider />
          </Drawer>
        </MuiThemeProvider>
      </div>
    )
  }

}
export default Drawer2