import React, { Component } from "react";
import "./Sass/Login.css";
import { Link } from "react-router-dom";
import { loginUser } from "../services/userServices";

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
    let loginData = {};
    loginData.email = this.state.email;
    loginData.password = this.state.password;
    console.log("object", loginData.email);
    loginUser(loginData)
      .then(response => {
        console.log("In login data request", response.data);
        console.log("login successfull", response.data.token);
        if (response.data.status) {
          this.props.history.push("/Welcome");
        }
      })
      .catch(err => {
        console.log("Login Unsuccessfull.....", err);
        this.props.history.push("/");
      });
  };
  handleRegister = () => {
    this.props.history.push("/Register");
  };

  render() {
    return (
      <div>
        <div className="mainContainerL">
          <div className="container">
            <label>
              <b>Email Address </b>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              name="email"
              value={this.state.email}
              onChange={this.handleChangeName}
            />
            <label>
              <b>Password </b>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              name="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
          <div className="forgetPasswordLink">
            {<Link to={"/ForgotPassword"}>Forgot Password?</Link>}
          </div>
          <br />
          <div className="buttonss">
            <button className="loginButton" onClick={this.handleLogin}>
              Login
            </button>
            <button className="registerButton" onClick={this.handleRegister}>
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
