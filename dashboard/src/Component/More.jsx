import React, { Component } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Popper,Card,IconButton, List, ListItem, ClickAwayListener, Button} from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip';

class More extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            open:false,
            anchorEl:null,
            addLabel:false
        }
    }

    handleAddLabel=()=>{
        console.log("add label buttton clicked",this.state.addLabel);
        
        this.setState({
            addLabel: !this.state.addLabel
        });
    }

    handleClick=event=>{

        const { currentTarget } = event;
        console.log("add label buttton clicked in anchor tag",this.state.addLabel);
             this.setState(state => ({
                  anchorEl: currentTarget,
                  open: !this.state.open,
             }));
    }
    onOutsideclick()
    {
        console.log("click away listerner");
    this.setState({
    open: false
     })
}
handleCreateLabel=()=>
{

}

render()
{
    return(
        // < ClickAwayListener onClickAway = {
        //     () => this.onOutsideclick()
        //   } >
        <div>
                        <Tooltip title="More">
                        <IconButton 
                       onClick={(event)=>this.handleClick(event)} 
                         >
                                 <MoreVertIcon onclick={this.handleAddLabel}/>
                        </IconButton>
                         </Tooltip>
                         <Popper open={this.state.open} anchorEl={this.state.anchorEl}>
                        <Card style={{height:'100px' ,width:'150px'}}>
                        <Button onclick={this.handleAddLabel}>Add Label</Button>

                            {/* <List>
                               
                                
                                <ListItem button onclick={this.handleAddLabel} style={{fontSize:'12px'}}>Add label</ListItem>
                                <ListItem button style={{fontSize:'12px'}}>Add drawing</ListItem>
                                <ListItem button style={{fontSize:'12px'}}>Show tick boxes</ListItem>
                               
                            </List>  */}
                            </Card>
                        </Popper>
        </div>
        // </ClickAwayListener>
    )
}
}

export default More;