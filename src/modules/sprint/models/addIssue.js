export default async ({ sprint_id, issue_repo, issue_number }, db, token) => {
  // TODO: check whether user is having an access for adding issue to the specific sprint
  return await db
    .insert({ sprint_id, issue_repo, issue_number })
    .into("sprints_issues");
};
