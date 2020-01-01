import React, { Component } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { getMyCard, placeOrder } from "../UserServices/noteService";
import "./ShoppingCard.css";
import { Divider, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

function getSteps() {
  return ["SignIn", "Review", "Completed"];
}

class ShoppingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      cardData: "",
      description: "",
      price: "",
      placeOrder: false,
      address: "",
      orderStatus: "",
      id: ""
    };
  }

  handleChangeAddress = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleOrder = () => {
    this.setState({ placeOrder: true, activeStep: 1 });
  };

  handleGetDetails = async () => {
    await getMyCard()
      .then(async response => {
        console.log("In response get my card", response.data.data);
        await this.setState({
          cardData: response.data.data[0],
          description: response.data.data[0].product.description,
          price: response.data.data[0].price,
          orderStatus: response.data.data[0].isOrderPlaced,
          id: response.data.data[0].id
        });
      })
      .catch(error => {
        console.log("In error get my card", error);
      });
  };
  hitApi = () => {
    this.setState({ address: this.state.address });
    let data = {
      cartId: this.state.id,
      address: this.state.address
    };
    placeOrder(data)
      .then(response => {
        console.log("Response in order placed", response);
      })
      .catch(error => {
        console.log("Error in order placed", error);
      });
  };
  handleClose = () => {
    this.props.history.push("/dashboard");
  };
  UNSAFE_componentWillMount() {
    this.handleGetDetails();
  }
  render() {
    console.log(this.props.parcardStatus);
    const steps = getSteps();
    const { activeStep } = this.state;
    return (
      <div className="shoppingCardPaper">
        <div>
          <Button style={{ float: "right" }} onClick={this.handleClose}>
            Close
          </Button>
        </div>
        <div className="firstPart">
          <div className="fundooNotes">Fundoo Notes</div>
          <Stepper
            // style={{ backgroundColor: "silver" }}
            activeStep={activeStep}
            alternativeLabel
          >
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {this.state.activeStep === steps.length ? (
              <div>
                <Typography>All steps completed</Typography>
              </div>
            ) : null}
          </div>
        </div>
        <div className="secondPart">
          {this.state.placeOrder === false ? (
            <h1 style={{ paddingLeft: "50px", justifyContent: "flex-start" }}>
              Shopping Card
            </h1>
          ) : (
            <h3 style={{ paddingLeft: "50px" }}>Review Your Order</h3>
          )}

          <Divider />
          <div className="secondSubPart">
            <div className="secondPart1">
              ${this.state.price} per month Advance
            </div>
            <div className="secondPart2">{this.state.description}</div>
            <div className="secondPart3">${this.state.price} per month</div>
            <div className="secondPart4" onClick={this.handleOrder}>
              {this.state.placeOrder === false ? (
                <div>
                  {" "}
                  <div className="order2">
                    Subtotal (1 Item): {this.state.price}
                  </div>
                  <div className="order"> Proceed to Checkout </div>
                </div>
              ) : (
                <div onClick={this.hitApi}>
                  {" "}
                  <div className="order">Place Your Order</div>
                  <div className="order3">SubTotal:${this.state.price}</div>
                </div>
              )}
            </div>
          </div>
          <Divider />
          <div>
            {this.state.placeOrder === false ? (
              <div
                style={{
                  paddingLeft: "10%",
                  paddingTop: "10px",
                  color: "blue",
                  fontSize: "30px"
                }}
              >
                SubTotal (1 Item ):${this.state.price}
              </div>
            ) : (
              <div className="thirdPart">
                <div
                  style={{
                    backgroundColor: "silver",
                    paddingLeft: "15px"
                  }}
                >
                  <TextField
                    name="address"
                    placeholder="Enter your address"
                    multiline
                    value={this.state.address}
                    onChange={this.handleChangeAddress}
                    margin="normal"
                    InputProps={{
                      disableUnderline: true
                    }}
                  />
                </div>
                <div>
                  <h5>Payment Method</h5>
                  <h3>Cash On Delivery</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCard;
