// import React, { Component } from 'react'
// import { DisplayAllNotes} from './DisplayAllNotes'
// import { NoteService } from '../UserServices/noteService';

// const notesService = new NoteService()
// class GetAllNote extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             noteArray: [],
//             getNotes: false
//         }
//     }
//     // This handler for get all notes
//     handleNote = () => {
//         notesService.getAllNoteService()
//             .then(response => {
//                 console.log(response);
//                 this.noteArray = response.data.data.data;
//                 console.log(" notes array ",this.noteArray);
//                 this.setState({ getNotes: this.noteArray })
//             })
//             .catch(err => {
//                 console.log("ERROR NOTE DATA =========>", err);
//             })
//     }
//     render() {


//         return (
//             <div>
//                 <h1>hi</h1>
//             <DisplayAllNotes AllNotes={getNotes}></DisplayAllNotes>
//             </div>

//         )
//     }

// }

// export default GetAllNote