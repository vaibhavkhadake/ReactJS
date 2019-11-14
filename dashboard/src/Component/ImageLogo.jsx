import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Card from '@material-ui/core/Card';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import './ImageLogo.css';
import { Tooltip, Button } from '@material-ui/core';
import Keep from "./keep_48dp.png";

class ImageLogo extends Component{
    constructor(props)
    {
    super(props)
    this.state={
        open:false,
        anchorEl:null
    }
    this.onClickSubmit = this.onClickSubmit.bind(this);
    }
    onClickSubmit(){
         this.props.props.history.push('/GooglePassword');
    }
    
    handleClick=event=>{

        const { currentTarget } = event;

             this.setState(state => ({
                 anchorEl: currentTarget,
                 open: !this.state.open,
             }));
    }

    onOutsideclick()
    {
    this.setState({
    open: false
     })
}

render()
{
    return(
        < ClickAwayListener onClickAway = {
            () => this.onOutsideclick()
          } >
          <div>
             
                    <IconButton onClick={(event)=>this.handleClick(event)}>
                        <Tooltip title='ProfilePic'>
                        <img src={Keep} alt="smiely face " />
                    {/* <AccountCircleIcon /> */}
                    </Tooltip>
                    </IconButton>
                    <Card>
                    <Popper open={this.state.open} anchorEl={this.state.anchorEl}>
                    <div className="imageLogo">
                            <Paper>
                                <div className="profilePic">
                                        <IconButton style={{justifyContent:'center'}} onClick={(event)=>this.handleClick(event)}>
                                        <Tooltip title='ProfilePic'>
                                         <img src={Keep} alt="smiely face " />
                                         </Tooltip>
                                     </IconButton>
                                </div>   
                                    <Divider/> 
                                    <h4 style={{textAlign:'center'}}> Vaibhav Khadake </h4>
                                    <p style={{textAlign:'center'}}> vaibhavkhadake12@gmail.com </p>
                                    <Divider/>
                                    <Button   className="signoutButton"  onClick={this.onClickSubmit} > Signout </Button>
                          
                            </Paper>
                            </div>
                    </Popper>
                    </Card>
                   
          </div>
            </ ClickAwayListener>
    )
}
}
export default ImageLogo;