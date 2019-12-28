import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

// import './GooglePassword.css'
import "./GoogleLogin.css";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
// import SnackbarContent from "@material-ui/core/SnackbarContent";
// import WarningIcon from '@material-ui/icons/Warning';
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import { Paper } from "@material-ui/core";
import { connect } from "react-redux";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";

const theme2 = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "none"
      }
    }
  }
});
class GooglePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: { name: "" },
      error: {},
      userData: [],
      snackbaropen: false,
      snackbarmessage: "",
      name: "",
      serviceArray: this.props.cardStatus
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  snackbarclose = () => {
    this.setState({ snackbaropen: false });
  };

  handleChange(event) {
    let field = this.state.field;
    field[event.target.name] = event.target.value;
    this.setState({ field });
  }
  handleCard = () => {
    this.props.history.push("/Card");
  };

  submitForm(event) {
    event.preventDefault();
    if (this.isValid()) {
      let field = {};
      field["username"] = "";
      field["password"] = "";

      console.log(this.state.field);
      axios
        .post(
          "http://fundoonotes.incubation.bridgelabz.com/api/user/login",
          this.state.field
        )
        .then(response => {
          console.log(response);
          this.userData = response.data.data;
          console.log(response.data.userId);
          console.log(response.data.email);
          // console.log("label id",response.data.id);
          let token = response.data.id;
          console.log(token);
          localStorage.setItem("firstName", response.data.firstName);
          localStorage.setItem("lastName", response.data.lastName);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("token", token);
          localStorage.setItem("userId", response.data.userId);
          // localStorage.setItem('id',response.data.id);

          this.setState({ snackbaropen: true, snackbarmessage: "success" });
          this.props.history.push("/dashboard");
        })
        .catch(err => {
          console.log("Error in login", err);
          this.setState({
            snackbaropen: true,
            snackbarmessage: " Login Failed ",
            userData: this.state.userData
          });
        });
    }
  }
  isValid() {
    let field = this.state.field;
    let error = {};

    let isVal = true;

    if (!field["password"]) {
      isVal = false;
      error["password"] = "Please Enter Password";
    }
    if (typeof field["password"] !== "undefined") {
      if (
        !field["password"].match(
          /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{7,20}$/
        )
      ) {
        // console.log(field["password"]);
        isVal = false;
        error["password"] = "Please enter proper password minimum 8 digits";
      }
    }

    if (!field["username"]) {
      isVal = false;
      error["username"] = "Please enter username";
    }
    if (typeof field["firstName"] !== "undefined") {
      if (!field["username"].match(/^[a-zA-Z]*$/)) {
        isVal = false;
        error["username"] = "Please Enter valid username ";
      }
    }
    this.setState({
      error: error
    });
    return isVal;
  }
  componentDidMount() {
    console.log("redux#########", this.props.cardStatus);
  }
  render() {
    return (
      <Paper>
        <div className="container1">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={this.handleCard}>Go to card</Button>
          </div>

          <Snackbar
            open={this.state.snackbaropen}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            autoHideDuration={4000}
            onClose={this.snackbarclose}
            message={<span>{this.state.snackbarmessage}</span>}
            action={[
              <IconButton
                key="close"
                arial-label="close"
                color="inherit"
                onClick={this.snackbarclose}
              />
            ]}
          />

          <h3>
            <span style={{ color: "blue" }}>F</span>
            <span style={{ color: "red" }}>u</span>
            <span style={{ color: "goldenrod" }}>n</span>
            <span style={{ color: "blue" }}>d</span>
            <span style={{ color: "green" }}>o</span>
            <span style={{ color: "red" }}>o</span>
          </h3>

          <p className="h2class">Sign In</p>

          <p>Use your Fundoo Account</p>
          <div className="mnumber">
            <TextField
              name="username"
              placeholder="Enter User Name "
              margin="dense"
              variant="outlined"
              fullWidth
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="ErrorMessage">{this.state.error.username}</div>
          <div>
            <TextField
              required
              type="password"
              placeholder="Enter Password"
              name="password"
              margin="dense"
              variant="outlined"
              fullWidth
              value={this.state.field.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="ErrorMessage">{this.state.error.password}</div>
          <div></div>

          {
            <Link to={"/LearnMore"} className="nav-link">
              Forget email ?{" "}
            </Link>
          }

          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginBottom: "12%"
            }}
          >
            <br />

            <Button
              className="registerButton23"
              variant="contained"
              color="primary"
              onClick={this.submitForm}
            >
              {" "}
              Login{" "}
            </Button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: "12%"
            }}
          >
            <div className="cardMainLogin">
              {this.state.serviceArray.map(data => (
                <div className="cardMainLogin" key={data.id}>
                  <MuiThemeProvider theme={theme2}>
                    <div
                      className="outerCard"
                      onClick={event => this.handleDialogBoxClose(data)}
                    >
                      <Card className="backCardLogin">
                        <h4 className="addtoCardLogin">ADD TO CARD</h4>
                      </Card>
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
                            color: "blue"
                          }}
                        >
                          {data.name}
                        </span>
                        <span
                          style={{
                            fontFamily: "arial",
                            fontSize: "10px",
                            fontWeight: "normal"
                          }}
                        >
                          <li>${data.price}/month</li>
                          <li>{data.description}</li>
                        </span>
                      </Card>
                    </div>
                  </MuiThemeProvider>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}
const mapStateToProps = state => {
  return {
    cardStatus: state.cardData
  };
};
export default connect(mapStateToProps)(GooglePassword);
