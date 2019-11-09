import React ,{Component} from 'react';
import {MuiThemeProvider} from '@material-ui/core';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import {createMuiTheme } from '@material-ui/core/styles';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import DisplayAllNotes from './DisplayAllNotes';

const displayAllNotes=new DisplayAllNotes()
const theme = createMuiTheme({
  overrides:{
  MuiDrawer:{ 
    paper:{
  top:'68px',
  left:'0',
  width:'280px',
  color:'#1D1818',
  fontFamily:'Verdana, Geneva, Tahoma, sans-serif',
  }
},
MuiList:{
  padding:{
    paddingTop:'0px',
    paddingBottom:'0px'
  }
}  
}
});

class Drawer2 extends Component
{
constructor(props)
{
  super(props)
  this.state={
    color:true,
    note:true,
    reminder:false
  }
}
// handleNoteOpen=(bool)=>
// {
//   console.log("calling notes ...")
//   this.props.noteCall(bool)
// }

colorChange=()=>{
  this.setState( {color : !this.state.color });
}


handleReminder=()=>{

  // console.log("PARENT==>",this.props.clickedEvent)
  this.setState( {reminder : !this.state.reminder });
    console.log("Remminder ###########",this.state.reminder)

  // console.log("Called in dashboard component",this.props.reminder);
  let event="reminder"
    this.props.clickedEvent(event);
}


handleNote=()=>{
  let event="allNote"
    this.props.clickedEvent(event);
    // this.props.func
  // console.log("WE ARE IN DRAWER Component ",this.state.note);
   this.setState( {note : !this.state.note });
   displayAllNotes.handleNote();
//   this.props.history.push('/DisplayAllNotes')
 }
  
 render()
 {
  //  console.log("this.props.open"+this.props.open);
     return(
      <div>
      <MuiThemeProvider theme={theme}>
      <Drawer variant="persistent" open={this.props.open}>

        <List >
        {/* <ListItem button onClick={this.handleNote}  > */}
        <ListItem button onClick={()=>this.props.func}  >
       

            {/* <ListItem button  */}
            {/* onClick={this.handleNoteOpen(true) */}
          
          <ListItemIcon >
               <EmojiObjectsOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText> Notes </ListItemText>
         </ListItem>  
        </List>

        <List>
            <ListItem button
            value={this.state.reminder}
            onClick={this.handleReminder}>
              <ListItemIcon >
                   <NotificationsNoneIcon /> 
              </ListItemIcon>
              <ListItemText> Reminder </ListItemText>
          </ListItem>
        </List>
        <Divider/>

        <List>
          <label style={{fontSize:'15px',color:'silver',marginLeft:'15px'}}>
            Labels
          </label>
            <ListItem button>
              <ListItemIcon >
                   <InboxIcon /> 
              </ListItemIcon>
              <ListItemText> Edit Label </ListItemText>
          </ListItem>
        </List>
        <Divider/>

        <List>
            <ListItem button>
              <ListItemIcon >
                   <ArchiveIcon /> 
              </ListItemIcon>
              <ListItemText> Archive </ListItemText>
          </ListItem>
        </List>

        <List>
            <ListItem button>
              <ListItemIcon >
                   <DeleteForeverIcon /> 
              </ListItemIcon>
              <ListItemText> Trash </ListItemText>
          </ListItem>
        </List>
        <Divider/>
      </Drawer>
      </MuiThemeProvider>
         </div>
     )
 }

}
export default Drawer2