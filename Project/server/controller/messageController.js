const messageService = require("../services/messageServices").MessageServices;
const messageServiceObject = new messageService();

class MessageController {
  getAllUserChat(req, res) {
    console.log("In message controller get all chat method", req.body);
    let response = {};
    let userBody = req.body;
    messageServiceObject.getAllMessageService(userBody, function(err, result) {
      if (err) {
        response.status = false;
        response.message = "user not present in database";
        res.status(500).send(response);
      } else {
        response.status = true;
        response.message = "user present in database";
        response.result = result;
        // res.status(200).send(response);
      }
    });
  }

  saveMessages(req, next) {
    console.log("In message controller save message req ", req);
    let response = {};

    let userBody = {
      senderId: req.senderId,
      sender: req.sender,
      receiverId: req.receiverId,
      receiver: req.receiver,
      message: req.message
    };

    console.log("In message controller save message  userBody ", userBody);
    messageServiceObject.saveMessageService(userBody, function(err, result) {
      if (err) {
        response.status = false;
        response.message = " message not saving";
        // res.status(500).send(response);
        return next(err);

      } else {
        console.log("in controller result ", result);
        response.status = true;
        response.message = "message saved in database";
        response.result = result;
        // res.status(200).send(response);
        return next(null, response);
      }
    });
  }
}
module.exports = new MessageController();
