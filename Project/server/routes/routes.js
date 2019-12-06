var express = require("express");
let usersRoute = require("../controller/userController");
let messageRoute = require("../controller/messageController");
let verify=require("../util/tokenVerify")
let router = express.Router();
console.log("in route");
//API
router.post("/users/register", usersRoute.create);
router.post("/users/login", usersRoute.login);
router.post("/users/forgotPassword", usersRoute.forgotPassword);
router.post("/users/resetPassword", verify.tokenVerifyer, usersRoute.resetPassword);
router.get("/users/allUsers", verify.tokenVerifyer, usersRoute.getAllUsers);

router.post("users/messages", verify.tokenVerifyer, messageRoute.saveMessages);
router.get("/users/messages", verify.tokenVerifyer, messageRoute.getAllUserChat);

module.exports = router;
