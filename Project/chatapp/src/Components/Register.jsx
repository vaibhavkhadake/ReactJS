import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Sass/Register.css";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  handleChangeFirstName = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };
  handleChangeLastName = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };
  handleChangeEmail = event => {
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

  handleRegister = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="mainContainerR">
        <Paper className="paperR ">
          <div className="containerRegister">
            <h2>Registration Page</h2>
            <div className="firstNameR">
              <TextField
                label="First name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChangeFirstName}
                margin="normal"
                variant="outlined"
              />
            </div>
            <div className="lastNameR">
              <TextField
                label="Last name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChangeLastName}
                margin="normal"
                variant="outlined"
              />
            </div>
            <div className="emailR">
              <TextField
                label="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                margin="normal"
                variant="outlined"
              />
            </div>

            <div className="passwordR">
              <TextField
                label="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
                margin="normal"
                variant="outlined"
                type="password"
              />
            </div>
            <div className="buttonsR">
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleRegister}
              >
                Register
              </Button>
                    </div>
                    <br/>
            <div style={{textAlign:'center'}} >
              {<Link to={"/"}>Back to Login </Link>}
            </div>
            <br />
          </div>
        </Paper>
      </div>
    );
  }
}

export default Register;
