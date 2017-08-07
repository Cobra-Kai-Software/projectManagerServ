require('dotenv').config();
const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "member"; ALTER SEQUENCE member_id_seq RESTART WITH 5;')

    .then(() => {
      var hash = bcrypt.hashSync(process.env.SECRET_WORD, saltRounds)

      var members = [{
        id: 1,
        email: "bubba@tuxedotshirt.party",
        password: hash,
        name: "bubba"
      }, {
        id: 2,
        email: "jimbob@tuxedotshirt.party",
        password: hash,
        name: "jimbob"
      }, {
        id: 3,
        email: "bigc@tuxedotshirt.party",
        password: hash,
        name: "cleatus"
      }, {
        id: 4,
        email: "clem@tuxedotshirt.party",
        password: hash,
        name: "clem"
      }];

      return knex('member').insert(members);

    });
};
