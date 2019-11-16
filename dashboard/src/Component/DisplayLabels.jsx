import React, { Component } from 'react'
import { getAllLabels } from '../UserServices/noteService'
import TextField from '@material-ui/core/TextField';
import { ListItemIcon, ListItem, ListItemText } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';





const theme = createMuiTheme({
    overrides: {
MuiInputBase:{
    input254 : {
     fontSize:'7px',
     height: '0',
    margin: '0',
   
     padding: '0px'
   
}
},
MuiListItem:{
    root227:{
        paddingTop: '0px',
    paddingBottom: '0px'
    } 
    }
    }
    })


class DisplayLabels extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            labelArray: []
        }
    }
    componentDidMount() {
        this.handleNote()
    }


    handleDialogBoxClose = () => {
        this.setState({ open: !this.state.open })
    }



    handleNote = () => {

        getAllLabels()
            .then(response => {
                //  console.log("GEWT ALLLL==response",response);
                console.log("GEt==response from USER", response.data.data.details);
                this.labelArray = response.data.data.details;
                console.log(" note array ", this.labelArray);
                this.setState({
                    labelArray: this.labelArray
                })
            })
            .catch(err => {
                console.log("ERROR NOTE DATA =========>", err);
            })
    }

    handleNoteSave = (note) => {
        this.setState({
            open: !this.state.open,
            uniqueNote: note
        })
    }

    render() {
        return (
            <div>
                  <MuiThemeProvider theme={theme}>
                
                {this.state.labelArray.map((text) => (
                    
                   
                     <ListItem button >
                    <ListItemIcon >
                    <FormControlLabel
                        value="end"
                        control={<Checkbox color="primary" />}
                        labelPlacement="end"
                        />
                    </ListItemIcon>
                    <ListItemText style={{fontFamily:'Google Sans, Roboto, Arial, sans-serif',fontSize:'12px'}} >
                    <TextField onClick={() => this.handleNoteSave(text)} 

                        InputProps={{
                            disableUnderline: true
                        }}
                        
                        value={text.label}
                        // margin='normal'
                    />
                    </ListItemText>
                    </ListItem>
               
                ))}
                
                
                </MuiThemeProvider>
            </div>


        )

    }
}


export default DisplayLabels