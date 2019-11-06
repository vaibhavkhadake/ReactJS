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
import TakeANote from './TakeANote';
import { creteNoteService } from '../UserServices/UserServices';
import { getAllNote } from '../UserServices/UserServices';
 
// import TakeANote from './TakeANote';
// import ListItemIcon from '@material-ui/core/ListItemIcon';


class Notes extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            createNote:false,
            title:null,
            description:null
        }
        this.onClickSubmit=this.onClickSubmit.bind(this);
    }

    onClickSubmit=(event)=>{
        event.preventDefault();
        this.setState({ createNote: !this.state.createNote });
        let noteData={};
        noteData.title="";
        noteData.description="";
        console.log("close button event",noteData);
    }
                onOutsideclick()
                {
                this.setState({
                createNote: true
                })
                 }

            handleChangeTitle=(event)=>{
                this.setState( {[event.target.name]: event.target.value} )
            }
            handleChangeDescription=(event)=>{
            let description=event.target.value;
            this.setState({description})
            console.log("desciptionchange",description);

            }
            // This handler for get all notes
                handleNote = () => {
                let loginToken = localStorage.getItem('token')
                console.log("GET TOKEN FROM LOCAL STORAGE===>", loginToken);
               // let param = "isTrashed=false&isArchieved=false"
                getAllNote( loginToken)
                .then(data => {
                console.log("NOTE DATA======>", data.data.data);
                this.setState({createNote:data.data.data})
                })
                .catch(err => {
                console.log("NOTE DATA ERROR=========>", err);

                })
                }

            handleCreateNote=()=>
            {
                this.setState({ createNote: !this.state.createNote });

                 let loginToken=localStorage.getItem('token');
                let nodeObject={};
                nodeObject.title=this.state.title;
                nodeObject.description=this.state.description;

            
                creteNoteService(nodeObject,loginToken)
                .then(data=>{
                    console.log("created node data",data.data);
                }
                    )
                .catch(error=>{
                    console.log("created node Error",error);
                })

            }

render()
{
    return(
        < ClickAwayListener onClickAway = {
            () => this.onOutsideclick()
          } >
              {!this.state.createNote ?

               <div className="noteMain">
           
               <Paper>
                   <paper>
                   <InputBase placeholder="Title"
                   name="title"
                   value={this.state.title}
                   onChange={this.handleChangeTitle}
                   />    
                   </paper>
                   <br/>
                   <InputBase placeholder="Description"
                   name="description"
                   value={this.state.description}
                   onChange={this.handleChangeDescription}
                   />
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
                       <Button variant="text"  onClick={this.handleNote}>
                           {/* onClick={this.handleCreateNote} */}
                         Close
                       </Button>
                       </div>
               </Paper>
               </div> : <TakeANote/>

              }
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



