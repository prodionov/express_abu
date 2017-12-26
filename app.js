const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const router = require("./src/controller/router");
const su_router = require("./src/controller/signup");
const morgan = require("morgan");
const fs = require("fs");
const bodyParser = require("body-parser");

app.disable("x-powered-by");

//the following two lines of code allow us to
//access post data from the form
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//create a write stream in append mode
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "logs-demo", "access.log"),
  { flags: "a" }
);
app.use(morgan("combined", { stream: accessLogStream }));

app.use(express.static(path.join(__dirname, "public")));
app.use(router);
app.use('/signup_submit',su_router);

//handling errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something broke");
});

app.listen(port, () => {
  console.log(`I am listenning http://localhost:${port}`);
});

module.exports = app;
