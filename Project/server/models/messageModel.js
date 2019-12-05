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
  getAllMessages( callback) {
    messages.find({}, (err, data) => {
      if (err) {
        callback(err);
        console.log("errr", err);
      } else {
        console.log("get all messages ",data);
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
    newMessages.save(body,(err, result) => {
      if (err) {
        callback(err);
        console.log("error in save", err);
      } else {
        console.log("saving message in model", result);
        callback(null, result);
      }
    });
  }
}
module.exports = { MessageModel };
