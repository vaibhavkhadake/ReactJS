import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Register.css";
import { register } from "../services/userServices";

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
    let data = {};
    data.firstName = this.state.firstName;
    data.lastName = this.state.lastName;
    data.email = this.state.email;
    data.password = this.state.password;
    register(data)
      .then(response => {
        console.log("response ", response);
        console.log("Register Successfull", response.data);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("register unsuccessfull", err);
        this.props.history.push("/Register");
      });
  };

  render() {
    return (
      <div className="topContainerR">
        <div className="mainContainerR">
          <div className="containerR">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              required
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChangeFirstName}
            />
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              required
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChangeLastName}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              name="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
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
          <div className="buttonssR">
            <button className="registerButtonR" onClick={this.handleRegister}>
              Register
            </button>
          </div>
          <br />
          <div className="alreadyRegister">
            {
              <Link style={{ color: "white" }} to={"/"}>
                Already Register
              </Link>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
