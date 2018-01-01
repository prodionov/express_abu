const express = require("express");
const su_router = express.Router();
const add_user = require("../../db/query/add_user");

su_router.post("/", async (req, res, next) => {
  let data = req.body;
  console.log("data", data);
  try {
    await add_user(data);
    //console.log('we are here');
  } catch (err) {
    console.log('error', err);
    let error = err.detail;
    if (
      error.includes("username") &&
      error.includes("already exists")
    ) {
      //make an injection into the signup.html that the user with this name already exist
      console.log("we are here - username");
      res.redirect("/signup");
      next();
    } else if(
      error.includes("email") &&
      error.includes("already exists")
    ) {
      console.log("we are here - email");
      //make an injection into the signup.html that the user with this name already exist
      res.redirect("/signup");
      next();
    } else {
      res.redirect("/");
      next();
    }
  }
  res.redirect('/');
  next();
});

module.exports = su_router;
