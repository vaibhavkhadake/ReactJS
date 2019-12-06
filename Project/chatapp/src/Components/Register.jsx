import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Register.css";
import { register } from "../services/userServices";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",

    error: {}
  };
  isValid() {
    let error = {};

    let isVal = true;

    if (!this.state.firstName) {
      isVal = false;
      error["firstName"] = "Please enter First Name";
    }
    if (!this.state.firstName !== "undefined") {
      if (!this.state.firstName.match(/^[a-zA-Z]*$/)) {
        isVal = false;
        error["firstName"] = "Please Enter only alphabets only";
      }
    }
    if (!this.state.lastName) {
      isVal = false;
      error["lastName"] = "Please enter Last Name";
    }
    if (!this.state.lastName !== "undefined") {
      if (!this.state.lastName.match(/^[a-zA-Z]*$/)) {
        isVal = false;
        error["lastName"] = "Please Enter only alphabets only";
      }
    }

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

  handleRegister = event => {
    event.preventDefault();
    if (this.isValid()) {
      let field = {};
      field["firstName"] = "";
      field["lastName"] = "";
      field["email"] = "";
      field["password"] = "";
      this.setState({ field: field });

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
    }
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
            <span className="ErrorMessage">{this.state.error.firstName}</span>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChangeLastName}
              required
            />
            <span className="ErrorMessage">{this.state.error.lastName}</span>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              name="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
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
