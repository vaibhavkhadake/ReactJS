import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import axios from "axios";
import "../css/Login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLogined: false
    };
  }
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

  handleLogin = async event => {
    await event.preventDefault();

    let loginData = {};
    loginData.email = this.state.email;
    loginData.password = this.state.password;
    // console.log("object", loginData);
    axios
      .post(
        "http://fundoonotes.incubation.bridgelabz.com/api/user/adminLogin",
        loginData
      )
      .then(response => {
        console.log(response);
        let token = response.data.id;
        console.log(token);
        localStorage.setItem("token", token);
        localStorage.setItem("userId", response.data.userId);
        this.props.history.push("/Dashboard");
        this.setState({ isLogined: true });
      })
      .catch(err => {
        console.log("Error in login", err);
        this.props.history.push("/");
      });
  };

  render() {
    return (
      <div className="main">
        <Container>
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Form className="loginForm">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChangeName}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.handleLogin}
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Login;
