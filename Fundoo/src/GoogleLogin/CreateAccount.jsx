import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
// import Account from "./account.svg";
import axios from "axios";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";

import "./CreateAccount.css";
const theme2 = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        // backgroundColor: "none"
      }
    }
  }
});
class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: {},
      error: {},
      serviceArray: this.props.cardStatus
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event) {
    let field = this.state.field;
    field[event.target.name] = event.target.value;
    this.setState({ field });
  }

  submitForm(event) {
    event.preventDefault();
    if (this.isValid()) {
      //   let field = {};
      //   field["firstName"] = "";
      //   field["lastName"] = "";
      //   field["email"] = "";
      //   field["password"] = "";
      //   field["repassword"] = "";

      //   this.setState({ field: field });

      let userData = {};
      userData.firstName = this.state.field.firstName;
      userData.lastName = this.state.field.lastName;
      userData.email = this.state.field.email;
      userData.password = this.state.field.password;
      userData.repassword = this.state.field.repassword;
      userData.service = "advance";

      console.log(userData);
      axios
        .post(
          "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
          userData
        )
        .then(response => {
          console.log("response in register ", response);
        })
        .catch(err => {
          console.log("Error in CreateAccount", err);
        });
      this.props.history.push("/");
    }
  }

  isValid() {
    let field = this.state.field;
    let error = {};

    let isVal = true;

    if (!field["firstName"]) {
      isVal = false;
      error["firstName"] = "Please enter First Name";
    }
    if (typeof field["firstName"] !== "undefined") {
      if (!field["firstName"].match(/^[a-zA-Z]*$/)) {
        isVal = false;
        error["firstName"] = "Please Enter only alphabets only";
      }
    }
    if (!field["lastName"]) {
      isVal = false;
      error["lastName"] = "Please enter Last Name";
    }
    if (typeof field["lastName"] !== "undefined") {
      if (!field["lastName"].match(/^[a-zA-Z]*$/)) {
        isVal = false;
        error["lastName"] = "Please Enter only alphabets only";
      }
    }

    // if (!field["password"]) {
    //   isVal = false;
    //   error["password"] = "Please enter Password";
    // }
    // if (typeof field["password"] !== "undefined") {
    //   if (
    //     !field["password"].match(
    //       /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{7,20}$/
    //     )
    //   ) {
    //     isVal = false;
    //     error["password"] = "Please enter proper password minimum 8 digits";
    //   }
    // }
    // if (!field["repassword"]) {
    //   isVal = false;
    //   error["repassword"] = "Please enter Password";
    // }
    // if (typeof field["repassword"] !== "undefined") {
    //   if (
    //     !field["repassword"].match(
    //       /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{7,20}$/
    //     )
    //   ) {
    //     isVal = false;
    //     error["repassword"] = "Please enter proper password minimum 8 digits";
    //   }
    // }

    this.setState({
      error: error
    });
    return isVal;
  }

  render() {
    return (
      <div className="mainContainer10">
        <div className="container10">
          <h2 align="left">
            <span style={{ color: "blue" }}>G</span>
            <span style={{ color: "red" }}>O</span>
            <span style={{ color: "yellow" }}>O</span>
            <span style={{ color: "blue" }}>G</span>
            <span style={{ color: "green" }}>L</span>
            <span style={{ color: "red" }}>E</span>
          </h2>
          <h2 style={{ color: "brown" }} align="left">
            Create your Google Account
          </h2>

          <div className="fname10">
            <TextField
              placeholder="Enter First Name"
              name="firstName"
              value={this.state.field.firstName}
              onChange={this.handleChange}
              margin="dense"
              variant="outlined"
            />
            <br />
            <span className="ErrorMessage">{this.state.error.firstName}</span>
          </div>

          <div className="lname10">
            <TextField
              name="lastName"
              placeholder="Enter Last Name"
              value={this.state.field.lastName}
              onChange={this.handleChange}
              margin="dense"
              variant="outlined"
            />
            <br />
            <span className="ErrorMessage">{this.state.error.lastName}</span>
          </div>

          <div className="mobileNumberwidth10">
            <TextField
              name="email"
              placeholder="Enter email "
              value={this.state.field.email}
              onChange={this.handleChange}
              margin="dense"
              variant="outlined"
              fullWidth="5px"
            />
            <br />
            <span className="ErrorMessage">{this.state.error.email}</span>
          </div>

          <div className="password10">
            <TextField
              type="password"
              placeholder="Enter Password "
              name="password"
              value={this.state.field.password}
              onChange={this.handleChange}
              margin="dense"
              variant="outlined"
            />
            <br />
            <span className="ErrorMessage">{this.state.error.password}</span>

            <br />
          </div>
          <div className="repassword10">
            <TextField
              type="password"
              placeholder="Enter Re-Password "
              name="repassword"
              value={this.state.field.repassword}
              onChange={this.handleChange}
              margin="dense"
              variant="outlined"
            />
            <br />
            <span className="ErrorMessage">{this.state.error.repassword}</span>
          </div>

          <div className="registerButton20">
            <Button
              variant="contained"
              color="primary"
              onClick={this.submitForm}
            >
              Submit
            </Button>
            <br />
            <br />
            <br />
            <br />
            <div className="cardMainLogin">
              {this.state.serviceArray.map(data => (
                <div className="cardMainLogin" key={data.id}>
                  <MuiThemeProvider theme={theme2}>
                    <div className="outerCard">
                      {data.id === localStorage.getItem("cardId") ? (
                        <Card
                          className="backCardLogin"
                          style={{ backgroundColor: "orange" }}
                        >
                          <h4 className="addtoCardLogin">Selected</h4>
                        </Card>
                      ) : (
                        <Card className="backCardLogin">
                          <h4 className="addtoCardLogin">ADD TO CARD</h4>
                        </Card>
                      )}

                      <Card className="card2Login">
                        <span
                          style={{
                            fontFamily: "arial",
                            fontSize: "14px",
                            fontWeight: "600"
                          }}
                        >
                          price: ${data.price} per month
                        </span>
                        <br />
                        <span
                          style={{
                            fontFamily: "arial",
                            fontSize: "10px",
                            fontWeight: "normal",
                            color: "blue",
                            display: "flex",
                            paddingLeft: "7px"
                          }}
                        >
                          {data.name}
                        </span>
                        <span
                          style={{
                            fontFamily: "arial",
                            fontSize: "10px",
                            fontWeight: "normal",
                            display: "flex",
                            paddingLeft: "7px"
                          }}
                        ></span>
                        <li
                          style={{
                            fontFamily: "arial",
                            fontSize: "10px",
                            fontWeight: "normal",
                            textAlign: "start",
                            paddingLeft: "7px"
                          }}
                        >
                          ${data.price}/month
                        </li>
                        <li
                          style={{
                            fontFamily: "arial",
                            fontSize: "10px",
                            fontWeight: "normal",
                            textAlign: "start",
                            paddingLeft: "7px"
                          }}
                        >
                          {data.description}
                        </li>
                      </Card>
                    </div>
                  </MuiThemeProvider>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*
        <div className="image10">
          <img src={Account} alt="Smiley face" height="75%" width="100%" />
          <pre align="center"> One account. All of Google working for you.</pre>
            </div>
             */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardStatus: state.cardData
  };
};
export default connect(mapStateToProps)(CreateAccount);
