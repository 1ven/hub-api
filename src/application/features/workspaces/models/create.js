import { pick } from "ramda";
import { utils } from "core/database";
import { errors } from "core/models";
import { userCanAdministerOrg } from "application/models/github";

export default async (workspace, db, token) => {
  if (!await userCanAdministerOrg(workspace.assigned_to, token)) {
    throw new errors.NotAllowed();
  }

  try {
    return await db
      .insert(pick(["slug", "assigned_to"], workspace))
      .into("workspaces")
      .returning("*");
  } catch (err) {
    // TODO: Ideally, we should not handle errors in models, should have database error handler instead, to handle these cases, unless we need to throw specific errors
    if (utils.isUniqueViolation(err)) {
      throw new errors.ModelError("Workspace is already exists");
    }
    throw err;
  }
};
