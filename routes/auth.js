const express = require('express');
const router = express.Router();
const queries = require('../queries');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();


router.post('/', function(req, res, next){
  queries.memberLogin(req.body)
  .then((member) => {
    if (member.length === 0) {
      res.json({error: 'Email or password does not match'})
    } else {
      delete member[0].password
      var token = jwt.sign(member[0], process.env.TOKEN_SECRET);
        res.json({data: token})
    }
  })
});

module.exports = router;
