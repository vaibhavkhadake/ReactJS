import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'

import './Dashboard.css'

class DashboardHome extends Component {
 
  render() {
    
    return (

      <div >
        <div className="dashboard">
        <AppBar position="static" >
          <Toolbar className="button">
            <IconButton color="inherit" >
              <MenuIcon />
            </IconButton>
            <h2 className="news">News</h2>
            <Button className="button" color="inherit">Login</Button>
          </Toolbar>
        </AppBar >
        <button className="button">DemoButton</button>
      </div>
      </div>
    )
  }
}
export default DashboardHome
// 8726348652