exports.up = function(knex, Promise) {
  return knex.schema.createTable("workspaces", function(table) {
    table.increments("id").primary();
    table.string("slug").notNullable();
    table.string("assigned_to").notNullable();
    table.unique(["assigned_to", "slug"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("workspaces");
};
