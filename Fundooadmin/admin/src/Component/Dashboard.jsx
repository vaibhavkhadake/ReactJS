import React, { Component } from "react";
import Button from "react-bootstrap/Button";
// import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import axios from "axios";
// import Pagination from "react-bootstrap/Pagination";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
const { SearchBar } = Search;
const columns = [
  {
    dataField: "firstName",
    text: "First Name"
  },
  {
    dataField: "lastName",
    text: "Last Name"
  },
  {
    dataField: "email",
    text: "Email"
  },
  {
    dataField: "service",
    text: "Service"
  }
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userArray: [],
      basicCount: "",
      advanceCount: ""
    };
  }

  UNSAFE_componentWillMount() {
    this.handleUserList();
    this.handleUserListCount();
  }

  handleUserListCount = () => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    return axios
      .get(
        "http://fundoonotes.incubation.bridgelabz.com/api/user/UserStatics",
        {
          headers: {
            Authorization: token
          }
        }
      )
      .then(response => {
        console.log(
          "user basic service count",
          response.data.data.details[0].count
        );
        console.log(
          "user advance service count",
          response.data.data.details[1].count
        );
        let userBasicCount = response.data.data.details[0].count;
        let userAdvanceCount = response.data.data.details[1].count;
        this.setState({
          basicCount: userBasicCount,
          advanceCount: userAdvanceCount
        });
      })
      .catch(err => {
        console.log("err in all user list", err);
      });
  };

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
    let product = this.state.userArray;
    // let basic = product.filter(basicuser => basicuser.service === "basic");
    // console.log("user array in render", this.state.userArray);
    return (
      <div>
        <ToolkitProvider
          keyField="firstName"
          data={product}
          columns={columns}
          search
        >
          {props => (
            <div>
              <Navbar
                // fixed-top
                // bg="dark"
                // variant="dark"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 50px",
                  backgroundColor: "skyblue"
                }}
              >
                <Navbar.Brand>Fundoo Admin</Navbar.Brand>
                <Button className="logoutButton" onClick={this.handleClick}>
                  Logout
                </Button>
              </Navbar>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  padding: "5px 20px"
                }}
              >
                <Card
                  style={{
                    padding: "20px",
                    margin: "20px",
                    backgroundColor: "#aeccd8c7"
                  }}
                >
                  <b>Basic {this.state.basicCount} </b>
                </Card>
                <Card
                  style={{
                    padding: "20px",
                    margin: "20px",
                    backgroundColor: "#aeccd8c7"
                  }}
                >
                  <b>Advance {this.state.advanceCount}</b>
                </Card>
              </div>
              <Container>
                <SearchBar {...props.searchProps} />
                <BootstrapTable
                  pagination={paginationFactory()}
                  {...props.baseProps}
                />
              </Container>
            </div>
          )}
        </ToolkitProvider>

        {/*
              <BootstrapTable keyField='firstName' data={ product } columns={ columns } pagination={ paginationFactory() } />
            <Pagination>
            <Table responsive striped bordered hover>
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
                </Pagination>*/}
      </div>
    );
  }
}

export default Dashboard;
