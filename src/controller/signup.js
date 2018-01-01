const express = require("express");
const su_router = express.Router();
const { add_user, check } = require("../../db/query/add_user");

su_router.post("/", async (req, res, next) => {
  let data = req.body;
  console.log("data", data);
  try {
    await check(data);
    console.log("USER SUSSESFULLY ADDED");
    res.redirect("/");
  } catch (err) {
    console.log("type of error", typeof err);
    console.log("error", err.message);
    let db_response = err.message;
    if (db_response === "user with that name already exist") {
      //make an injection into the signup.html that the user with this name already exist
      console.log("we are here - username");
      res.redirect("/signup");
      next();
    } else if (db_response === "user with that email already exist") {
      console.log("we are here - email");
      //make an injection into the signup.html that the user with this name already exist
      res.redirect("/signup");
      next();
    } else {
      res.redirect("/");
      next();
    }
  }

  // next();
});

module.exports = su_router;
