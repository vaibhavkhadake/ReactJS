import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import "./Sass/ResetPassword.css";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { password: "" };
  }
  handleChangePassword = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };
  handleSubmit = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="mainContainerReset">
        <Paper className="paperReset">
          <div>
            <div>
              <h2>Reset Password</h2>
            </div>
            <TextField
              label="Enter new Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
              margin="normal"
              variant="outlined"
              type="password"
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default ResetPassword;
