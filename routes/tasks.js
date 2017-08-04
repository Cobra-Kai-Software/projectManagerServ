const express = require('express');
const router = express.Router();
const queries = require('../queries')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

router.get("/", function(req, res, next) {
  queries.getTasks()
  .then((tasks) => {
    res.json(tasks)
  });
});

router.get('/:id', function(req,res,next){
  queries.getTaskById(req.params.id)
  .then(function(task){
    res.json(task)
  });
});

router.delete("/:id", (req, res, next) => {
  queries.deleteTask(req.params.id)
    .then(function(task) {
      res.json(task);
    });
});

module.exports = router;
