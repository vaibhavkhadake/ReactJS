import React ,{Component} from 'react';
import {MuiThemeProvider} from '@material-ui/core';

import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { createMuiTheme } from '@material-ui/core/styles';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';


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
    color:true
  }
}
colorChange(){
  this.setState( {color : !this.state.color });

}
 render()
 {
   console.log("this.props.openn"+this.props.open);
     return(
      <div>
      <MuiThemeProvider theme={theme}>

      {/* <Drawer variant="persistent" open={this.props.open}>
        <List>
          {['Notes', 'Reminder'].map((text, index) => (
            <ListItem button key={text} >
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Edit labels'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </List>
           <Divider />
        <List>
          {['Archive','Bin'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>     */}
      
      <Drawer variant="persistent" open={this.props.open}>
        <List>
            <ListItem button >
              <ListItemIcon >
                   <EmojiObjectsOutlinedIcon /> 
              </ListItemIcon>
              <ListItemText > Notes </ListItemText>
          </ListItem>
        </List>

        <List>
            <ListItem button>
              <ListItemIcon >
                   <NotificationsNoneIcon /> 
              </ListItemIcon>
              <ListItemText> Reminder </ListItemText>
          </ListItem>
        </List>
        <Divider/>

        <List>
          <label style={{fontSize:'15px', color:'silver',marginLeft:'15px'}}>
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
              <ListItemText>  Trash </ListItemText>
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