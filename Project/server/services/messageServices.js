let messageModel = require("../models/messageModel").MessageModel;
let messageModelObject = new messageModel();

class MessageServices {
  getAllMessageService(body, callback) {
    console.log("In message services get all chat body", body);
    messageModelObject.getAllMessages((err, result) => {
      if (err) {
        callback(err);
      } else {
        if (!result) {
          callback({ message: " no information" });
        } else {
          callback(null, result);
        }
      }
    });
  }
  saveMessageService(body, callback) {
    console.log("In message service save message", body);
    messageModelObject.saveMessages(body,(err, result) => {
      if (err) {
        callback(err);
      } else {
        if (!result) {
          callback({ message: "no information" });
        } else {
          callback(null, result);
        }
      }
    });
  }
}
module.exports = {
  MessageServices
};
