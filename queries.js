var knex = require('./db/knex')

module.exports = {
  example: function(){
    return knex('*').from('tableName')
  }
}
