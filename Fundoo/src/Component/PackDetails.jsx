import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider, Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import "./PackDetails.css";
import { getCardDetails } from "../UserServices/noteService";
import { connect } from "react-redux";
import { card, particularCard } from "./Redux/Actions";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}
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
class PackDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      serviceArray: "",
      products: [],
      serviceId1: "",
      serviceId2: "",
      parArray: ""
    };
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleDialogBox = () => {
    this.props.dialogBoxClose();
  };

  getService = async () => {
    await this.setState({
      serviceArray: this.props.serviceArray,
      parArray: this.props.serviceData
    });
    this.props.card(this.state.serviceArray);
    this.props.particularCard(this.state.parArray);
    this.props.getServices();
    console.log("In card pack details", this.props.serviceData);
    getCardDetails(this.props.serviceData)
      .then(response => {
        console.log("In get card details", response);
        this.props.props.history.push("/RegisterNew");
      })
      .catch(error => {
        console.log("in get card details error", error);
      });
  };

  render() {
    return (
      <div className="dialogHandle">
        <Dialog
          open={this.props.dialogOpen}
          onClose={this.handleDialogBox}
          aria-labelledby="responsive-dialog-title"
        >
          <MuiThemeProvider theme={theme}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6"> Advance Pack Details </Typography>
              </Toolbar>
            </AppBar>
            <AppBar position="static" color="default">
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                <Tab label="Feature 1" />
                <Tab label="Feature 2" />
                <Tab label="Feature 3" />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={this.state.value}
              onChangeIndex={this.handleChangeIndex}
            >
              <TabContainer dir={theme.direction}>Content One</TabContainer>
              <TabContainer dir={theme.direction}>Content Two</TabContainer>
              <TabContainer dir={theme.direction}>Content Three</TabContainer>
            </SwipeableViews>
            <div className="endButtons">
              <Button
                onClick={this.handleDialogBox}
                style={{ backgroundColor: "#0e89c2" }}
              >
                Remove
              </Button>

              <Button
                onClick={event => this.getService(event)}
                style={{ backgroundColor: "#0e89c2" }}
              >
                Proceed to checkout
              </Button>
            </div>
          </MuiThemeProvider>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardStatus: state.serviceArray,
    parcardStatus: state.parArray
  };
};
const mapDispatchToProps = {
  card,
  particularCard
};
console.log("mapDispatchToProps", mapDispatchToProps);
export default connect(mapStateToProps, mapDispatchToProps)(PackDetails);
