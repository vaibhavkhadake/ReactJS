import React, { Component } from 'react'
import { NoteService } from '../UserServices/noteService';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import './DisplayAllNotes.css';
import Reminder from './Reminder';
import More from './More';
// import { Tooltip, IconButton } from '@material-ui/core';
import Archive from './Archive';
// import ImageIcon from '@material-ui/icons/Image';
// import PaletteIcon from '@material-ui/icons/Palette';

const notesService = new NoteService()


class DisplayAllNotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteArray: []
        }
    }
    componentDidMount(){
        this.handleNote()
    }
    //This handler for get all notes
         handleNote = () => {
         notesService.getAllNoteService()
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

    render() {
        
        return (

            <div className="allNotesMain">
                {this.state.noteArray.map((text) => (

                    <div className="allNotes">
                        <Card>
                            <div>
                            <TextField
                                disabled
                                value={text.title}
                                margin='normal'
                                placeholder='Title' 
                            />
                            <br/>
                            <TextField
                                disabled
                                value={text.description}
                                margin='normal'
                                placeholder='Description'
                            />
                            </div>
                            <div>
                            <div className="noteLogo">
                           <Reminder/>
                        {/* <Tooltip title="Change color">
                           <IconButton>
                               <PaletteIcon/>
                           </IconButton>
                        </Tooltip>
                        <Tooltip title="Add image">
                           <IconButton>
                               <ImageIcon />
                           </IconButton>
                        </Tooltip> */}
                       <Archive/>
                        <More/>
                       </div>
                                
                            </div>
                        
                        </Card>
                        <br/>
                    </div>
                ))}
                {/* <Notes noteValue={this.state.noteArray}/> */}
            </div>


        )
    }

}

export default DisplayAllNotes