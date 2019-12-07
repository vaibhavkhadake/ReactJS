let messageModel = require("../models/messageModel").MessageModel;
let messageModelObject = new messageModel();

class MessageServices {
  getAllMessageService(body, callback) {
    console.log("In message services get all chat body", body);
    messageModelObject.getAllMessages(body, (err, result) => {
      if (err) {
        callback(err);
      } else {
        if (!result) {
          callback({ message: " no information in get all message service" });
        } else {
          callback(null, result);
        }
      }
    });
  }
  saveMessageService(body, callback) {
    console.log("In message service save message", body);
    messageModelObject.saveMessages(body, (err, result) => {
      if (err) {
        console.log("in result service err",err);
       return callback(err);
      } else {
        if (!result) {
         return callback({ message: "no information in save message service" });
        } else {
          console.log("in result service",result);
          return callback(null, result);
        }
      }
    });
  }
}
module.exports = {
  MessageServices
};
