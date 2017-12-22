import { getUserOrgs } from "application/models/github";

export default async (db, token) =>
  await db
    .select("*")
    .from("workspaces")
    .whereIn("assigned_to", await getUserOrgs(token));
