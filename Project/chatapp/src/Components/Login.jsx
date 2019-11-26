import React, { Component } from "react";
import "./Sass/Login.css";
import { Link } from "react-router-dom";

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
    this.props.history.push("/Welcome");
  };
  handleRegister = () => {
    this.props.history.push("/Register");
  };

  render() {
    return (
      <div className="mainContainerL">
        <div className="containerL">
          <div>
            <h3 style={{ textAlign: "center" }}>
              <label style={{ color: "red" }}>C</label>
              <label style={{ color: "brown" }}>h</label>
              <label style={{ color: "blue" }}>a</label>
              <label style={{ color: "brown" }}>t</label>
              <label style={{ color: "red" }}>A</label>
              <label style={{ color: "blue" }}>p</label>
              <label style={{ color: "red" }}>p</label>
            </h3>
          </div>

          <div className="emailL">
            <input id="ii"
              type="text"
              placeholder="Enter Email_ID"
              name="email"
              value={this.state.email}
              onChange={this.handleChangeName}
            />
          </div>
          <br />
          
          <div className="passwordL">
            <input id="ii"
              label="Enter Password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChangePassword}
              type="password"
            />
          </div>
          <br />
          <div className="forgetPasswordLink">
            {<Link to={"/ForgotPassword"}>Forgot password?</Link>}
          </div>
          <br />
          
          <div className="buttonsL">
            <button
              variant="contained"
              
              onClick={this.handleLogin}
            >
              SignIn
            </button>
            <button
              variant="contained"
          
              onClick={this.handleRegister}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
