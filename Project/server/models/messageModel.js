const mongoose = require("mongoose");
let schema = mongoose.Schema;

let messageSchema = new schema(
  {
    senderId: {
      type: String,
      trim: true
    },
    receiverId: {
      type: String,
      trim: true
    },
    sender: {
      type: String,
      trim: true
    },
    receiver: {
      type: String,
      trim: true
    },
    message: {
      type: String,
      trim: true
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
        console.log("object", err);
      } else {
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
        callback(err);
      } else {
        console.log("saving message in model");
        callback(null, result);
      }
    });
  }
}
module.exports = { MessageModel };
