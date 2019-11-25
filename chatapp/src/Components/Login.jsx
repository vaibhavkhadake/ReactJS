import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Sass/Login.css";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChangeName = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };

  handleChangePassword = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };

  handleLogin = () => {
    this.props.history.push("/Register");
  };
  handleRegister = () => {
    this.props.history.push("/Register");
  };

  render() {
    return (
      <div className="mainContainerL">
        <Paper className="paperL">
          <div className="container">
            <div>
              <h2 style={{ textAlign: "center" }}>
                <label style={{ color: "red" }}>C</label>
                <label style={{ color: "brown" }}>h</label>
                <label style={{ color: "blue" }}>a</label>
                <label style={{ color: "brown" }}>t</label>
                <label style={{ color: "red" }}>A</label>
                <label style={{ color: "blue" }}>p</label>
                <label style={{ color: "red" }}>p</label>
              </h2>
            </div>

            <div className="emailL">
              <TextField
                label="Enter Email_ID"
                name="email"
                value={this.state.email}
                onChange={this.handleChangeName}
                margin="normal"
                variant="outlined"
              />
            </div>
            <div className="passwordL">
              <TextField
                label="Enter Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
                margin="normal"
                variant="outlined"
                type="password"
              />
            </div>
            <br />
            <div className="forgetPasswordLink">
              {<Link to={"/ForgotPassword"}>Forgot password?</Link>}
            </div>
            <br />

            <div className="buttonsL">
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleLogin}
              >
                SignIn
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.handleRegister}
              >
                Register
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Login;
