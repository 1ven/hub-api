import k from "knex";

export const knex = k({
  client: "pg",
  connection: process.env.POSTGRES_CONNECTION,
  migrations: {
    tableName: "knex_migrations"
  }
});
