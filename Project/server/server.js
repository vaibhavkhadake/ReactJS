const express = require("express");
const socketIO = require("socket.io");
const messageController = require("./controller/messageController");
const bodyParser = require("body-parser");
var route = require("./routes/routes.js");
let expressValidator = require("express-validator");
let cors = require("cors");
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

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

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
var server = app.listen(3005, () => {
  console.log("Server in 3005 port");
});

var io = socketIO(server);
io.on("connection", socket => {
  console.log("New user connected");
  // socket.userName = "Anonymous";
  // socket.on("ChangeUserName", data => {
  //   socket.userName = data.userName;
  // })
  socket.on("messaged", message => {
    console.log("message in server socket connection", message);
    messageController.saveMessages(message, (err, data) => {
      if (err) {
        console.log("err in socket ", err);
      } else {
        console.log("message saved", data);
        // socket.emit("readMessage", data);
        io.sockets.emit("readMessage", data);
      }
    });
  });
  socket.on("Disconnect", () => {
    console.log("Disconnected");
  });
});
