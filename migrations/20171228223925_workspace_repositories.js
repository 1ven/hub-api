exports.up = function(knex, Promise) {
  return knex.schema.table("workspaces", function(table) {
    table
      .json("repos")
      .notNullable()
      .defaultTo(JSON.stringify([]));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("workspaces", function(table) {
    table.dropColumn("repos");
  });
};
