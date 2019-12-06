import React, { Component } from "react";
import "./css/Login.css";
import { Link } from "react-router-dom";
import { loginUser } from "../services/userServices";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error:{}
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

  isValid() {
    let error = {};
    let isVal = true;

    if (!this.state.email) {
      isVal = false;
      error["email"] = "Please enter email ";
    }
    if (!this.state.email !== "undefined") {
      if (
        !this.state.email.match(
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        )
      ) {
        isVal = false;
        error["email"] = "Please enter valid  email";
      }
    }

    if (!this.state.password) {
      isVal = false;
      error["password"] = "Please enter Password";
    }
    if (!this.state.password !== "undefined") {
      if (!this.state.password.match(/^.{8,20}$/)) {
        isVal = false;
        error["password"] = "Please enter password more than 8 digit";
      }
    }
    this.setState({
      error: error
    });
    return isVal;
  }

  handleLogin = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      let field = {};
      field["email"] = "";
      field["password"] = "";
      this.setState({ field: field });

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
    }
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
            <span className="ErrorMessage">{this.state.error.email}</span>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              name="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
            <span className="ErrorMessage">{this.state.error.password}</span>
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
