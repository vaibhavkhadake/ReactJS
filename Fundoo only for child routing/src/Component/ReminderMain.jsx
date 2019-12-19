import React, { Component } from 'react'
import { Card } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';

class ReminderMain extends Component{
    constructor(props) {
        super(props)
        this.state = {
        noteArray: []
        }
    }
render()
{
    
    return(
        <div>
            {this.state.noteArray.map((text ,index) => (
            <Card key={index}>
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
            </Card>
            ))
        }
        </div>

    )
}
}

export default ReminderMain