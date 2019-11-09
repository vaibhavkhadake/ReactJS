import React, { Component } from 'react'
import { Card, Paper, Divider, InputBase, Button } from '@material-ui/core'

class CreateLabel extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            createLabel=false,
            label=null

        }
        this.onClickSubmit=this.onClickSubmit.bind(this);
    }
    onClickSubmit=(event)=>{
        event.preventDefault();
        // this.setState({ createNote: !this.state.createNote });
        let labelData={};
        noteData.label="";
      
        console.log("close button event",labelData);
    }

    handleLabel=()=>
    {
        this.setState({ createLabel: !this.state.createLabel });
        let loginToken=localStorage.getItem('token');
        let labelObject={};
        labelObject.label=this.state.label;
      
        // creteLabelService(labelObject,loginToken)
        // .then(data=>{
        //     console.log("created label data",data.data);
        // }
        //     )
        // .catch(error=>{
        //     console.log("created label Error",error);
        // })

    }

    
    render()
    {
        return(
            <div>
                <Card>
                    <Paper> 
                        <h4>Edit Labels</h4>
                        <Divider/>
                        <Button variant="text">close</Button>
                        <InputBase laceholder="LabelName"
                                    name="label"
                                    value={this.state.label}
                                    onChange={this.handleLabel}
                        />
                        <br/>
                        <Divider/>
                        <Button variant="text">Done</Button>




                    </Paper>
                </Card>
                
            </div>
        )
    }
}
export default CreateLabel