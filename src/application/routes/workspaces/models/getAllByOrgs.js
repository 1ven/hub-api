import { selectors } from "application/modules/github/modules/orgs";

export default async (orgs, db) =>
  await db
    .select("*")
    .from("workspaces")
    .whereIn("assigned_to", selectors.ids(orgs));
