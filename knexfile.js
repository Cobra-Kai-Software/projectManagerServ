require('dotenv').config();

module.exports = {

  development: {
    client: 'sqlite3',
    connection: 'postgres://localhost/project-manager'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
