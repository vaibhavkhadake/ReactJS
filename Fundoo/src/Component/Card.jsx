import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import "./Card.css";
import PackDetails from "./PackDetails";
import { getService, SelectService } from "../UserServices/noteService";
const theme = createMuiTheme({
  overrides: {
    MuiExpansionPanelSummary: {
      content: {
        margin: "0",
        padding: "0",
        color: "ffff00"
      }
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "orange",
        color: "black",
        paddingLeft: "10%"
      }
    }
  }
});

const theme2 = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "none"
      }
    }
  }
});

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      serviceArray: [],
      data: "",
      data2: ""
    };
  }
  handleClick = () => {
    this.props.history.push("/");
  };

  handleService = () => {
    getService()
      .then(async response => {
        console.log("service response", response.data.data.data);
        await this.setState({ serviceArray: response.data.data.data });
      })
      .catch(error => {
        console.log("Error in service", error);
      });
  };
  UNSAFE_componentWillMount() {
    this.handleService();
  }

  handleDialogBoxClose = async data => {
    console.log("button clicked");
    await this.setState({ open: !this.state.open, data: data });
    console.log("data in card", this.state.data);
    data = { productId: data.id };

    localStorage.setItem("cardId", this.state.data.id);

    SelectService(data)
      .then(async response => {
        console.log("Select service response", response.data.data.details);
        await this.setState({ data2: response.data.data.details });
        localStorage.setItem("name", response.data.data.details.product.name);
      })
      .catch(error => {
        console.log("Error", error);
      });
  };
  render() {
    return (
      <div>
        <div className="mainDiv">
          <MuiThemeProvider theme={theme}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h5">Fundoo Notes</Typography>
              </Toolbar>
            </AppBar>
            <div
              className="messageDiv"
              style={{ display: "flex", margin: "5% 20%" }}
            >
              <h3>fundooNotes offered. Choose below service to Register.</h3>
            </div>
            <div className="cardMain">
              {this.state.serviceArray.map(data => (
                <div className="cardMain" key={data.id}>
                  <MuiThemeProvider theme={theme2}>
                    <div
                      className="outerCard"
                      onClick={event => this.handleDialogBoxClose(data)}
                    >
                      <Card className="backCard">
                        <h4 className="addtoCard">ADD TO CARD</h4>
                      </Card>
                      <Card className="card2">
                        <span
                          style={{
                            fontFamily: "arial",
                            fontSize: "20px",
                            fontWeight: "600"
                          }}
                        >
                          price: ${data.price} per month
                        </span>
                        <br />
                        <span
                          style={{
                            fontFamily: "arial",
                            fontSize: "18px",
                            fontWeight: "normal",
                            color: "blue"
                          }}
                        >
                          {data.name}
                        </span>
                        <span
                          style={{
                            fontFamily: "arial",
                            fontSize: "20px",
                            fontWeight: "normal"
                          }}
                        >
                          <li>${data.price}/month</li>
                          <li>{data.description}</li>
                        </span>
                      </Card>
                    </div>
                  </MuiThemeProvider>
                </div>
              ))}
            </div>
          </MuiThemeProvider>
          <div className="signInInsted">
            <Button onClick={this.handleClick}>
              <h4>Sign In Insted</h4>
            </Button>
          </div>
          <PackDetails
            dialogOpen={this.state.open}
            dialogBoxClose={this.handleDialogBoxClose}
            props={this.props}
            serviceData={this.state.data2}
            serviceArray={this.state.serviceArray}
            getServices={this.handleService}
          />
        </div>
      </div>
    );
  }
}

export default Cards;
