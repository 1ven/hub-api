exports.up = function(knex, Promise) {
  return knex.schema.createTable("workspaces_users", function(table) {
    table.string("user_login").notNullable();
    table.integer("workspace_id").references("workspaces.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("workspaces_users");
};
