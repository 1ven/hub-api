import { models as userModels } from "application/modules/github/modules/user";
import { utils } from "application/modules/github";
import { ROLES } from "./constants";

export const getUserOrgs = async token =>
  await utils.fetchApi({
    path: "/user/orgs",
    method: "GET",
    token
  });

export const getUserAdminOrgs = async token => {
  const user = await userModels.getUser(token);
  const orgs = await getUserOrgs(token);

  return (await Promise.all(
    orgs.map(org =>
      utils.fetchApi({
        path: `/orgs/${org.login}/memberships/${user.login}`,
        method: "GET",
        token
      })
    )
  ))
    .filter(org => org.role === ROLES.ADMIN)
    .map(m => m.organization);
};
