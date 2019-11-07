import  { Component } from 'react'
import axios from 'axios'
const token = localStorage.getItem('token')
export class NoteService extends Component {

    getAllNoteService() {
        console.log(" service called ");

        return axios.get(`http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList`, {
            headers: {
                'Authorization': token
            }
        })

    }
}