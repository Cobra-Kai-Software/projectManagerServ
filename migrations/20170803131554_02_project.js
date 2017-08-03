
exports.up = (knex, Promise) => {
  return knex.schema.createTable('project' ,(table) => {
    table.increments();
    table.text('name').notNullable().unique();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('project');
};
