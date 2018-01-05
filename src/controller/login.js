const express = require('express');
const log_router = express.Router();
const path = require('path');
const pwd_auth = require('../../db/query/pwd_auth')

log_router.post('/', async (req, res, next) => {
  let data = req.body;
  console.log(data);
  try {
    await pwd_auth(data);
    res.redirect('/');
  }
  catch(err) {
    console.log(error.stack);
    res.redirect('/');
  }
  //res.end();
  next();
})

module.exports = log_router;
