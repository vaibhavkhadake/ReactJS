import React, { Component } from 'react'
import { NoteService } from '../UserServices/noteService';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import './DisplayAllNotes.css';
import Reminder from './Reminder';
import More from './More';
import DialogBox from './DialogBox'
import { Tooltip} from '@material-ui/core';
import ColorPalette from './ColorPalette';
import ArchiveNote from './ArchiveNote';
import TrashNote from './TrashNote';
const notesService = new NoteService()


class DisplayAllNotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
        open: false,
        noteArray: [],
        uniqueNote:{},
        isArchived:true  ,
        gridView:false  ,
        listView:true                                                                                                                            
        }
    }
    
    componentDidMount()
    {
        this.handleNote()
        notesService.getAllNoteService()
            .then(response =>
                 {
                this.noteArray = response.data.data.data;
                console.log(" note array ", this.noteArray);
                console.log(" is archive in display notes ", response.data.data.data.title);
                this.setState({ noteArray: this.noteArray,
                     })
            })
            .catch(err => {
                console.log("ERROR NOTE DATA =========>", err);
            })
    }

    handleDialog = (note) => {
        console.log("dialog cliked", this.state.open);
        console.log("UNIQUE NOTE VALUE NOTE",this.state.uniqueNote );
        this.setState({ open: !this.state.open,
                        uniqueNote:note
                    })
    }
    
     handleDialogBoxClose=()=>{
        this.setState({open:!this.state.open})
    }
    
         handleNote = () => {
         notesService.getAllNoteService()
            .then(response =>
                 {
                this.noteArray = response.data.data.data;
                console.log(" note array ", this.noteArray);
                console.log(" is archive in display notes ", response.data.data.data.title);
                this.setState({ noteArray: this.noteArray,
                     })
            })
            .catch(err => {
                console.log("ERROR NOTE DATA =========>", err);
            })
    }

    handleNoteSave=(note)=>{
        this.setState({ open: !this.state.open,
             uniqueNote:note
        })
    }
    render() {
         
         let classes= this.props.view ? "allNotesMain": "allNotesMainColumn";
        var data = this.state.noteArray;
        var allData=data.filter(user=> user.isArchived!==true && user.isDeleted!==true)
        return (
            <div>
                 <div className={classes}>
               {allData.map((text,index) => (
                   <div className="allNotes" key={index} >
                       <Card className="displayNotes" style={{backgroundColor:text.color}}  > 
                           <div>
                           <TextField  onClick={()=>this.handleNoteSave(text)}
                               InputProps={{
                                   disableUnderline: true
                               }}
                               value={text.title}
                               margin='normal'
                               placeholder='Title' 
                               style={{ paddingLeft: "15px" }}
                           />
                           <br/>
                           <TextField onClick={()=>this.handleNoteSave(text)}
                               InputProps={{
                                   disableUnderline: true
                               }}
                               value={text.description}
                               margin='normal'
                               placeholder='Description'
                               style={{ paddingLeft: "15px" }}
                           />
                           </div>
                           <div>
                           <div className="noteLogo">
                          <Reminder/>
                       <Tooltip title="Change color">
                        {/* Passing particular note id */}
                       <ColorPalette
                         colorNoteId={text.id}
                        />
                       </Tooltip>
                                   <ArchiveNote archiveNoteId={text.id} />
                       
                       <TrashNote trashNoteId={text.id} />
                       <More/>
                      </div>        
                      </div>
                       </Card>
                       <br/>
                   </div>
               ))}
                <DialogBox dialogOpen={this.state.open} singleNote={this.state.uniqueNote} dialogBoxClose={this.handleDialogBoxClose} /> 
           </div>
            </div>
        )
    }

}
export default DisplayAllNotes