exports.seed = function(knex, Promise) {
return knex.raw('DELETE FROM "project"; ALTER SEQUENCE project_id_seq RESTART WITH 3;')

.then(() => {

var projects = [{
  id: 1,
  name: "gumbo"
  }, {
  id: 2,
  name: "mudtruck"
}];

return knex('project').insert(projects);

});
};
