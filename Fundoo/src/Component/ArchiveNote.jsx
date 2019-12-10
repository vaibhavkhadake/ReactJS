import React, { Component } from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ArchiveIcon from '@material-ui/icons/Archive';
import { ArchiveNotes } from '../UserServices/noteService'
import { NoteService } from '../UserServices/noteService';
const notesService = new NoteService()

class ArchiveNote extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            archieveButton: false,
            noteArray:[]
        }
    }
   
    handleArchieve = () => {

        console.log("Archieve button  click", this.state.archieveButton);
        this.setState({ archieveButton: !this.state.archieveButton })

        let loginToken = localStorage.getItem('token');
        console.log("Archived Note Id=->",this.props.archiveNoteId);
        let noteObject={}
       
        noteObject.noteIdList = [this.props.archiveNoteId];
        noteObject.isArchived=this.state.archieveButton;
        // noteObject.notes=true;

       ArchiveNotes(noteObject,loginToken)
        .then(data=>{
            console.log("ArchieveNote DATA==>",data);
        })
        .catch(err=>{
            console.log("Archieve note ERROR==>",err);
        })
    }
    componentDidMount()
    {
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
    render() {
        return (
            <div>
                <Tooltip title="archive">
                    <IconButton onClick={this.handleArchieve}>
                        <ArchiveIcon/>
                    </IconButton>
                </Tooltip>
            </div>
        )
    }
}
export default ArchiveNote