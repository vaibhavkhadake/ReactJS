import React, { Component } from "react";
import "./css/ResetPassword.css";
import { resetPassword } from "../services/userServices";


class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { password: "" };
  }
  handleChangePassword = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };
  handleSubmit = () => {
    let data = {};
    data.password = this.state.password;
    let token = this.props.match.params.token;
    resetPassword(data,token).then(response => {
      console.log("Response ", response);
      console.log("Response data", response.data);
      this.props.history.push("/");
    })
      .catch(err=> {
        console.log("Error in new password setting", err);
        this.props.history.push('/ResetPassword')
    })
   
  };

  render() {
    return (
      <div className="topContainerRR">
        <div className="mainContainerReset">
          <div className="containerRR">
            <label>
            Password 
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              required
              name="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
            <div className="verifyButtonssRR">
              <button className="verifyButtonRR" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
