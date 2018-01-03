export default async ({ workspace_id }, db, token) => {
  // TODO: check whether user is having an access for creating a sprint for the specific workspace
  return await db
    .select(
      db.raw(`s.id, s.title, 
      COALESCE (json_agg(json_build_object(
        'issue_number', si.issue_number,
        'issue_repo', si.issue_repo
      )) FILTER (
        WHERE si.issue_number IS NOT NULL and si.issue_repo IS NOT NULL
      ), '[]') as issues`)
    )
    .from("sprints as s")
    .leftJoin("sprints_issues as si", "si.sprint_id", "s.id")
    .where({
      workspace_id
    })
    .groupBy("s.id");
};
