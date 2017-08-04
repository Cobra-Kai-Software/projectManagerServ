
exports.up = (knex, Promise) => {
  return knex.schema.createTable('task' ,(table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('description');
    table.boolean('todo').defaultTo(true);
    table.boolean('inprogress').defaultTo(false);
    table.boolean('finished').defaultTo(false);
    table.boolean('icebox').defaultTo(false);
    table.integer('member_id').references('member.id').unsigned().onDelete('cascade');
    table.integer('project_id').references('project.id').unsigned().onDelete('cascade').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('task');
};
