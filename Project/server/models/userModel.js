const mongoose = require("mongoose");
let schema = mongoose.Schema;
let utility = require("../util/utility");
let token = require("../util/tokenGen");
let nodemailer = require("../util/nodemailer");

const userSchema = new schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true
    },
    lastName: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      trim: true,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

var users = mongoose.model("users", userSchema);

class UserModel {
  //Create and Save a new User
  createUser(body, callback) {
    console.log(" request in model", body);
    body.password = utility.encryptPass(body.password);
    console.log("hashed password is ", body.password);
    var createUserDb = new users({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password
    });

    createUserDb.save((err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  }

  //find the user
  findUser(body, callback) {
    users.findOne(body, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  }
  //get All user
  getAll(callback) {
    users.find({}, (err, usersinfo) => {
      if (err) {
        callback(err);
      } else {
        callback(null, usersinfo);
      }
    });
  }

  // verify email
  verifyUser(body, callback) {
    console.log("In model verify user method", body);
    console.log("Body id", body._id);
    let tokenValue = token.tokenGenerator(body);
    console.log("token value", tokenValue);
    let address = "http://localhost:3000/resetPassword/" + tokenValue;
    nodemailer.mailer(body, address, (err, res) => {
      if (err) {
        callback(err);
      } else {
        console.log("verify response", res);
        callback(null, res);
      }
    });
  }

  //reset  password
  changePassword(body, id, callback) {
    console.log("In model change password method");
    console.log("user Id", id);
    console.log("user body password", body.password);
    var hashPassword = utility.encryptPass(body.password);
    console.log("hash password", hashPassword);
    users.findByIdAndUpdate(id, { password: hashPassword }, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  }
}
module.exports = { UserModel };
