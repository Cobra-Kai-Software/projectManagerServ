require('dotenv').config();
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "member"; ALTER SEQUENCE member_id_seq RESTART WITH 5;')

    .then(() => {
      var hash = bcrypt.hashSync(process.env.SECRET_WORD, saltRounds)
      var hash2 = bcrypt.hashSync(process.env.SECRET_WORD2, saltRounds)
      var hash3 = bcrypt.hashSync(process.env.SECRET_WORD3, saltRounds)
      var hash4 = bcrypt.hashSync(process.env.SECRET_WORD4, saltRounds)

      var members = [{
        id: 1,
        email: "bubba@tuxedotshirt.party",
        password: hash,
        name: "bubba"
      }, {
        id: 2,
        email: "jimbob@tuxedotshirt.party",
        password: hash2,
        name: "jimbob"
      }, {
        id: 3,
        email: "bigc@tuxedotshirt.party",
        password: hash3,
        name: "cleatus"
      }, {
        id: 4,
        email: "clem@tuxedotshirt.party",
        password: hash4,
        name: "clem"
      }];

      return knex('member').insert(members);

    });
};
