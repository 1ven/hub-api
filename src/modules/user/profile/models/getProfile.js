import { models } from "modules/workspaces";

export default async (db, token) => ({
  workspaces: await models.getAll(db, token)
});
