import React, { Component } from "react";
import "./css/Login.css";
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
        console.log("In login  Successfull => data request", response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("loggedUser", response.data.result);
        localStorage.setItem("senderId", response.data.senderId);
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
      <div className="topContainerL">
        <div className="mainContainerL">
          <div className="container">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              name="email"
              value={this.state.email}
              onChange={this.handleChangeName}
            />
            <label>Password</label>
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
            {
              <Link style={{ color: "white" }} to={"/ForgotPassword"}>
                Forgot Password?
              </Link>
            }
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
