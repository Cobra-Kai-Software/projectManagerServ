const express = require('express');
const router = express.Router();
const queries = require('../queries');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv').config();

router.post('/', function(req, res, next) {
  queries.memberLogin(req.body)
    .then((member) => {
      if (member.length === 0) {
        res.json({
          error: 'Email or password does not match'
        });
      } else {
        let match = bcrypt.compareSync(req.body.password, member[0].password);
        if (match) {
          delete member[0].password
          var token = jwt.sign(member[0], process.env.TOKEN_SECRET);
          res.json({
            data: token
          })
        } else {
          res.json({
            error: 'Email or password does not match'
          });
        }
      }
    })
});

router.post('/signup', function(req, res, next) {
  if (queries.hotDog(req.body.password)){
  } else {
    return res.json({
      error: 'Invalid password'
    })
  }
  queries.memberScreen(req.body)
    .then((member) => {
      if (member.length === 0) {
        let saltRounds = 10;
        let hash = bcrypt.hashSync(req.body.password, saltRounds);
        req.body.password = hash;
        queries.memberSignup(req.body)
          .then((newMember) => {
            var token = jwt.sign(newMember[0], process.env.TOKEN_SECRET);
            res.json({
              data: token
            })
          });
      } else {
        res.json({
          error: 'Email already in use please login'
        });
      }
    })

})



module.exports = router;
