exports.seed = function(knex, Promise) {
return knex.raw('DELETE FROM "member"; ALTER SEQUENCE member_id_seq RESTART WITH 5;')

.then(() => {

var members = [{
  id: 1,
  email: "bubba@tuxedotshirt.party",
  password: "1234",
  name: "bubba"
  }, {
  id: 2,
  email: "jimbob@tuxedotshirt.party",
  password: "4321",
  name: "jimbob"
  }, {
  id: 3,
  email: "bigc@tuxedotshirt.party",
  password: "12345",
  name: "cleatus"
  },{
  id: 4,
  email: "clem@tuxedotshirt.party",
  password: "1357",
  name: "clem"
}];

return knex('member').insert(members);

});
};
