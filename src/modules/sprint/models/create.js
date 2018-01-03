export default async ({ workspace_id, title }, db, token) => {
  // TODO: check whether user is having an access for creating a sprint for the specific workspace
  return (await db
    .insert({ title, workspace_id })
    .into("sprints")
    .returning("*"))[0];
};
