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
  });
});

router.get('/:id', function(req, res, next) {
  queries.getTasksByProject(req.params.id)
  .then((tasks) => {
    res.json(tasks)
  });
});

module.exports = router;
