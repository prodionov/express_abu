const express = require("express");
const path = require("path");
const app = express();
const port = 4000;
const router = require("./src/controller/router");

app.disable("x-powered-by");

//handling errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something broke");
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

app.listen(port, () => {
  console.log(`I am listenning http://localhost:${port}`);
});

module.exports = app;
