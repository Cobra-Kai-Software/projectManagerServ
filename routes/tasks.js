const express = require('express');
const router = express.Router();
const queries = require('../queries')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

router.get("/", function(req, res, next) {
  queries.getTasks()
  .then(function(tasks) {
    res.json(tasks)
  });
});

router.get('/:id', function(req,res,next){
  queries.getTaskById(req.params.id)
  .then(function(task){
    res.json(task)
  });
});

router.delete("/:id", function(req, res, next) {
  queries.deleteTask(req.params.id)
    .then(function(task) {
      res.json(task);
    });
});

router.put('/:id', function(req,res,next){
  queries.editTask(req.params.id, req.body)
  .then(function(task){
    res.json(task[0]);
  });
});

module.exports = router;
