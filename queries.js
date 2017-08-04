const knex = require('./db/knex')

module.exports = {
  getProjects: function() {
    return knex('*').from('project')
  },
  getTasksByProject: function(project_id) {
    return knex('task')
    .select('project.name', 'task.name')
    .innerJoin('project', 'project.id', 'task.project_id')
    .where('project.id', project_id)
  },
  getTasksByMember: function() {

  },
  getMeberProjects: function() {

  },
  getMemberByTask: function() {

  }
};
