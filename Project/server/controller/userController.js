const User = require("../models/userModel.js");

// Create and Save a new Note
exports.create = (req, res) => {
  // Validate request
  if (!req.body.firstName) {
    return res.status(400).send({
      message: "first name can not be empty"
    });
  }
  if (!req.body.lastName) {
    return res.status(400).send({
      message: "last name can not be empty"
    });
  }
  if (!req.body.email) {
    return res.status(400).send({
      message: "email can not be empty"
    });
  }
  if (!req.body.password) {
    return res.status(400).send({
      message: "password can not be empty"
    });
  }
  // Create a user
  const user = new User({
    firstName: req.body.firstName || "Untitled firstname",
    lastName: req.body.lastName || "Untitled lastname",
    email: req.body.email || "Untitled email",
    password: req.body.password || "Untitled password "
  });

  // Save user in the database
  user
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user."
      });
    });
};
