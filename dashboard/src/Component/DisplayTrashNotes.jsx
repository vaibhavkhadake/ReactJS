import React, { Component, Fragment } from 'react'
import { getAllTrashNotes  } from '../UserServices/noteService'
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import './DisplayAllNotes.css';
import Reminder from './Reminder';
import More from './More';
import { Tooltip} from '@material-ui/core';
import ColorPalette from './ColorPalette';
import ArchiveNote from './ArchiveNote';
import TrashNote from './TrashNote';
import DisplayAllNotes from './DisplayAllNotes';
import './DisplayTrashNotes.css'

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
                 this.setState({ noteArray: this.noteArray
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

    render()
    {
        return(
            <Fragment>
             <DisplayAllNotes notes={this.props.noteArray} />
             </Fragment>
        )
    }
}

export default DisplayTrashNotes