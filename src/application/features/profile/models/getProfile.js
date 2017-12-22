import { getAll } from "application/features/workspaces/models";

export default async (db, token) => ({
  workspaces: await getAll(db, token)
});
