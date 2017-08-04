const knex = require('./db/knex')

module.exports = {
  getProjects: function() {
    return knex('*').from('project')
  },
  getTasksByProject: function(project_id) {
    return knex('task')
    .select('task.id', 'project.name as project_name', 'task.name as task_name', 'task.description', 'task.todo', 'task.inprogress', 'task.icebox', 'task.finished', 'member.name as member_name', 'member.email')
    .innerJoin('project', 'project.id', 'task.project_id')
    .innerJoin('member', 'member.id', 'task.member_id')
    .where('project.id', project_id)
  },
  addTask: function(body) {
    return knex('task').insert(body).returning('*')
  },
  getTasksByMember: function() {

  },
  getMeberProjects: function() {

  },
  getMemberByTask: function() {

  }
};
