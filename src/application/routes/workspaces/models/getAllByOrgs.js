import { selectors, models } from "application/modules/github/modules/orgs";

export default async (db, token) => {
  const orgs = await models.getUserOrgs(token);
  return await db
    .select("*")
    .from("workspaces")
    .whereIn("assigned_to", selectors.ids(orgs));
};
