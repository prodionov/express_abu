const express = require("express");
const googleRouter = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
require("env2")("../../config.env");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.googleClientID,
      clientSecret: process.env.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    accessToken => {
      console.log("accessToken", accessToken);
    }
  )
);

googleRouter.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

googleRouter.get("/callback", passport.authenticate("google"));

module.exports = googleRouter;
