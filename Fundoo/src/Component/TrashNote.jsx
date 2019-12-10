import React, { Component } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { TrashNotes } from '../UserServices/noteService'
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

class TrashNote extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            deleteButton: false
        }
    }
   
    handleTrash  = () => {

        console.log("Archieve button  click", this.state.deleteButton);
        this.setState({ deleteButton: !this.state.deleteButton })

        let loginToken = localStorage.getItem('token');

        console.log("delete Note Id=->",this.props.trashNoteId);
        let noteObject={}
        //noteObject.id=this.props.archieveNoteId;
        noteObject.noteIdList = [this.props.trashNoteId];
        noteObject.isDeleted=this.state.deleteButton;
        
       TrashNotes(noteObject,loginToken)
        .then(data=>{
            console.log("Trashed Note DATA==>",data);
        })
        .catch(err=>{
            console.log("Trashed note ERROR==>",err); 
        })
    }

    render()
    {
        return(
            <div>
              
            {/* <ListItem button onClick={this.handleTrash}>
                   <DeleteForeverIcon  /> 
           </ListItem> */}

           <Tooltip title="Delete">
                    <IconButton onClick={this.handleTrash}>
                    <DeleteForeverIcon /> 
                    </IconButton>
                </Tooltip>
            </div>
        )
    }
}
export default TrashNote