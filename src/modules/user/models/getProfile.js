import { getAll } from "modules/workspace/models";

export default async (db, token) => ({
  workspaces: await getAll(db, token)
});
