const express = require('express');
const router = express.Router();
const queries = require('../queries')
const jwt = require('jsonwebtoken')
const bcrypt = ('bcrypt')

/* GET home page. */
router.get('/', function(req, res, next) {
  queries.getProjects()
  .then((projects) => {
    res.json(projects)
  })
});

module.exports = router;
