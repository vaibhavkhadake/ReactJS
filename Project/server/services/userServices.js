let userModel = require("../models/userModel.js").UserModel;
let userModelObj = new userModel();
let bcrypt = require("bcryptjs");
let token = require("../util/tokenGen");
let tokenn;

class UserServices {
  //register user services
  //check emailid is available or not
  //if not available then add new user

  registerUser(body, callback) {
    console.log(" request in create service body ",body);
    let mail = { email: body.email };
    userModelObj.findUser(mail, (err, result) => {
      if (err) {
        callback(err);
      } else {
        if (!result) {
          userModelObj.createUser(body, (err, data) => {
            if (err) {
              callback(err);
            } else {
              callback(null, data);
            }
          });
        } else {
          callback(result);
        }
      }
    });
  }
  //return token
  returnToken() {
    return tokenn;
  }
  //login
  loginUser(body, callback) {
    console.log(" request in login service ");
    let mail = { email: body.email };

    userModelObj.findUser(mail, (err, result) => {
      if (err) {
        callback(err);
      } else {
        if (!result) {
          callback({ message: "no data found" });
        } else {
          console.log("value of result", result);
          console.log("value of result id", result._id);
          console.log("value of body", body.password);
          console.log(
            "after bcrypt reconversion",
            bcrypt.compareSync(body.password, result.password)
          );

          if (bcrypt.compareSync(body.password, result.password)) {
            console.log("value of body ", body);
            console.log("value of result ", result);

            let tokenvalue = token.tokenGenerator(result);
            tokenn = tokenvalue;
            console.log("token generated:  ", tokenvalue);
            callback(null, result);
          } else {
            callback({ message: "passwords don't match" });
          }
        }
      }
    });
  }

  // forgotPassword services
  forgotPasswordUser(body, callback) {
    console.log("In services forgot password method");
    userModelObj.findUser(body, (err, result) => {
      if (err) {
        callback(err);
      } else {
        if (!result) {
          callback("message:User doesn't exit please register ");
        } else {
          console.log("result value", result);
          console.log("body value", body);
          userModelObj.verifyUser(result, (err, data) => {
            if (err) {
              callback(err);
            } else {
              console.log("Data recived after user verify", data);
              callback(null, data);
            }
          });
        }
      }
    });    
  }

  //reset password
  resetPasswordUser(userNewPassword, userNew_Id, callback) {
    console.log("In services reset password ");
    console.log("User new password", userNewPassword);
    console.log("user new id", userNew_Id);

    userModelObj.findUser(userNew_Id, (err, result) => {
      if (err) {
        callback(err);
      } else {
        if (!result) {
          callback({ message: "user doesn't exit" });
        } else {
          console.log("result value", result);
          console.log("user id", userNew_Id);
          userModelObj.changePassword(
            userNewPassword,
            userNew_Id,
            (err, data) => {
              if (err) {
                callback(err);
              } else {
                callback(null, data);
              }
            }
          );
        }
      }
    });
  }
  //get all user in service

  getAllUser(userBody, callback) {
    console.log("In service getAllUser method");
    console.log("Userbody", userBody);
    userModelObj.getAll((err, data) => {
      if (err) {
        callback(err);
      } else {
        if (!data) {
          callback({ message: "User not found" });
        } else {
          callback(null, data);
        }
      }
    });
  }
}

module.exports = {
  UserServices
};
