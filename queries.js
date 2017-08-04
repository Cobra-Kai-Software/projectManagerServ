const knex = require('./db/knex')

module.exports = {
  getProjects: function() {
    return knex('*').from('project')
  },
  getTasksByProject: function(project_id) {
    return knex('task')
    .select('*')
    .innerJoin('project', 'project.id', 'task.project_id')
    .where('project.id', project_id)
  },
  addTaskToProject: function(body) {
    return knex('task').insert(body).returning('*')
  },
  getTasksByMember: function() {

  },
  getMeberProjects: function() {

  },
  getMemberByTask: function() {

  }
};
