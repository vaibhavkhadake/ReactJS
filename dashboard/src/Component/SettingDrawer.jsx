import React ,{Component} from 'react'
import {MuiThemeProvider} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { createMuiTheme } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';



const theme = createMuiTheme({
    overrides:{
    MuiDrawer:{ 
      paper:{
    top:'68px',
    right:'0',
    width:'150px',
    height:'350px'
  
    }}
  }
  });
class SettingDrawer extends Component{
   
    render()
    {
        return(
            <div>
                <MuiThemeProvider theme={theme}>
                 <Drawer variant="persistent" settingsIcon={this.props.settingsIcon}>
                      
                      <List>
                      {['Setting', 'EnableDarkTheme','Sent Feedback','Help'].map((text) => (
                        <ListItem button key={text}>
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

export default SettingDrawer;