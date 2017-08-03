const express = require('express');
const router = express.Router();
const queries = require('../queries')
const jwt = require('jsonwebtoken')
const bcrypt = ('bcrypt')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
