const { sKey } = require("../config/token.config");
const jwt = require("jsonwebtoken");

module.exports = {
  tokenGenerator(body) {
    console.log("\nvalue of body in token generator", body);

    let payload = { _id: body._id };
    console.log("\nvalue of payload", payload);
    let token = jwt.sign(payload, sKey);
    console.log("\nvalue of token after generation", token);
    
    return token;
  }
};
