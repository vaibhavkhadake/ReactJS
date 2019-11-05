import React, { Component } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Popper,Card,IconButton, List, ListItem, ClickAwayListener} from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip';

class More extends Component
{
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
                        <Tooltip title="More">
                        <IconButton onClick={(event)=>this.handleClick(event)} >
                                 <MoreVertIcon/>
                        </IconButton>
                         </Tooltip>
                         <Popper open={this.state.open} anchorEl={this.state.anchorEl}>
                        <Card style={{height:'100px' ,width:'150px'}}>
                            <List>
                                
                                <ListItem button style={{fontSize:'12px'}}>Add label</ListItem>
                                <ListItem button style={{fontSize:'12px'}}>Add drawing</ListItem>
                                <ListItem button style={{fontSize:'12px'}}>Show tick boxes</ListItem>
                               
                            </List> 
                            </Card>
                        </Popper>
        </div>
        </ClickAwayListener>
    )
}
}

export default More;