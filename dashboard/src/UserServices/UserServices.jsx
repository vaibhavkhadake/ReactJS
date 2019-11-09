import axios from 'axios'

export function creteNoteService(data,token)
    {
        console.log("data and token ",data,token);
        return axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',data,
        {
            headers:
            {
                'Content-type': 'application/json; charset=utf-8',
                'Authorization':token
            }
        }
        )
    }

    export function getAllNote(data,token){

//    return  axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList')
//   .then(response => {

//   })
//   .catch(error => {
//     console.log('Error fetching and parsing data', error);
//   });


        console.log("get note in service===>",data,token);
        return axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList'+data,
        
        {
            headers:{token:token}
        })
        }

        export function creteLabelService(data,token)
    {
        console.log("data and token ",data,token);
        return axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',data,
        {
            headers:
            {
                'Content-type': 'application/json; charset=utf-8',
                'Authorization':token
            }
        }
        )
    }

        

    
