var bcrypt = require("bcryptjs");

module.exports = {
  //encrypt password
  encryptPass(password) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash;
  }
};
