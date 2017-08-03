
exports.up = (knex, Promise) => {
  return knex.schema.createTable('member' ,(table) => {
    table.increments();
    table.text('email').notNullable().unique();
    table.text('password').notNullable();
    table.text('name').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('member');
};
