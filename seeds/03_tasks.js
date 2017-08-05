exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "task"; ALTER SEQUENCE task_id_seq RESTART WITH 9;')

    .then(() => {

      var tasks = [{
        id: 1,
        name: "kill critters",
        description: "shoots dem critters",
        member_id: 1,
        project_id: 1
      }, {
        id: 2,
        name: "get bigger tires",
        description: "i needs me some swampers",
        member_id: 3,
        project_id: 2
      }, {
        id: 3,
        name: "clean critters",
        description: "gut em and wash em",
        member_id: 4,
        project_id: 1
      }, {
        id: 4,
        name: "make truck muddy",
        description: "hit dat mud pit",
        member_id: 2,
        project_id: 2
      }, {
        id: 5,
        name: "skin em",
        description: "make me some boots bitch",
        todo: false,
        icebox: true,
        member_id: 1,
        project_id: 1
      }, {
        id: 6,
        name: "chew bakky",
        description: "chew bakky spit out window, flip off old people.",
        todo: false,
        inprogress: true,
        member_id: 1,
        project_id: 1
      }, {
        id: 7,
        name: "pair with wine",
        description: "find a nice Cab that will pair with our gumbo",
        todo: false,
        icebox: true,
        member_id: 4,
        project_id: 1
      }, {
        id: 8,
        name: "get bullets",
        description: "Get to Walmart get some ammo.",
        todo: false,
        finished: true,
        member_id: 4,
        project_id: 1
      }];

      return knex('task').insert(tasks);

    });
};
