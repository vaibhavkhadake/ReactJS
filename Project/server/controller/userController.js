const service = require("../services/userServices");
const serviceObj = new service.UserServices();

class userController {
  //create a new user validation
  create(req, res) {
    console.log("request in controller creating user method");

    let response = {};
    req
      .checkBody("firstName", "firstName should not be null")
      .not()
      .isEmpty();
    req
      .checkBody("lastName", "LastName should not be null")
      .not()
      .isEmpty();
    req.checkBody("email", "Invalid Email").isEmail();
    req
      .checkBody("email", "Email should not be empty")
      .not()
      .isEmpty();
    req.checkBody("password", "Password too short").isLength({ min: 8 });

    var errors = req.validationErrors();
    if (errors) {
      response.status = false;
      response.message = "Validation Error";
      response.data = errors;
      res.status(500).send(response);
    } else {
      console.log("req ", req.body);
      var userBody = req.body;
      serviceObj.registerUser(userBody, function(err, data) {
        if (err) {
          response.status = false;
          response.message = "Email Already Exists";
          res.status(500).send(response);
        } else {
          response.status = true;
          response.message = "Registered successfully";
          res.status(200).send(response);
        }
      });
    }
  }
  //login
  login(req, res) {
    console.log("request in controller login user method");
    let response = {};
    console.log("request body ", req.body);
    var userBody = req.body;
    serviceObj.loginUser(userBody, function(err, result) {
      if (err) {
        response.status = false;
        response.message = err.message;
        res.status(500).send(response);
      } else {
        response.status = true;
        response.message = "logged in successfully";
        console.log("value of token in controller", serviceObj.returnToken());
        response.token = serviceObj.returnToken();
        response.senderId = result._id;
        response.result = result.firstName + " " + result.lastName;
        res.status(200).send(response);
      }
    });
  }

  //forgetPassword
  forgotPassword(req, res) {
    console.log("In controller forgot password method");
    let response = {};
    console.log("user Request body", req.body);
    let userBody = req.body;
    serviceObj.forgotPasswordUser(userBody, (err, result) => {
      if (err) {
        response.status = false;
        response.message = err.message;
        req.status(500).send(response);
      } else {
        response.status = true;
        response.message =
          "Set password link sent to you registered email, please check. ";
        req.status(200).send(response);
      }
    });
  }
  resetPassword(req, res) {
    console.log("In controller reset password");
    console.log("request body", req.body);
    let response = {};
    req.checkBody("password", "password too short").isLength({ min: 8 });
    var errors = req.validationErrors();
    if (errors) {
      response.status = false;
      response.message = "Validate error";
      response.data = errors;
      req.status(500).send(response);
    } else {
      console.log("request body", req.body);
      console.log("request decoded", req.decoded);
      var userNewPassword = { password: req.body.password };
      var user_Id = { _id: req.decoded._id };
      serviceObj.resetPasswordUser(userNewPassword, user_Id, (err, result) => {
        if (err) {
          response.status = false;
          response.message = "Not able to reset Password";
          req.status(500).send(response);
        } else {
          response.status = true;
          response.message = "Password reset successfully";
          req.status(200).send(response);
        }
      });
    }
  }
}

module.exports = new userController();
