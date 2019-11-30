import React, { Component } from "react";
import "./css/ForgotPassword.css";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = () => {};
  render() {
    return (
      <div className="topContainerF">
        <div className="mainContainerForgot">
          <h4>Mail sent to you please check.......</h4>
        </div>
      </div>
    );
  }
}

export default Notification;
