import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userArray: []
    };
  }
  UNSAFE_componentWillMount() {
    this.handleUserList();
  }
  //   componentDidMount() {
  //     this.handleUserList();
  //   }
  handleUserList = () => {
    const token = localStorage.getItem("token");

    console.log("token", token);

    return axios
      .get(
        "http://fundoonotes.incubation.bridgelabz.com/api/user/getAdminUserList",
        {
          headers: {
            Authorization: token
          }
        }
      )
      .then(response => {
        console.log("user list", response.data.data.data);
        this.userArray = response.data.data.data;
        this.setState({ userArray: this.userArray });
      })
      .catch(err => {
        console.log("err in all user list", err);
      });
  };

  handleClick = () => {
    this.props.history.push("/");
  };
  render() {
    // console.log("user array in render", this.state.userArray);
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Row>
              <Col sm={6}>
                <Navbar.Brand>Fundoo</Navbar.Brand>
              </Col>
              <Col sm={2}>
                <Button className="logoutButton" onClick={this.handleClick}>
                  Logout
                </Button>
              </Col>
            </Row>
          </Container>
        </Navbar>
        <br />

            <Container>
                <Pagination>
          <Table responsive="sm" striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>EmailId</th>
                <th>Services</th>
              </tr>
            </thead>
            <tbody>
                            {this.state.userArray.map((user, index) => (
                  
                <tr key={index}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.service}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          </Pagination>
        </Container>
      </React.Fragment>
    );
  }
}

export default Dashboard;
