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
        console.log("Note Id=->",this.props.archieveNoteId);
        console.log("Note Id=->",this.props.singleNote);
        let noteObject={}
        
        noteObject.id=this.props.archieveNoteId;
       
        noteObject.isArchived=true;
        
       ArchiveNotes(noteObject,loginToken)
        .then(data=>{
            console.log("ArchieveNote DATA==>",data);
            // this.props.refreshedNotesProps();
        })
        .catch(err=>{
            console.log("Archieve note ERROR==>",err);
            // toaster.notify("Error while archieve note", {
            //     position: "top", 
            //     autoClose: 8000,
            // })
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