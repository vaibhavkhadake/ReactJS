import React,{Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Tooltip from '@material-ui/core/Tooltip';
import AppsIcon from '@material-ui/icons/Apps';
import RefreshIcon from '@material-ui/icons/Refresh';
import { Paper} from '@material-ui/core'
import DragHandleIcon from '@material-ui/icons/DragHandle';
import DragIndicatorSharpIcon from '@material-ui/icons/DragIndicatorSharp';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import './Dashboard.css';
import Keep from "./keep_48dp.png";
import Drawer2 from './Drawer2';
import ImageLogo from './ImageLogo';
import { createMuiTheme } from '@material-ui/core/styles';
import {MuiThemeProvider} from '@material-ui/core';
import TakeANote from './TakeANote';


  const theme = createMuiTheme({
  overrides:{
    MuiExpansionPanelSummary:{ 
      content:{
        margin:'0',
        padding:'0',
        color:'silver'

  }},
  MuiAppBar:{
    colorDefault: {
      backgroundColor:'white'
    }
  }
}
});

class Dashboard extends Component
{
  constructor(props){
    super(props)
    this.state={
      open:true,
      list:true,
      refreshIcon:true,
       settingIcon:false,
       imagelogo:false,
       note:true
    }
  }

  handleImageLogo=()=>{
    this.setState({ note: !this.state.note });
  }
  handleRefreshIcon=()=>{

    this.setState({ refreshIcon: !this.state.refreshIcon });
  }
  handleListView=()=>{

    this.setState({ list: !this.state.list });

  }
  handlesettingIcon=()=>{
    console.log("dashbpard setting");
    this.setState({ settingIcon: !this.state.settingIcon });
  }
  
  handleDrawerOpen() {    
    this.setState({ open: !this.state.open });
  }
    
    render()
    {
        return(
          <div>
                <div className="appBar">
                <MuiThemeProvider theme={theme}>
                <AppBar position="fixed" color="default" >
                  <Toolbar>
                  <Drawer2 open={this.state.open}/>
                  <IconButton edge="start"  color="inherit"  onClick={()=>this.handleDrawerOpen()} > 
                 <Tooltip title="Drawer">
                  <MenuIcon />
                  </Tooltip>
                  </IconButton>
                  <div className="keepimage">
                  <img src={Keep} alt="smiely face "/>
                  </div>
                  <div className="textkeep">
                  <h2> Keep </h2>
                  </div>       
                  <Paper fullWidth="" style={{float:'right'}}> 
                      <div className="search">
                          <div className="searchIcon">
                            <SearchIcon className="searchIcon"/>
                             <InputBase placeholder="search" fullWidth="" />
                      </div>
                      </div>
                      </Paper>
                      <div className="refreshIcon">
                      <Tooltip  title="Refresh">
                      <IconButton onClick={this.handleRefreshIcon}>
                      <ListItemIcon>{this.state.refreshIcon === true ? <RefreshIcon/> : <CloudDoneIcon />}</ListItemIcon>
                      </IconButton>
                      </Tooltip>
                      </div>

                      <div className="dragHandleIcon">
                      <Tooltip  title="View">
                      <IconButton onClick={this.handleListView}>
                      <ListItemIcon>{this.state.list === true ? <DragHandleIcon /> : <DragIndicatorSharpIcon />}</ListItemIcon>
                      </IconButton>
                      </Tooltip>
                      </div>

                      <div className="settingsIcon">
                       
                      {/* <SettingsIcon /> */}
                     
                        {/* <SettingDrawer settingIcon={this.state.settingIcon}/>
                        <IconButton edge="start"  color="inherit" aria-label="menu" onClick={()=>this.handlesettingIcon()} >
                        <SettingsIcon />
                        </IconButton> */}
                        
                      
                      </div>    

                      <div className="appsIcon">
                      <Tooltip  title="Applications">
                      <IconButton >
                      <AppsIcon />
                      </IconButton>
                      </Tooltip>
                      </div>

                      <div className="accountCircle">
                        <ImageLogo props={this.props} />
                        
                      </div>

              </Toolbar> 
              
              </AppBar>
              </MuiThemeProvider>
            
           <div className="search2">
           <MuiThemeProvider theme={theme}>
             <TakeANote />
           </MuiThemeProvider>
           </div>


              
</div>
   
        </div>
        )
    }
}
export default Dashboard;