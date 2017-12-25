import { getUserOrgs } from "modules/github/models";

export default async (db, token) =>
  await db
    .select("*")
    .from("workspaces")
    .whereIn("assigned_to", await getUserOrgs(token));
