const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const signup = require('./src/controller/signup')
const index = require('./src/controller/index')

app.listen(port, ()=> {
  console.log(`I am listenning http://localhost:${port}`);
})

app.use('/', (req, res) => {
  console.log('requested url', req.url);
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/public/index.html'));
})

app.use('/public', index);





module.exports = app;
