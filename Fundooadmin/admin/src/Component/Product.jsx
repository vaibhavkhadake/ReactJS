import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import axios from "axios";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: ""
    };
  }
  handleBack = () => {
    this.props.history.goBack();
  };
  handleClick = () => {
    this.props.history.push("/");
  };
  handleUserCardList = () => {
    const token = localStorage.getItem("token");
    return axios
      .get(
        "http://fundoonotes.incubation.bridgelabz.com/api/productcarts/userCartList",
        {
          headers: {
            Authorization: token
          }
        }
      )
      .then(async response => {
        console.log(" Response in all user card list", response.data.data);
        await this.setState({ cardData: response.data.data });
      })
      .catch(err => {
        console.log("err in all user card list", err);
      });
  };
  handleAcceptProduct = (event, data) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    console.log("data", data);
    let cardId = {};
    cardId.cartId = data;
    return axios
      .post(
        "http://fundoonotes.incubation.bridgelabz.com/api/productcarts/adminCompleteOrder",
        cardId,
        {
          headers: {
            "Content-type": "application/json; charset=utf-8",
            Authorization: token
          }
        }
      )
      .then(response => {
        console.log("response in accept cart", response);
        this.handleUserCardList();
      })
      .catch(err => {
        console.log("err in accept cart", err);
      });
  };
  handleRejectProduct = (event, data) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    console.log("data", data);
    let cardId = {};
    cardId.cartId = data;
    return axios
      .post(
        "http://fundoonotes.incubation.bridgelabz.com/api/productcarts/adminCancelOrder",
        cardId,
        {
          headers: {
            "Content-type": "application/json; charset=utf-8",
            Authorization: token
          }
        }
      )
      .then(response => {
        console.log("response in accept cart", response);
        this.handleUserCardList();
      })
      .catch(err => {
        console.log("err in accept cart", err);
      });
  };
  UNSAFE_componentWillMount() {
    this.handleUserCardList();
  }
  render() {
    return (
      <div>
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
            <Button onClick={this.handleBack}>Home</Button>
            <Button className="logoutButton" onClick={this.handleClick}>
              Logout
            </Button>
          </Navbar>
        </div>
        <div style={{ marginTop: "50px" }}>
          <Container>
            {this.state.cardData.length ? (
              <div>
                {" "}
                {this.state.cardData.map(data => (
                  <Card key={data.id} style={{ marginTop: "20px" }}>
                    <div style={{ paddingLeft: "50px" }}>
                      {" "}
                      User Name :{data.user.firstName}
                    </div>
                    <div style={{ paddingLeft: "50px" }}>
                      {" "}
                      Service :{data.product.name}
                    </div>
                    <div style={{ paddingLeft: "50px" }}>
                      {" "}
                      Price :{data.product.price}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        paddingBottom: "20px"
                      }}
                    >
                      <Button
                        onClick={event =>
                          this.handleAcceptProduct(event, data.id)
                        }
                      >
                        Accept
                      </Button>
                      <Button
                        onClick={event =>
                          this.handleRejectProduct(event, data.id)
                        }
                      >
                        Reject
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : null}
          </Container>
        </div>
      </div>
    );
  }
}

export default Product;
