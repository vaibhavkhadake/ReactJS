import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Card from "@material-ui/core/Card";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Divider from "@material-ui/core/Divider";
import "./ImageLogo.css";
import { Tooltip, Button, DialogContent } from "@material-ui/core";
import Keep from "./keep_48dp.png";

class ImageLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
      email: localStorage.getItem("email"),
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName")
    };
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }
  onClickSubmit() {
    this.props.props.history.push("/");
  }

  handleClick = event => {
    const { currentTarget } = event;

    this.setState(state => ({
      anchorEl: currentTarget,
      open: !this.state.open
    }));
  };

  onOutsideclick() {
    this.setState({
      open: false
    });
  }

  render() {
    let email = this.state.email;
    let fullName = this.state.firstName + " " + this.state.lastName;

    return (
      <ClickAwayListener onClickAway={() => this.onOutsideclick()}>
        <div className="mainImageLogo">
          <IconButton onClick={event => this.handleClick(event)}>
            <Tooltip title="ProfilePic">
              <img src={Keep} alt="smiely face " />
            </Tooltip>
          </IconButton>
          <Card>
            <Popper open={this.state.open} anchorEl={this.state.anchorEl}>
              <div className="imageLogo">
                <Paper>
                  <DialogContent>
                    <div className="profilePic">
                      <IconButton
                        style={{ justifyContent: "center" }}
                        onClick={event => this.handleClick(event)}
                      >
                        <Tooltip title="ProfilePic">
                          <img src={Keep} alt="smiely face " />
                        </Tooltip>
                      </IconButton>
                    </div>
                    <Divider />
                    <h4 style={{ textAlign: "center" }}> {fullName} </h4>
                    <p style={{ textAlign: "center" }}> {email} </p>
                    <Divider />
                    <div style={{ margin: "0px auto ", width: "100px" }}>
                      <Button onClick={this.onClickSubmit}> Signout </Button>
                    </div>
                  </DialogContent>
                </Paper>
              </div>
            </Popper>
          </Card>
        </div>
      </ClickAwayListener>
    );
  }
}
export default ImageLogo;
