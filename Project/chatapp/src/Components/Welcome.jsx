import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { getAllUser } from "../services/userServices"
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  handleLogout = () => {
    this.props.history.push("/");
  };
  // componentWillMount()
  // {
  //   this.getUsers()    
  // }
  // getUsers = () => {
  //   getAllUser.getAllUser().then().catch(err => {
  //     console.log("object");
  //   });
    
  // }

  render() {
    return (
      <div>
        <h1> Login successully</h1>
        <Button variant="contained" color="inherit" onClick={this.handleLogout}>
          Logout
        </Button>
      </div>
    );
  }
}

export default Welcome;
