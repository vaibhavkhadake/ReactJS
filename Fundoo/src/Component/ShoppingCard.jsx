import React, { Component } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getMyCard } from "../UserServices/noteService";
import "./ShoppingCard.css";
import { Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
// const styles = theme => ({
//   root: {
//     width: "90%"
//   },
//   backButton: {
//     marginRight: theme.spacing.unit
//   },
//   instructions: {
//     marginTop: theme.spacing.unit,
//     marginBottom: theme.spacing.unit
//   }
// });

function getSteps() {
  return ["SignIn", "Review", "Completed"];
}

// function getStepContent(stepIndex) {
//   switch (stepIndex) {
//     case 0:
//       return "Select campaign settings...";
//     case 1:
//       return "What is an ad group anyways?";
//     case 2:
//       return "This is the bit I really care about!";
//     default:
//       return "Unknown stepIndex";
//   }
// }

class ShoppingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      cardData: "",
      description: "",
      price: ""
    };
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleGetDetails = () => {
    getMyCard()
      .then(response => {
        console.log("In response get my card", response.data.data[0].product);
        this.setState({
          cardData: response.data.data[0],
          description: response.data.data[0].product.description,
          price: response.data.data[0].price
        });
      })
      .catch(error => {
        console.log("In error get my card", error);
      });
  };

  UNSAFE_componentWillMount() {
    this.handleGetDetails();
  }
  render() {
    // const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    return (
      <div className="shoppingCardPaper">
        <div className="firstPart">
          <div className="fundooNotes">Fundoo Notes</div>
          <Stepper activeStep={activeStep} alternativeLabel>
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
                <Button onClick={this.handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                {/**  <Typography>{getStepContent(activeStep)}</Typography>
             <div>
                  <Button disabled={activeStep === 0} onClick={this.handleBack}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                  </div>
                   */}
              </div>
            )}
          </div>
        </div>
        <div className="secondPart">
          <h4>Review Your Order</h4>
          <Divider />
          <div className="secondSubPart">
            <div className="secondPart1">
              ${this.state.price} per month Advance
            </div>
            <div className="secondPart2">{this.state.description}</div>
            <div className="secondPart3">${this.state.price} per month</div>
            <div className="secondPart4">
              <div className="order">Place Your Order</div>
              <div className="order2">SubTotal:${this.state.price}</div>
            </div>
          </div>
          <Divider />
          <div>
            <div>
              <TextField
                id="filled-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax="4"
                value={this.state.multiline}
                onChange={this.handleChange("multiline")}
                margin="normal"
                helperText="hello"
                variant="filled"
              />
            </div>
            <div>Cash On Delivery</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCard;
