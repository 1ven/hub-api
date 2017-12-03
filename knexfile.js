module.exports = {
  client: "pg",
  connection: process.env.POSTGRES_CONNECTION,
  migrations: {
    tableName: "knex_migrations"
  }
};
