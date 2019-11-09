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

export function creteLabel(data,token)
    {
        console.log("data and token ",data,token);
        return axios.post('http://fundoonotes.incubation.bridgelabz.com/api/noteLabels',data,
        {
            headers:
            {
                'Content-type': 'application/json; charset=utf-8',
                'Authorization':token
            }
        }
        )
    }

export function getAllLabels()
{
    return axios.get(`http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/getNoteLabelList`),{
        headers:
        {
            'Authorization': token

        }
    }
}

export function UpdateNotes(data,token)
    {
        console.log("data and token ",data,token);
        return axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes',data,
        {
            headers:
            {
                'Content-type': 'application/json; charset=utf-8',
                'Authorization':token
            }
        }
        )
    }

    export function TrashNotes(data,token)
    {
        console.log("data and token ",data,token);
        return axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes',data,
        {
            headers:
            {
                'Content-type': 'application/json; charset=utf-8',
                'Authorization':token
            }
        }
        )
    }

    export function ChangeColorNotes(data,token)
    {
        console.log("data and token ",data,token);
        return axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes',data,
        {
            headers:
            {
                'Content-type': 'application/json; charset=utf-8',
                'Authorization':token
            }
        }
        )
    }

    export function ArchiveNotes(data,token)
    {
        console.log("data and token ",data,token);
        return axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/notes/archiveNotes',data,
        {
            headers:
            {
                'Content-type': 'application/json; charset=utf-8',
                'Authorization':token
            }
        }
        )
    }