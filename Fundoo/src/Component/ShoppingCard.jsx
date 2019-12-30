import React, { Component } from "react";

import "./ShoppingCard.css";

class ShoppingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0
    };
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };
  render() {
    return (
      <div className="shoppingCardPaper">
        <div className="firstPart">
          <div className="fundooNotes">Fundoo Notes</div>

          <div>stepper</div>
        </div>
      </div>
    );
  }
}

export default ShoppingCard;
