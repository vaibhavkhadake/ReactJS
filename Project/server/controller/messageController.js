const messageService = require("../services/messageServices").MessageServices;
const messageServiceObject = new messageService();

class MessageController {
  getAllUser(req, res) {
    console.log("In message controller get all chat method", req.body);
    let response = {};
    let userBody = req.body;
    messageServiceObject.getAllMessageService(userBody, (err, result) => {
      if (err) {
        response.status = false;
        response.message = "user not present in database";
        res.status(500).send(response);
      } else {
        response.status = true;
        response.message = "user present in database";
        response.result = result;
        res.status(200).send(response);
      }
    });
  }

  saveMessages(req, res) {
    console.log("In message contriller save message  ", req.body);
    let response = {};
    let userBody = req.body;
    messageServiceObject.saveMessageService(userBody, (err, result) => {
      if (err) {
        response.status = false;
        response.message = " message not saving";
        res.status(500).send(response);
      } else {
        response.status = true;
        response.message = "message saved in database";
        response.result = result;
        res.status(200).send(response);
      }
    });
  }
}
module.exports = new MessageController();
