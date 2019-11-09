import React, { Component } from 'react'
import { Card, Popper,IconButton,  Tooltip, List, ListItem, Divider, ClickAwayListener } from '@material-ui/core'
import AddAlertTwoToneIcon from '@material-ui/icons/AddAlertTwoTone';


class Reminder extends Component{

    constructor(props)
    {
        super(props)
        this.state={
            open:false,
            anchorEl:null
        }
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
                <Tooltip title='Reminder'>
                <AddAlertTwoToneIcon />
                </Tooltip>
                </IconButton>
                
                        <Popper open={this.state.open} anchorEl={this.state.anchorEl}>
                        <Card style={{height:'130px' ,width:'200px'}}>
                        <List>
                                <ListItem style={{fontSize:'15px'}}>Reminder</ListItem>
                                <Divider/>
                                <ListItem button style={{fontSize:'12px'}}>later</ListItem>
                                <ListItem button style={{fontSize:'12px'}}>tomorrow</ListItem>
                                <ListItem button style={{fontSize:'12px'}}>nextweek</ListItem>
                               
                            </List> 
                            </Card>
                        </Popper>
                
            </div>
            </ ClickAwayListener>
        )
    }

}
export default Reminder