import React, { Component } from 'react'
import './Notes.css';
import { Paper, InputBase,IconButton} from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip';
import AddAlertTwoToneIcon from '@material-ui/icons/AddAlertTwoTone';
import ImageIcon from '@material-ui/icons/Image';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import PaletteIcon from '@material-ui/icons/Palette';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';


class Notes extends Component
{
    onClickSubmit(){
        
        this.props.history.push('/TakeANote');
    }
render()
{
    return(
        <div className="noteMain">
           
                <Paper >
                    <paper>
                    <InputBase placeholder="Title"/>    
                    </paper>
                    <br/>
                    <InputBase placeholder="Take a note ..." />
                    <br/>

                        <div className="noteLogo">
                        <Tooltip title="Remind Me">
                            <IconButton onClick={this.props.open}>
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
                        <Button variant="text"  onClick={this.onClickSubmit}>
                          Close
                        </Button>

                        </div>
                </Paper>
           
        </div>
    )
}
}

export default Notes;



{/* <card>
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
            </card> */}