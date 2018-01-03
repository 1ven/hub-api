exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("sprints", function(table) {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.integer("assigned_to").references("workspaces.id");
    })
    .createTable("sprints_issues", function(table) {
      table.integer("sprint_id").references("sprints.id");
      table.string("issue_repo").notNullable();
      table.integer("issue_number").notNullable();
      table.unique(["issue_repo", "issue_number"]);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("sprints").dropTable("sprints_issues");
};
