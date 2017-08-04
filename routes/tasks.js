const express = require('express');
const router = express.Router();
const queries = require('../queries')
const jwt = require('jsonwebtoken')
const bcrypt = ('bcrypt')

router.post('/', function(req, res, next) {
  queries.addTaskToProject(req.body)
  .then((newTask) => {
    res.json(newTask)
  })
});

module.exports = router;
