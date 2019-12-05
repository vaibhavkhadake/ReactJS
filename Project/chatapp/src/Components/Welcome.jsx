import React, { Component } from "react";
import { getAllUser } from "../services/userServices";
import "../Components/css/Welcome.css";
import io from "socket.io-client";
var localChatHistory = [];

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      chatBoard: false,
      loggedUser: undefined,
      loggedUserId: undefined,
      receiver: undefined,
      receiverId: undefined,
      messageSent: " ",
      endpoint:"http://localhost:3005"
    };
  }
  handleSent = () => {
    const socket = io(this.state.endpoint);
    socket.emit("messaged",this.state.messageSent);
   console.log("message",this.state.messageSent);
  };
  handleReceiver = receiver => {
    console.log("Receved id", receiver._id);
    console.log("receiver name", receiver.firstName + receiver.lastName);
    this.setState({
      chatBoard: !this.state.chatBoard,
      receiverId: receiver._id,
      receiver: receiver.firstName + receiver.lastName
    });
  };
  // handleUser = () => {
  //   this.setState({
  //     chatBoard: !this.state.chatBoard
  //   });
  // };
  handleLogout = () => {
    this.props.history.push("/");
  };
  handleInput = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  componentDidMount() {
    getAllUser()
      .then(response => {
        console.log("response is in get all users  ", response.data);
        this.setState({
          users: response.data.result,
          loggedUser: localStorage.getItem("loggedUser"),
          loggedUserId: localStorage.getItem("senderId")
        });
      })
      .catch(err => {
        console.log("Error in get all user method ", err);
      });
  }

  render() {
    const socket=io(this.state.endpoint)
    socket.on("readMessage", data => {
      localChatHistory.push(data);
      console.log("data in localchathistory==> ", localChatHistory);
    });
    const users = this.state.users;
    const usersAvailabe = users.filter(
      user => user._id !== this.state.loggedUserId
    );
    return (
      <div className="topContainerW">
        <div className="appbar">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label style={{ fontSize: "25px", margin: "20px" }}>
              <b>Chat-App</b>
            </label>
            <div className="verifyButtonssW">
              <label style={{ fontSize: "20px", margin: "10px" }}>
                {this.state.loggedUser}
              </label>
              <button className="verifyButtonW" onClick={this.handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="ccc">
          <div className="mainContainerW">
            <label style={{ fontSize: "18px" }}>User List</label>
            <h2>
              {usersAvailabe.map((data, index) => (
                <label key={index} onClick={() => this.handleReceiver(data)}>
                  <button className="userlist">
                    {data.firstName + " " + data.lastName}
                  </button>
                  <br />
                </label>
              ))}
            </h2>
          </div>
          {this.state.chatBoard !== false ? (
            <div className="main">
              <div className="chatscreen">{this.state.receiver}{this.state.messageSent}</div>
              <div>
                <textarea
                  placeholder="Type message.."
                  name="messageSent"
                  value={this.state.messageSent}
                  onChange={this.handleInput}
                  required
                ></textarea>
              </div>

              <div>
                <button className="buttonChatBoard" onClick={(event)=>this.handleSent(event)}>
                  Send
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Welcome;
