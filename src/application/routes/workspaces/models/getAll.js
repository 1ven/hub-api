import { models } from "application/modules/github/modules/orgs";

export default async (db, token) =>
  await db
    .select("*")
    .from("workspaces")
    .whereIn("assigned_to", await models.getUserOrgsIds(token));
