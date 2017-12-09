import { find, propEq, isNil } from "ramda";
import getUserOrgs from "./getUserOrgs";

export default async (orgId, token) => {
  const foundOrg = find(propEq("id", orgId), await getUserOrgs(token));

  if (isNil(foundOrg)) {
    return false;
  }

  return foundOrg.viewerCanAdminister;
};
