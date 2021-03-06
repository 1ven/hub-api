import { pick } from "ramda";
import { utils } from "core/database";
import { errors } from "core/models";
import { userCanAdministerOrg } from "modules/github/models";

export default async ({ assigned_to, slug, repos }, db, token) => {
  if (!await userCanAdministerOrg(assigned_to, token)) {
    throw new errors.NotAllowed();
  }

  // TODO: check whether user is having admin access in all `repos`

  try {
    return (await db
      .insert({
        slug,
        assigned_to,
        repos: JSON.stringify(repos)
      })
      .into("workspaces")
      .returning("*"))[0];
  } catch (err) {
    // TODO: Ideally, we should not handle errors in models, should have database error handler instead, to handle these cases, unless we need to throw specific errors
    if (utils.isUniqueViolation(err)) {
      throw new errors.ModelError("Workspace is already exists");
    }
    throw err;
  }
};
