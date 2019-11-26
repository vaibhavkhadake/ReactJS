import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import "./Sass/ForgotPassword.css";
class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  handleChangeName = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };

  handleSubmit = () => {
    this.props.history.push("/ResetPassword");
  };

  render() {
    return (
      <div className="mainContainerForgot">
        <Paper className="paperForgot">
          <h2> Forgot Password </h2>
          <TextField
            label="Enter Email-Address"
            name="email"
            value={this.state.email}
            onChange={this.handleChangeName}
            margin="normal"
            variant="outlined"
          />
          <div className="buttonForgot">
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleSubmit}
            >
              Verify
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default ForgotPassword;
