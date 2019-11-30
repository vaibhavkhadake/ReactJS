import React, { Component } from "react";
import "./css/ForgotPassword.css";
import { forgotPassword } from "../services/userServices";
class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  handleChangeName = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };

  handleSubmit = () => {
    let data = {};
    data.email = this.state.email;
    forgotPassword(data)
      .then(response => {
        console.log("response", response);
        console.log(" Link sent to your mail please check", response.data);
        this.props.history.push("/Notification");
      })
      .catch(err => {
        console.log("Please enter registered email", err);
        this.props.history.push("/ForgotPassword");
      });
  };

  render() {
    return (
      <div className="topContainerF">
        <div className="mainContainerForgot">
          <div className="containerF">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              name="email"
              value={this.state.email}
              onChange={this.handleChangeName}
            />
            <div className="verifyButtonss">
              <button className="verifyButton" onClick={this.handleSubmit}>
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
