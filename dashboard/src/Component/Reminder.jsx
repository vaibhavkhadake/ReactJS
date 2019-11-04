import React, { Component } from 'react'
import { Card, Popper } from '@material-ui/core'

class Reminder extends Component{

    constructor()
    {
        super()
        this.state={
            open:false,
        anchorEl:null

        }
    }
    render()
    {
        return(
            <div>
                <Card>
                        <Popper open={this.state.open}>
                            <h4>Reminder</h4>
                        </Popper>


                </Card>
            </div>
        )
    }

}