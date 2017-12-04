import { merge, withStatus } from "litera";
import { withJson } from "litera-response-body";

export default async (req, { user, db }) => {
  // to model
  const result = await db
    .from("workspaces as w")
    .innerJoin("workspaces_users as wu", "wu.workspace_id", "w.id")
    .where("wu.user_login", user.login)
    .select("w.*");

  return merge(withStatus(200), withJson(result));
};
