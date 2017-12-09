import { pick } from "ramda";
import { utils } from "core/database";
import { errors } from "core/models";
import { models } from "application/modules/github/modules/orgs";

export default async (workspace, db, token) => {
  if (!await models.userCanAdministerOrg(workspace.assigned_to, token)) {
    throw new errors.NotAllowed();
  }

  try {
    return await db
      .insert(pick(["slug", "assigned_to"], workspace))
      .into("workspaces")
      .returning("*");
  } catch (err) {
    if (utils.isUniqueViolation(err)) {
      throw new errors.ModelError("Workspace is already exists");
    }
    throw err;
  }
};
