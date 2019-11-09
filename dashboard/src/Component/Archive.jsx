import React, { Component } from 'react'
import { Snackbar,IconButton,Tooltip } from '@material-ui/core'
import ArchiveIcon from '@material-ui/icons/Archive';
import Button from '@material-ui/core/Button';

import CloseIcon from '@material-ui/icons/Close';
import { ArchiveNotes } from '../UserServices/noteService';
import ArchiveNote from './ArchiveNote';



class Archive extends Component{
    state = {
        open: false,
      };
    
      handleClick = () => {
        this.setState({ open: true });
      };
    
      handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({ open: false });
      };
 render()
 {
     return(
         <div>

                    <Tooltip title="Archive">
                            {/* <IconButton onClick={this.handleClick}> */}
                                 {/* <ArchiveIcon/> */}
                                 <ArchiveNote/>
                                
                            {/* </IconButton> */}
                         </Tooltip> 

                <Snackbar open={this.state.open}
                 autoHideDuration={2000}
                onClose={this.handleClose}
                message={<span>Note archived</span>}
                anchorOrigin={{vertical:'bottom' ,horizontal:'left'}}
                action={[
                    <Button  color="secondary" size="small" onClick={this.handleClose}>
                      UNDO
                    </Button>,
                    <IconButton onClick={this.handleClose} >
                      <CloseIcon />
                    </IconButton>
                  ]}

                >
             </Snackbar>
         </div>
     )
 }

}

export default Archive;