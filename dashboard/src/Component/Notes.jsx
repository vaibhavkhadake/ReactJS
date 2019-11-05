import React, { Component } from 'react'
import './Notes.css';
import { Paper, InputBase,IconButton, ClickAwayListener} from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip';
import ImageIcon from '@material-ui/icons/Image';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import PaletteIcon from '@material-ui/icons/Palette';
import Button from '@material-ui/core/Button';
import Reminder from './Reminder';
import Archive from './Archive';
import More from './More';

// import TakeANote from './TakeANote';
// import ListItemIcon from '@material-ui/core/ListItemIcon';


class Notes extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            createNote:true

        }
        this.onClickSubmit=this.onClickSubmit.bind(this);
    }
    onClickSubmit=()=>{

        this.setState({ createNote: !this.state.createNote });
        console.log("close button",this.state.createNote);
        //  this.props.history.push('/TakeANote');
    }
    onOutsideclick()
    {
    this.setState({
    createNote: true
     })
}
render()
{
    return(
        < ClickAwayListener onClickAway = {
            () => this.onOutsideclick()
          } >
        <div className="noteMain">
           
                <Paper>
                    <paper>
                    <InputBase placeholder="Title"/>    
                    </paper>
                    <br/>
                    <InputBase placeholder="Take a note ..." />
                    <br/>
                        <div className="noteLogo">
                            <Reminder/>
                         <Tooltip title="Change color">
                            <IconButton>
                                <PaletteIcon/>
                            </IconButton>
                         </Tooltip>

                         <Tooltip title="Add image">
                            <IconButton>
                                <ImageIcon/>
                            </IconButton>
                         </Tooltip>

                        <Archive/>

                         <More/>

                         <Tooltip title="Undo">
                            <IconButton>
                                <UndoIcon/>
                            </IconButton>
                         </Tooltip>
                     
                         <Tooltip title="Redo">
                            <IconButton>
                                <RedoIcon/>
                            </IconButton>
                         </Tooltip>    

                        <Button variant="text"  onClick={this.onClickSubmit}>
                          Close
                          {/* <ListItemIcon>{this.state.refreshIcon === true ? <PaletteIcon/> : <TakeANote />}</ListItemIcon> */}
                        </Button>
                        </div>
                </Paper>
        </div>
        </ ClickAwayListener>
    )
}


/* <card>
            <ExpansionPanel>
                <ExpansionPanelSummary>

                <paper>
                    <InputBase placeholder="Title"/>
                    
                    
                    
                            <Tooltip title="Add image" style={{float:"right"}}>
                                    <IconButton>
                                        <ImageIcon/>
                                    </IconButton>
                            </Tooltip>
                            
                                <Tooltip title="Drawing" style={{float:"right"}}>
                                    <IconButton>
                                        <BrushIcon/>
                                    </IconButton>
                                </Tooltip>

                                <Tooltip title="New List" style={{float:"right"}}>
                                    <IconButton>
                                        <AddBoxIcon/>
                                    </IconButton>
                                </Tooltip>
                           
                    </paper>
                   
                </ExpansionPanelSummary>


                <ExpansionPanelDetails>
                    <card>
                <div className="addNote">
                    <InputBase placeholder="Description" />
               </div>
               <br/>
                        <div className="noteLogo">
                        <Tooltip title="Remind Me">
                            <IconButton>
                               <AddAlertTwoToneIcon />
                            </IconButton>
                         </Tooltip>

                         <Tooltip title="Change color">
                            <IconButton>
                                <PaletteIcon/>
                            </IconButton>
                         </Tooltip>

                         <Tooltip title="Add image">
                            <IconButton>
                                <ImageIcon/>
                            </IconButton>
                         </Tooltip>

                         <Tooltip title="Archive">
                            <IconButton>
                                 <ArchiveIcon/>
                            </IconButton>
                         </Tooltip>

                         <Tooltip title="More">
                            <IconButton>
                                 <MoreVertIcon/>
                            </IconButton>
                         </Tooltip>

                         <Tooltip title="Undo">
                            <IconButton>
                                <UndoIcon/>
                            </IconButton>
                         </Tooltip>
                     
                         <Tooltip title="Redo">
                            <IconButton>
                                <RedoIcon/>
                            </IconButton>
                         </Tooltip>

                        <Button variant="text" >
                          Close
                        </Button>

                        </div>
                        </card>
                </ExpansionPanelDetails>
            </ExpansionPanel> 
            </card> */
}

export default Notes;



