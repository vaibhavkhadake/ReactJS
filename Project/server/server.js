const express = require("express");
const bodyParser = require("body-parser");
var route = require("./routes/routes.js");
let expressValidator = require("express-validator");
let cors=require('cors')
// create express app
var app = express();
// Configuring the database
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
app.use(cors());
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
// define route
app.get("/", (request, response) => {
  response.json({ message: "Welcome to chat app" });
});

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Express Validator Middleware

app.use(
  expressValidator({
    errorFormatter: function(param, msg, value) {
      var namespace = param.split("."),
        root = namespace.shift(),
        formParam = root;

      while (namespace.length) {
        formParam += "[" + namespace.shift() + "]";
      }
      return {
        param: formParam,
        msg: msg,
        value: value
      };
    }
  })
);

//require route
app.use("/", route);

// listen for requests
app.listen(3005, () => {
  console.log("Server in 3005 port");
});
