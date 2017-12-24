const router = require("express").Router();
const path = require("path");

router.get("/signup", (req, res) => {
  console.log("req url", req.url);
  res.sendFile(path.join(__dirname, "..", "..", "public/signup.html"));
});

module.exports = router;
