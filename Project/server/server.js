const express = require("express");
const bodyParser = require("body-parser");
// create express app
const app = express();
//parse request of content type- application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// Configuring the database
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
//define route
app.get("/", (request, response) => {
  response.json({ message: "Welcome to chat app" });
});

//require user routes
require("./routes/routes.js")(app);
//listen for request
app.listen(3005, () => {
  console.log("Server in 3005 port");
});
