const knex = require('./db/knex')

module.exports = {
  getProjects: function() {
    return knex('*').from('project')
  },
  getTasksByProject: function(project_id) {
    return knex('task')
    .select('task.id', 'project.name as project_name', 'task.name as task_name', 'task.description', 'task.todo', 'task.inprogress', 'task.icebox', 'task.finished')
    .innerJoin('project', 'project.id', 'task.project_id')
    .where('project.id', project_id)
  },
  addTask: function(body) {
    return knex('task').insert(body).returning('*')
  },
  deleteTask: function(task_id){
    return knex('task').where('id', task_id).del()
  },
  deleteProject: function(project_id){
    return knex('project').where('id', project_id).del()
  },
  getTasksByMember: function() {

  },
  getMeberProjects: function() {

  },
  getMemberByTask: function() {

  },
  getTasks: function() {
    return knex("*").from("task")
  },
  getTaskById: function(task_id){
    return knex('task').select('task.id', 'project.name as project_name', 'task.name as task_name', 'task.description', 'task.todo', 'task.inprogress', 'task.icebox', 'task.finished')
    .innerJoin('project', 'project.id', 'task.project_id')
    .where('task.id', task_id)
  },
  editTask: function(task_id, edit){
    return knex('task').where('id', task_id).update(edit).returning('*')
  }
};
