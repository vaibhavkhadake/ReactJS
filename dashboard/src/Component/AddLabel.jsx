import React, { Component } from 'react'
import { InputBase, Paper } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { createMuiTheme, MuiThemeProvider, Divider } from "@material-ui/core";
import { creteLabel } from '../UserServices/noteService';

import DialogTitle from '@material-ui/core/DialogTitle';


const theme = createMuiTheme({
    overrides: {
        'MuiPaper': {
            'root': {
                display: "flex",
                flexDirection: "column",
                marginTop: "15%",
                width: '30%',
                minHeight: "30px",
                margin: '80px auto',
                paddingBottom: '20px',
            }
        },
    }
})


class AddLabel extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            label:null,
            open:true
        }
    }
    handleClickOpen = () => {
        
      };
    
    handleClose = () => {
        this.setState({ open:!this.state.open})
      };

      handleEditLabel = (event) => {
        
        this.setState({ 
            label: event.target.value });
    };

    handleDoneLabel=()=>{
        let loginToken = localStorage.getItem('token');
        let labelObject = {}
     
        labelObject.label = this.state.label;

        creteLabel(labelObject, loginToken)
            .then(data => {
                console.log(" Label created sucessfully ", data.data);
            })
            .catch(err => {
                console.log("Error in label create", err);
            })
            this.setState({ open:!this.state.open})
    }


    
    render()
    {
    return(
            <MuiThemeProvider theme={theme}>
            <div>
               <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle>Add Label</DialogTitle>
             <DialogContent>

          <TextField
            value={this.state.label}
            onChange={this.handleEditLabel}
            autoFocus
            margin="dense"
            label="Label Name"
            fullWidth
          />
         
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleDoneLabel} color="inherit">
          Done
          </Button>
        </DialogActions>
      </Dialog>
                    


                
                      

                
            </div>
            </MuiThemeProvider>
        )
    }
}
export default AddLabel