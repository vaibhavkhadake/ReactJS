const mongoose = require("mongoose");
var schema = mongoose.Schema;

let messageSchema = new schema(
  {
    senderId: {
      type: String
    },
    receiverId: {
      type: String
    },
    sender: {
      type: String
    },
    receiver: {
      type: String
    },
    message: {
      type: String
    }
  },
  {
    timestamps: true
  }
);
var messages = mongoose.model("messages", messageSchema);

class MessageModel {
  getAllMessages(body, callback) {
    messages.find(body, (err, data) => {
      if (err) {
        callback(err);
        console.log("errr", err);
      } else {
        console.log("get all messages ", data);
        callback(null, data);
      }
    });
  }

  saveMessages(body, callback) {
    console.log("In save message model body", body);
    var newMessages = new messages({
      senderId: body.senderId,
      receiverId: body.receiverId,
      sender: body.sender,
      receiver: body.receiver,
      message: body.message
    });
    newMessages.save((err, result) => {
      if (err) {
        console.log("error in save", err);

        return callback(err);
      } else {
        console.log("saving message in model", result);

        return callback(null, result);
      }
    });
  }
}
module.exports = { MessageModel };
