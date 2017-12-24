const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/public', express.static(path.join(__dirname, '..', '..','public')));

module.exports = router;
