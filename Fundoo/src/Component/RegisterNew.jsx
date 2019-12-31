import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import axios from "axios";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { card, particularCard } from "./Redux/Actions";

import "./RegisterNew.css";
const theme2 = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        // backgroundColor: "none"
      }
    }
  }
});
class RegisterNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: {},
      error: {},
      serviceArray: this.props.cardStatus,
      parArray: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  handleChange(event) {
    let field = this.state.field;
    field[event.target.name] = event.target.value;
    this.setState({ field });
  }
  async submitForm(event) {
    event.preventDefault();
    if (this.isValid()) {
      // let field = {};
      // field["firstName"] = "";
      // field["lastName"] = "";
      // field["email"] = "";
      // field["password"] = "";
      // field["repassword"] = "";

      // this.setState({ field: field });
      await this.setState({ parArray: this.props.parcardStatus });
      // var data = this.state.parArray.map(name => name);
      console.log("data", localStorage.getItem("name"));
      let userData = {};
      userData.firstName = this.state.field.firstName;
      userData.lastName = this.state.field.lastName;
      userData.email = this.state.field.email;
      userData.password = this.state.field.password;
      userData.repassword = this.state.field.repassword;
      userData.service = localStorage.getItem("name");

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

    this.setState({
      error: error
    });
    return isVal;
  }
  handleCard = () => {
    this.props.history.push("/Card");
  };
  handleClick = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="mainBlockk">
        <div className="lnmain">
          <Paper
            style={{
              padding: "0% 5%"
              // minWidth: "600px",
              // minHeight: "500px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={this.handleCard}>Go to card</Button>
            </div>
            <div>
              <h1>
                <span style={{ color: "blue" }}>G</span>
                <span style={{ color: "red" }}>O</span>
                <span style={{ color: "yellow" }}>O</span>
                <span style={{ color: "blue" }}>G</span>
                <span style={{ color: "green" }}>L</span>
                <span style={{ color: "red" }}>E</span>
              </h1>
            </div>
            <div>
              <h2 style={{ color: "brown" }}>Create your Google Account</h2>
            </div>
            <div className="lnname">
              <div className="lnfname">
                <TextField
                  placeholder="Enter First Name"
                  name="firstName"
                  value={this.state.field.firstName}
                  onChange={this.handleChange}
                  margin="dense"
                  variant="outlined"
                />
              </div>
              <div className="lfname">
                <TextField
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={this.state.field.lastName}
                  onChange={this.handleChange}
                  margin="dense"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="lnemail">
              <TextField
                name="email"
                placeholder="Enter email "
                value={this.state.field.email}
                onChange={this.handleChange}
                margin="dense"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="lnpass">
              <div className="lnpassword">
                <TextField
                  type="password"
                  placeholder="Enter Password "
                  name="password"
                  value={this.state.field.password}
                  onChange={this.handleChange}
                  margin="dense"
                  variant="outlined"
                />
              </div>
              <div className="lnrepassword">
                {" "}
                <TextField
                  type="password"
                  placeholder="Enter Re-Password "
                  name="repassword"
                  value={this.state.field.repassword}
                  onChange={this.handleChange}
                  margin="dense"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="lnbutton">
              <Button
                variant="contained"
                color="primary"
                onClick={this.submitForm}
              >
                Register
              </Button>
            </div>
            {this.state.serviceArray.length ? (
              <div className="cardMapping">
                <div className="cardMainLoginnn">
                  {this.state.serviceArray.map(data => (
                    <div className="cardMainLogin" key={data.id}>
                      <MuiThemeProvider theme={theme2}>
                        <div className="outerCard">
                          {data.id === localStorage.getItem("cardId") ? (
                            <Card
                              className="RbackCardLogin"
                              style={{ backgroundColor: "orange" }}
                            >
                              <h4 className="RaddtoCardLogin">Selected</h4>
                            </Card>
                          ) : (
                            <Card className="RbackCardLogin">
                              <h4 className="RaddtoCardLogin">ADD TO CARD</h4>
                            </Card>
                          )}

                          <Card className="Rcard2Login">
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
                                fontSize: "14px",
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
                                fontSize: "14px",
                                fontWeight: "normal",
                                display: "flex",
                                paddingLeft: "7px"
                              }}
                            ></span>
                            <li
                              style={{
                                fontFamily: "arial",
                                fontSize: "14px",
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
                                fontSize: "14px",
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
            ) : null}

            <div className="signInIns">
              <Button onClick={this.handleClick}>
                <h4>Sign In Insted</h4>
              </Button>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardStatus: state.cardData,
    parcardStatus: state.parcardData
  };
};
const mapDispatchToProps = {
  card,
  particularCard
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterNew);
