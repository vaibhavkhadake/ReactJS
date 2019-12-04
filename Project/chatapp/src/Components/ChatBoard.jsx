import React, { Component } from "react";
import "../Components/css/ChatBoard.css";
class ChatBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      return (
        <div className="top">
      <div className="main">
        <div>
          <label style={{color:'black'}}>
            <h1>Chat-App</h1>
          </label>
        </div>

        <div>
          <label className="labelChatBoard">
            <b>Message</b>
          </label>
        </div>

        <div>
          <textarea placeholder="Type message.." name="msg" required></textarea>
        </div>

        <div>
          <button type="submit" className="buttonChatBoard">
            Send
          </button>
        </div>
        <div style={{ paddingTop: "5px" }}>
          <button type="submit" className="buttonChatBoard2">
            Cancel
          </button>
        </div>
              </div>
              </div>
    );
  }
}

export default ChatBoard;
