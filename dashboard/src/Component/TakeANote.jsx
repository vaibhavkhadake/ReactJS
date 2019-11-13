import React, { Component } from 'react'
import './Notes.css';
import { Paper, InputBase, IconButton } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip';
import ImageIcon from '@material-ui/icons/Image';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddBoxIcon from '@material-ui/icons/AddBox';
import BrushIcon from '@material-ui/icons/Brush';
import Notes from './Notes';



class TakeANote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handleClick = () => {

        this.setState({ open: !this.state.open });
        console.log("note state clicked", this.state.open);
    }


    render() {
        return (
            <div>
                {!this.state.open   ?
                    <div className="noteMain">
                        <Paper >
                                <InputBase placeholder="Take a note" style={{ padding: "10px" }} onClick={this.handleClick}>
                                </InputBase>
                                <Tooltip title="Add image"  style={{ float: "right" }}>
                                    <IconButton>
                                        <ImageIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Drawing" style={{ float: "right" }}>
                                    <IconButton>
                                        <BrushIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="New List" style={{ float: "right" }}>
                                    <IconButton>
                                        <AddBoxIcon />
                                    </IconButton>
                                </Tooltip>
                            
                        </Paper>
                    </div> : (
                        <Notes />
                    )
                }
            </div>
        )
    }
}

export default TakeANote;
