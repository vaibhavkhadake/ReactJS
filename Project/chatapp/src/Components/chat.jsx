import React, { Component } from "react";
import socketIOClient from "socket.io-client";
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "http://localhost:3005",
      color: ""
    };
  }
 
  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit("change color", this.state.color);
    console.log("send",this.state.color);
  };
    
  setColor = color => {
    this.setState({ color:color });
    console.log("color",color);
  };

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on("change color", col => {
      document.body.style.backgroundColor = col;
    });
    return (
        <div>
        <button onClick={() => this.send()}>change color</button>
        <button onClick={() => this.setColor("blue")}>Blue</button>
        <button onClick={() => this.setColor("red")}>Red</button>
      </div>
    );
  }
}

export default Chat;
