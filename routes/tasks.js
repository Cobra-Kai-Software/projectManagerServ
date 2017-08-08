const express = require('express');
const router = express.Router();
const queries = require('../queries')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

router.get("/", function(req, res, next) {
  queries.getTasks()
    .then(function(tasks) {
      res.json(tasks)
    })
    .catch(function (error){
      res.json({
        error: "error"
      })
    })
});

router.get('/:id', function(req, res, next) {
  queries.getTaskById(req.params.id)
    .then(function(task) {
      res.json(task)
    })
    .catch(function (error){
      res.json({
        error: "error"
      })
    })
});

router.delete("/:id", function(req, res, next) {
  queries.deleteTask(req.params.id)
    .then(function(task) {
      res.json(task);
    })
    .catch(function (error){
      res.json({
        error: "error"
      })
    })
});

router.put('/:id', function(req, res, next) {
  queries.editTask(req.params.id, req.body)
    .then(function(task) {
      res.json(task[0]);
    })
    .catch(function (error){
      res.json({
        error: "error"
      })
    })
});

module.exports = router;
