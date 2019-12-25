import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
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
        backgroundColor: "silver"
      }
    }
  }
});

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h5">Fundoo Notes</Typography>
            </Toolbar>
          </AppBar>
          <div style={{ display: "flex", margin: "5% 20%" }}>
            <h3
              style={{
                fontFamily: "arial",
                fontSize: "21px",
                fontWeight: "normal"
              }}
            >
              fundooNotes offered. Choose below service to Register.
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly"
            }}
          >
            <MuiThemeProvider theme={theme2}>
              <Card
                style={{
                  maxWidth: "320px",
                  boxSizing: "border-box"
                  //   boxShadow:
                  //     " 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)"
                }}
              >
                <Card
                  style={{
                    maxWidth: "300px",
                    paddingLeft: "20px",
                    boxSizing: "border-box"
                    //   boxShadow:
                    //     " 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "arial",
                      fontSize: "30px",
                      fontWeight: "600"
                    }}
                  >
                    price: $99 per month
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: "arial",
                      fontSize: "20px",
                      fontWeight: "normal",
                      color: "blue"
                    }}
                  >
                    Advance
                  </span>
                  <span
                    style={{
                      fontFamily: "arial",
                      fontSize: "25px",
                      fontWeight: "normal"
                    }}
                  >
                    <li>$99/month</li>
                    <li>
                      Ability to add title, description, images, labels,
                      checklist and colors
                    </li>
                  </span>
                </Card>
              </Card>
              <Card
                style={{
                  maxWidth: "300px",
                  padding: "10px"
                }}
              >
                <span
                  style={{
                    fontFamily: "arial",
                    fontSize: "30px",
                    fontWeight: "600"
                  }}
                >
                  price: $49 per month
                </span>
                <br />
                <span
                  style={{
                    fontFamily: "arial",
                    fontSize: "20px",
                    fontWeight: "normal",
                    color: "blue"
                  }}
                >
                  Basic
                </span>
                <span
                  style={{
                    fontFamily: "arial",
                    fontSize: "25px",
                    fontWeight: "normal"
                  }}
                >
                  <li>$49/month</li>
                  <li>
                    Ability to add title, description, images, labels, checklist
                    and colors
                  </li>
                </span>
              </Card>
            </MuiThemeProvider>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Cards;
