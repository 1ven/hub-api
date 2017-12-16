import { models } from "modules/github";

export default async (db, token) =>
  await db
    .select("*")
    .from("workspaces")
    .whereIn("assigned_to", await models.getUserOrgs(token));
