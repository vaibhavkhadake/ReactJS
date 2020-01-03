import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import axios from "axios";
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
      advanceCount: "",
      approveAnswer: true,
      message: "",
      answer: [],
      product: true
    };
  }

  UNSAFE_componentWillMount() {
    this.handleUserList();
    this.handleUserListCount();
  }

  handleUserListCount = () => {
    const token = localStorage.getItem("token");
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
        // console.log("user list", response.data.data.data);
        this.userArray = response.data.data.data;
        this.setState({ userArray: this.userArray });
      })
      .catch(err => {
        console.log("err in all user list", err);
      });
  };

  handleAnswer = () => {
    this.setState({ approveAnswer: !this.state.approveAnswer });
    const token = localStorage.getItem("token");

    return axios
      .get(
        "http://fundoonotes.incubation.bridgelabz.com/api/questionAndAnswerNotes/getUnApprovedAnswer",
        {
          headers: {
            Authorization: token
          }
        }
      )
      .then(response => {
        console.log("aprrove answer", response.data.data);
        this.setState({ answer: response.data.data });
        this.acceptAnswer();
      })
      .catch(err => {
        console.log("err aprrove answer", err);
      });
  };

  handleProduct = () => {
    this.setState({ product: !this.state.product });
    this.props.history.push("/Product");
  };

  acceptAnswer = (event, data) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    console.log("data", data.id);
    let approveId = {};
    approveId.parentId = data.id;
    return axios
      .post(
        "http://fundoonotes.incubation.bridgelabz.com/api/questionAndAnswerNotes/approve/" +
          approveId.parentId,
        data,
        {
          headers: {
            "Content-type": "application/json; charset=utf-8",
            Authorization: token
          }
        }
      )
      .then(response => {
        console.log("response in accept answer", response);
      })
      .catch(err => {
        console.log("err in accept answer", err);
      });
  };

  rejectAnswer = (event, data) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    console.log("data in reject", data);
    return axios
      .post(
        "http://fundoonotes.incubation.bridgelabz.com/api/questionAndAnswerNotes/reject/" +
          data.id,
        data,
        {
          headers: {
            "Content-type": "application/json; charset=utf-8",
            Authorization: token
          }
        }
      )
      .then(response => {
        console.log("response in reject answer", response);
      })
      .catch(err => {
        console.log("err in reject answer", err);
      });
  };

  handleClick = () => {
    this.props.history.push("/");
  };
  render() {
    let product = this.state.userArray;
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
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 50px",
                  backgroundColor: "skyblue"
                }}
              >
                <Navbar.Brand>Fundoo Admin</Navbar.Brand>
                <Button id="my-button-two" onClick={this.handleAnswer}>
                  Get UnApproved Answers
                </Button>
                <Button onClick={this.handleProduct}>
                  Get UnApproved Product
                </Button>
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
                    padding: "20px 30px",
                    margin: "20px",
                    backgroundColor: "#aeccd8c7"
                  }}
                >
                  <b>
                    Basic
                    <br /> {this.state.basicCount}{" "}
                  </b>
                </Card>
                <Card
                  style={{
                    padding: "20px",
                    margin: "20px",
                    backgroundColor: "#aeccd8c7"
                  }}
                >
                  <b>
                    Advance
                    <br /> {this.state.advanceCount}
                  </b>
                </Card>
              </div>
              <div>
                {!this.state.approveAnswer ? (
                  <Container>
                    {this.state.answer.map(data => (
                      <Card key={data.id}>
                        <div
                          style={{ paddingLeft: "50px" }}
                          dangerouslySetInnerHTML={{
                            __html: data.message
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around"
                          }}
                        >
                          <Button
                            onClick={event => this.acceptAnswer(event, data)}
                          >
                            Accept
                          </Button>
                          <Button
                            onClick={event => this.rejectAnswer(event, data)}
                          >
                            Reject
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </Container>
                ) : null}
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
      </div>
    );
  }
}
export default Dashboard;
