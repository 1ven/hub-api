import { equals, compose, path, prop, map, filter, pick } from "ramda";
import { models as userModels } from "application/modules/github/modules/user";
import { utils } from "application/modules/github";
import { ROLES } from "./constants";
import { graphQl, gql } from "core/graphql";

export const getUserOrgs = async token =>
  await utils.fetchApi({
    path: "/user/orgs",
    method: "GET",
    token
  });
