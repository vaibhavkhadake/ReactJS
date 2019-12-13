import React, { Component } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  Popper,
  Card,
  IconButton,
  List,
  ListItem
} from "@material-ui/core";
// import DisplayLabels from "./DisplayLabels";
import Tooltip from "@material-ui/core/Tooltip";
class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false,
      popper: false
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleClickLabel = event => {
    // const { currentTarget } = event;
    console.log("in more click");
    this.setState(state => ({
      anchorEl: null,
      open: !this.state.open,
      popper: !this.state.popper
    }));
  };
  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <IconButton onClick={event => this.handleClick(event)}>
          <Tooltip title="More">
            <MoreVertIcon />
          </Tooltip>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={event => this.handleClickLabel(event)}>
            Add Label
          </MenuItem>
          <MenuItem onClick={this.handleClose}>Delete Label</MenuItem>
        </Menu>
        <Popper open={this.state.open} popper={this.state.popper}>
          <Card>
            {/* style={{height:'100px' ,width:'100px'}} */}
            <List>
              <ListItem
                button
                onClick={event => this.handleClickLabel(event)}
                style={{ fontSize: "12px" }}
              >
                Add Label
              </ListItem>
              <ListItem button style={{ fontSize: "12px" }}>
                Delete Note
              </ListItem>
            </List>
          </Card>
        </Popper>
      </div>
    );
  }
}

export default More;
