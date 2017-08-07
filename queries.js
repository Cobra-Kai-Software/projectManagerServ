const knex = require('./db/knex')

module.exports = {
  getProjects: function() {
    return knex('*').from('project')
  },
  getTasksByProject: function(project_id) {
    return knex('task')
      .select('task.id', 'project.name as project_name', 'task.name as task_name', 'task.description', 'task.todo', 'task.inprogress', 'task.icebox', 'task.finished', 'project.id as project_id')
      .innerJoin('project', 'project.id', 'task.project_id')
      .where('project.id', project_id)
  },
  addTask: function(body) {
    return knex('task').insert(body).returning('*')
  },
  deleteTask: function(task_id) {
    return knex('task').where('id', task_id).del()
  },
  deleteProject: function(project_id) {
    return knex('project').where('id', project_id).del()
  },
  addProject: function(body) {
    return knex('project').insert(body).returning('*')
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
  getTaskById: function(task_id) {
    return knex('task').select('task.id', 'project.name as project_name', 'task.name as task_name', 'task.description', 'task.todo', 'task.inprogress', 'task.icebox', 'task.finished')
      .innerJoin('project', 'project.id', 'task.project_id')
      .where('task.id', task_id)
  },
  editTask: function(task_id, edit) {
    return knex('task').where('id', task_id).update(edit).returning('*')
  },
  memberLogin: function(body) {
    return knex('member').where('member.email', body.email)
  },
  memberSignup: function(body) {
    return knex('member').insert(body).returning('*')
  },
  memberScreen: function(body) {
    return knex('member').select().where('member.email', body.email)
  },
  hotDog: function(password){
    var validate = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return validate.test(password)
  }
};
