const express = require('express');
const router = express.Router();
const queries = require('../queries')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

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

router.post('/:id', function(req, res, next) {
  queries.addTask(req.body)
  .then((newTask) => {
    res.json(newTask)
  })
});

// router.put("/:id", (req, res, next) => {
//   queries.editMessage(req.params.id, req.body[0].message_body)
//     .then(function(message) {
//       res.json(message);
//     });
// });
//


router.delete("/:id", (req, res, next) => {
  queries.deleteProject(req.params.id)
    .then(function(project) {
      res.json(project);
    });
});

module.exports = router;
