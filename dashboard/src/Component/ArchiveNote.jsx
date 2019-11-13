import React, { Component } from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ArchiveIcon from '@material-ui/icons/Archive';
import { ArchiveNotes } from '../UserServices/noteService'

class ArchiveNote extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            archieveButton: false
        }
    }
   
    handleArchieve = () => {

        console.log("Archieve button  click", this.state.archieveButton);
        this.setState({ archieveButton: !this.state.archieveButton })

        let loginToken = localStorage.getItem('token');
        console.log("Archived Note Id=->",this.props.archiveNoteId);
        let noteObject={}
        
        //noteObject.id=this.props.archieveNoteId;

        noteObject.noteIdList = [this.props.archiveNoteId];
        noteObject.isArchived=true;
        
       ArchiveNotes(noteObject,loginToken)
        .then(data=>{
            console.log("ArchieveNote DATA==>",data);
        })
        .catch(err=>{
            console.log("Archieve note ERROR==>",err);
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