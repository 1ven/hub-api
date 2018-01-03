exports.up = function(knex, Promise) {
  return knex.schema.table("sprints", function(table) {
    table.renameColumn("assigned_to", "workspace_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("sprints", function(table) {
    table.renameColumn("workspace_id", "assigned_to");
  });
};
