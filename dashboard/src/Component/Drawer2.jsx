import React ,{Component} from 'react';
import {MuiThemeProvider} from '@material-ui/core';

import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  overrides:{
  MuiDrawer:{ 
    paper:{
  top:'68px',
  left:'0',
  width:'280px',
  color:'black'

  }}
  
}
});

class Drawer2 extends Component
{

  
  
 render()
 {
   console.log("this.props.openn"+this.props.open);
   
  
     return(
       
      <div>
      <MuiThemeProvider theme={theme}>
      
      <Drawer variant="persistent" open={this.props.open}>
    
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
      </Drawer>
      </MuiThemeProvider>

         </div>
     )
 }

}
export default Drawer2