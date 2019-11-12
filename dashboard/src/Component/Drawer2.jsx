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
import DisplayTrashNotes from './DisplayTrashNotes';
import './Drawer2.css';


const displayAllNotes=new DisplayAllNotes()
const theme = createMuiTheme({
  overrides:{
  MuiDrawer:{ 
    paper:{
  top:'73px',
  left:'0',
  width:'280px',
  color:'#1D1818',
  }
},
MuiTypography:{
  body1:{
   fontFamily:' Google Sans, Roboto, Arial, sans-serif',
   fontSize:'14px',
   fontWeight:'550',
   lineHeight:'25px',
   color:'rgb(32, 33, 36)'
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
    notes:true,
    reminder:false,
    trash:false,
    label:false,
    archive:false
  }
}
handleNotes=()=>
{
  console.log("Before","Notes",this.state.notes,
  "Reminder",this.state.reminder,
  "Trash",this.state.trash,
  "Archive",this.state.archive,
  "label",this.state.label);

   this.setState({ notes:true,
    reminder:false,
    trash:false,
    label:false,
    archive:false
  });
}

handletReminder=()=>
{
 console.log("Notes",this.state.notes,
  "Reminder",this.state.reminder,
  "Trash",this.state.trash,
  "Archive",this.state.archive,
  "label",this.state.label);

   this.setState({ 
    reminder:true ,
    notes:false,
    trash:false,
    label:false,
    archive:false
   });
}
handleTrash=()=>
{
  console.log("Notes",this.state.notes,
  "Reminder",this.state.reminder,
  "Trash",this.state.trash,
  "Archive",this.state.archive,
  "label",this.state.label);

   this.setState({ trash:true ,
    reminder:false,
    notes:false,
    label:false,
    archive:false
   });
}

handleArchive=()=>
{
  console.log("Notes",this.state.notes,
  "Reminder",this.state.reminder,
  "Trash",this.state.trash,
  "Archive",this.state.archive,
  "label",this.state.label);
   this.setState({ archive:true ,
    reminder:false,
    trash:false,
    label:false,
    notes:false
  });
}

handleLabel=()=>
{
  console.log("Notes",this.state.notes,
  "Reminder",this.state.reminder,
  "Trash",this.state.trash,
  "Archive",this.state.archive,
  "label",this.state.label);
   this.setState({ label:true,
    reminder:false,
    trash:false,
    archive:false,
    notes:false
  });
}



// handleNoteOpen=(bool)=>
// {
//   console.log("calling notes ...")
//   this.props.noteCall(bool)
// }

// handleReminder=()=>{

//    console.log("PARENT==>",this.props.clickedEvent)
//   this.setState( {reminder : !this.state.reminder });
//     console.log("Remminder ###########",this.state.reminder)

//    console.log("Called in dashboard component",this.props.reminder);
//   let event="reminder"
//     this.props.clickedEvent(event);
// }


// handleNote=()=>{
//   let event="allNote"
//     this.props.clickedEvent(event);
//    this.setState( {note : !this.state.note });
//     displayAllNotes.handleNote();
//  }
  

 render()
 {
  console.log("in render method","Notes",this.state.notes,
  "Reminder",this.state.reminder,
  "Trash",this.state.trash,
  "Archive",this.state.archive,
  "label",this.state.label);

     return(
      <div className="drawerName">
      <MuiThemeProvider theme={theme}>
      <Drawer variant="persistent" open={this.props.open}>

        <List >
        {/* <ListItem button onClick={this.handleNote}  > */}
        {/* <ListItem button onClick={()=>this.props.func}  > */}
        <ListItem button onClick={this.handleNotes} notes={this.state.notes} >
          <ListItemIcon >
               <EmojiObjectsOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText> Notes </ListItemText>
         </ListItem>  
        </List> 

        <List>
            <ListItem button
            value={this.state.reminder}
            onClick={this.handletReminder}>
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
            <ListItem button  onClick={this.handleLabel} >
              <ListItemIcon >
                   <InboxIcon /> 
              </ListItemIcon>
              <ListItemText> Edit Label </ListItemText>
          </ListItem>
        </List>
        <Divider/>

        <List>
            <ListItem button  onClick={this.handleArchive} archive={this.state.archive}>
              <ListItemIcon >
                   <ArchiveIcon /> 
              </ListItemIcon>
              <ListItemText> Archive </ListItemText>
          </ListItem>
        </List>


       <List>
            <ListItem button onClick={this.handleTrash} trash={this.state.trash}>
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