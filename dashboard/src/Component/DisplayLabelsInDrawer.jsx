import React, { Component } from 'react'
import { getAllLabels } from '../UserServices/noteService'
import TextField from '@material-ui/core/TextField';
import { ListItemIcon, ListItem, ListItemText } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core';
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


class DisplayLabelsInDrawer extends Component {
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="gb_Tc"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></svg>
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


export default DisplayLabelsInDrawer