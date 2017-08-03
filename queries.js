const knex = require('./db/knex')

module.exports = {
  getProjects: function(){
    return knex('*').from('project')
  }
}
