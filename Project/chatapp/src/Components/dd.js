import React, { Component } from 'react';
import './chatapp.css'
import { getallusers } from '../services/userService'
import { getAllMessages } from '../services/userService'
import Message from '../components/Message'
import apiFunc from './ApiFunc'

// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

class ChatApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Names: [],
            messages: "",
            ReceiverId: "",
            ReceiverName: "",
            Messages: [],
            redirect: false,
            flag: false
        }
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })

    }


    renderRedirect = () => {
        if (this.state.redirect) {
            var path = '/'
            this.props.history.push(path)
        }
    }



    async handleReceiverClick(FirstName, _id) {

        await this.setState({
            ReceiverId: _id,
            ReceiverName: FirstName
        })

        this.setState({ flag: true });
        console.log("Receiver data" + this.state.ReceiverId + " " + this.state.ReceiverName);
    }

    componentDidMount() {

        // To make connection with socket
        apiFunc.socketCon()

        this.getUsers()
        

        this.getMessages()
        
        apiFunc.receivedMsg((error, result) => {

            if (result) {

                console.log("result is back...", result);

                var resultArray = [];
                // resultArray.push(result);
                resultArray = this.state.Messages;

                resultArray.push(result)

                this.setState({
                    Messages: resultArray
                })

                console.log("Received Messages are---->", JSON.stringify(this.state.Messages));
            }
            else {
                console.log("Error in received message--->", error);

            }
        })



    }

     // Method for getting all users
    getUsers = () => {
        getallusers().then((res) => {
            console.log("respnse in chat app get all users--> ", res)
            console.log("only users------>", res.data.data);

            this.setState({
                Names: res.data.data
            })
        }).catch((err) => {
            console.log("error in login--> ", err)
        })
    }

    // Method for getting all messages
    getMessages = () => {
        getAllMessages().then((res) => {
            console.log("respnse in chat app get all messages--> ", res)
            console.log("User data with messages------>", res.data.data);

            this.setState({
                Messages: res.data.data
            })
        }).catch((err) => {
            console.log("error in login--> ", err)
        })
    }

    handlechangeall = (event) => {

        // console.log(event.target);

        this.setState({ [event.target.name]: event.target.value })
    }

    // This function executed on click of send button 
    sendClick() {
        // console.log("Receiver data************"+this.state.ReceiverId+" "+this.state.ReceiverName);
        let sendObject = {
            SenderId: localStorage.getItem('SenderId'),
            SenderName: localStorage.getItem('SenderName'),
            ReceiverId: this.state.ReceiverId,
            ReceiverName: this.state.ReceiverName,
            Messages: this.state.messages
        }



        console.log("sendObject------->" + JSON.stringify(sendObject));

        // Function call to emit Object using socket
        apiFunc.Emitfun(sendObject);

        //After sending message, get all messages again
        this.getMessages();

        // To Make input field clear after sending message
        this.setState({ messages: " " })

    }

    // This function executed on click of send button 
    logOutClick() {
        localStorage.clear();
        this.setRedirect();
    }

    render() {
        var mapUserResult = this.state.Names.map(item => {
            return (
                <button id="sideNavButton" onClick={() => this.handleReceiverClick(item.FirstName, item._id)}> {item.FirstName + " " + item.LastName}</button>
            );
        })
        var mapMessageResult = this.state.Messages.map(item => {
            if ((((item.SenderId === localStorage.getItem('SenderId')) && item.ReceiverId === this.state.ReceiverId)) || ((item.SenderId === this.state.ReceiverId && item.ReceiverId === localStorage.getItem('SenderId')))) {
                console.log("item in if " + item.Messages);
                return (
                    <Message senderIdItem={item.SenderId} MessagesItem={item.Messages} />
                );
            }
        })
        console.log("map result" + mapMessageResult);



        return (

            <div className="mainchatdiv">
                <div id="header">
                    <div id="sendername">{localStorage.getItem('SenderName')}</div>
                    <div id="headText">Chat Application</div>
                    <div>
                        {this.renderRedirect()}
                        <button class="LogOutButton" onClick={() => this.logOutClick()}>Log Out</button>
                    </div>
                </div>
                <div className="messageField">
                    <div class="sideNav">
                        {mapUserResult}
                    </div>

                    {this.state.flag ?

                        <div id="field">

                            <div id="ReceiverName">
                                <div id="ReceiverNameText">{this.state.ReceiverName}.</div>
                            </div>
                            <div id="chatField">

                                {mapMessageResult}
                            </div>


                            <div id='inputField'>
                                <input class="input"
                                    onChange={this.handlechangeall}
                                    name="messages"
                                    value={this.state.messages}
                                    placeholder="type here" >
                                </input>
                                <div className="sendButton">
                                    <button id="send" onClick={() => this.sendClick()}>Send</button>

                                </div>
                            </div>
                        </div>

                        :
                        //  null
                        <img src={require('../Assets/img2.png')} alt="Logo" id="imageFlex" />

                    }
                </div>

            </div>


        )
    }
}
export default ChatApp;

import React, { Component } from 'react'

import './chatapp.css'

class Message extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);

    }


    render() {
        //Comparing senderId...if senderId matched then do display->flex end otherwise do display->flex start
        var newStyle = (this.props.senderIdItem === localStorage.getItem('SenderId')) ? "senderMessage" : "reciverMessage"


        return (

            <div
                className={newStyle}
            >
                {this.props.MessagesItem}
            </div>


        )
    }


}

export default Message