import React, { Component } from "react";
import { getAllUser, getChat } from "../services/userServices";
import "../Components/css/Welcome.css";
import io from "socket.io-client";
var localChatHistory = [];
var socket;
var alldata={}
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      chatBoard: false,
      loggedUser: "",
      loggedUserId: "",
      receiver: "",
      receiverId: "",
      messageSent: " ",
      endpoint: "http://localhost:3005/",
      currentMessage: "",
      allMessage: []
    };
  }

  handleReceiver = receiver => {
    console.log("Receved id", receiver._id);
    console.log("sender  id", this.state.loggedUserId);
    console.log("sender ", this.state.loggedUser);
    console.log("receiver ", receiver.firstName + receiver.lastName);
    this.setState({
      chatBoard: !this.state.chatBoard,
      senderId: this.state.loggedUserId,
      sender: this.state.loggedUser,
      receiverId: receiver._id,
      receiver: receiver.firstName + receiver.lastName,
      message: this.state.messageSent
    });
  };

  handleLogout = () => {
    this.props.history.push("/");
  };
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  componentDidMount() {
    getAllUser()
      .then(response => {
        console.log("response is in get all users ==>  ", response.data.result);
        this.setState({
          users: response.data.result,
          loggedUser: localStorage.getItem("loggedUser"),
          loggedUserId: localStorage.getItem("senderId")
        });
      })
      .catch(err => {
        console.log("Error in get all user method in welcome page ", err);
      });

    getChat()
      .then(response => {
        console.log("response in get chat app", response.data);
      })
      .catch(err => {
        console.log("error", err);
      });
  }

  handleSent = () => {
     alldata = {
      senderId: this.state.loggedUserId,
      sender: this.state.loggedUser,
      receiverId: this.state.receiverId,
      receiver: this.state.receiver,
      message: this.state.messageSent
    };
    socket = io(this.state.endpoint);
    socket.emit("messaged", alldata);
    // console.log("message", this.state.messageSent);
    socket.on("readMessage", data => {
      console.log("data message", data);
      this.setState({
        currentMessage: data.result.message,
        messageSent: " "
      });

      var arr = [];
      arr.push(this.state.currentMessage);
      console.log("arr", arr);
      this.state.allMessage.push(arr);
      console.log("all messages", this.state.allMessage);
      console.log(this.state.currentMessage);
      // localChatHistory.push(data);
      // console.log("data in localchathistory==> ", localChatHistory);
    });
  };

  render() {
    console.log("current message", this.state.currentMessage);
    var mess = this.state.allMessage.map(res => {
      return <div> {res}</div>;
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
              {typeof this.state.currentMessage !== "undefined" ? (
                <div className="chatscreen">
                  {this.state.receiver}
                  <div>{mess}</div>
                </div>
              ) : (
                <div className="chatscreen">{this.state.receiver} </div>
              )}

              <div>
                <textarea
                  placeholder="Type message.."
                  name="messageSent"
                  value={this.state.messageSent}
                  onChange={event => this.handleInput(event)}
                  required
                ></textarea>
              </div>
              <div>
                <button className="buttonChatBoard" onClick={this.handleSent}>
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
