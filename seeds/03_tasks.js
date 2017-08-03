exports.seed = function(knex, Promise) {
return knex.raw('DELETE FROM "task"; ALTER SEQUENCE task_id_seq RESTART WITH 5;')

.then(() => {

var tasks = [{
  id: 1,
  name:"kill critters",
  description:"shoots dem critters",
  member_id:1,
  project_id:1
  }, {
  id: 2,
  name:"get bigger tires",
  description:"i needs me some swampers",
  member_id:3,
  project_id:2
}, {
  id: 3,
  name:"clean critters",
  description:"gut em and wash em",
  member_id:4,
  project_id:1
},{
  id: 4,
  name:"make truck muddy",
  description:"hit dat mud pit",
  member_id:2,
  project_id:2
}];

return knex('task').insert(tasks);

});
};
