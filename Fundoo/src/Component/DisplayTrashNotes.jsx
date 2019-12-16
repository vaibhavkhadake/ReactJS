import React, { Component } from 'react'
import { getAllTrashNotes  } from '../UserServices/noteService'
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import './DisplayAllNotes.css';

import Reminder from './Reminder';
import More from './More';
import { Tooltip} from '@material-ui/core';
import ColorPalette from './ColorPalette';
// import ArchiveNote from './ArchiveNote';
import TrashNote from './TrashNote';


class DisplayTrashNotes extends Component{
    constructor(props) {
        super(props)
        this.state = {
        open: false,
        noteArray: [],
        uniqueNote:{}
        }
    }
    componentDidMount(){
        this.handleNote()
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
        getAllTrashNotes ()
            .then(response => {
                // console.log(response);
                 this.noteArray = response.data.data.data;
                console.log(" note array ", this.noteArray);
                 this.setState({ noteArray: this.noteArray })
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

    render()
    {
        let classes = this.props.view ? "allNotesMain" : "allNotesMainColumn";
        return(
          
             <div className={classes}>
             {this.state.noteArray.map((text,index) => (
                 <div className="allNotes" key={index}>
                     <Card className="displayNotes" style={{backgroundColor:text.color}}>
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
                     <TrashNote trashNoteId={text.id} /> 
                    {/*   <ArchiveNote archiveNoteId={text.id}/>*/}
                     <More/>
                      
                    </div>        
                         </div>
                     </Card>
                     <br/>
                 </div>
             ))}
 
             </div>
        )
    }
}

export default DisplayTrashNotes