import React,{Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import RefreshIcon from '@material-ui/icons/Refresh';
import SettingsIcon from '@material-ui/icons/Settings';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import CreateIcon from '@material-ui/icons/Create';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import './Dashboard.css';
import Keep from "./keep_48dp.png";

import Drawer from '@material-ui/core/Drawer';



import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;
class Dashboard extends Component
{
  
    
    render()
    {
     
        return(
          <div>
                <div className="appBar">
                <AppBar position="fixed" color="default" >
                  <Toolbar>
                  <IconButton edge="start"  color="inherit" aria-label="menu"> 
                  <MenuIcon />
                  </IconButton>
                  <img src={Keep} alt="smiely face "/>
                            <h2> Keep </h2>
            
                      <div className="search">
                      <SearchIcon className="searchIcon"/>
                      <InputBase placeholder="search" fullWidth="">
                      
                      </InputBase>
                      </div>

           

                      <div className="refreshIcon">
                      <RefreshIcon/><br/>
                      </div>

                      <div className="dragHandleIcon">
                      <DragHandleIcon/>
                      </div>

                      <div className="settingsIcon">
                      <SettingsIcon/>
                      </div>    

                      <div className="appsIcon">
                      <AppsIcon/>
                      </div>

                      <div className="accountCircle">
                      <AccountCircleIcon />
                      </div>

              </Toolbar> 
              </AppBar>
              </div>


{/* <div className="lebels"> */}

{/* <NotificationsNoneIcon/> Reminders <br/>
Labels<br/>
<CreateIcon/>
<label> Edit Label </label> */}
<div  className="drawer" >
<Drawer variant="permanent">
    
        <List>
          {['Notes', 'Reminder'].map((text, index) => (
            <ListItem button key={text}>
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
      </div>
{/* </div> */}


        </div>
        )
    }
}
export default Dashboard;