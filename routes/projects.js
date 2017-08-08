const express = require('express');
const router = express.Router();
const queries = require('../queries')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  queries.getProjects()
    .then((projects) => {
      res.json(projects)
    })
    .catch(function (error){
      res.json({
        error: "error"
      })
    })
});

router.get('/:id', function(req, res, next) {
  queries.getTasksByProject(req.params.id)
    .then((tasks) => {
      res.json(tasks[0])
    })
    .catch(function (error){
      res.json({
        error: "error"
      })
    })
});

router.post('/:id', function(req, res, next) {
  queries.addTask(req.body)
    .then((newTask) => {
      res.json(newTask[0])
    })
    .catch(function (error){
      res.json({
        error: "error"
      })
    })
});

router.post('/', function(req, res, next) {
  queries.addProject(req.body)
    .then((newProject) => {
      res.json(newProject[0])
    })
    .catch(function (error){
      res.json({
        error: "error"
      })
    })
});

router.delete("/:id", (req, res, next) => {
  queries.deleteProject(req.params.id)
    .then(function(project) {
      res.json(project);
    })
    .catch(function (error){
      res.json({
        error: "error"
      })
    })
});



module.exports = router;
