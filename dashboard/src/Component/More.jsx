import React, { Component } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Popper,Card,IconButton, List, ListItem, ClickAwayListener} from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip';
import DisplayLabels from './DisplayLabels';

class More extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            open:false,
            anchorEl:null,
            label:false
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
handleAddLabel=()=>
{
    this.setState(({
        label: !this.state.label
    }));
    // this.props.history.push('/DisplayLabels');
}

render()
{
    return(
        <ClickAwayListener onClickAway = {
            () => this.onOutsideclick()
          } >
        <div>

            <IconButton onClick={(event)=>this.handleClick(event)}>
            <Tooltip title='More'>
            <MoreVertIcon />
            </Tooltip>
            </IconButton>
                    <Popper open={this.state.open} anchorEl={this.state.anchorEl}>
                    <Card  >
                    {/* style={{height:'100px' ,width:'100px'}} */}
                    <List>
                         <ListItem button onClick={this.handleAddLabel} style={{fontSize:'12px'}}>Add Label</ListItem>
                         <ListItem button style={{fontSize:'12px'}}>Delete Note</ListItem>
                        </List> 
                        </Card>
            </Popper>
            {/* {this.state.label ? <DisplayLabels/>: null} */}
        </div>
      
        </ ClickAwayListener>
    )
}
}

export default More;