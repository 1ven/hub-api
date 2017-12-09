import { compose, path, map } from "ramda";
import { graphQl, gql } from "core/graphql";

export const getUserOrgsIds = async token =>
  await graphQl(
    gql`
      query {
        viewer {
          organizations(first: 50) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    `,
    token
  ).then(
    compose(
      map(path(["node", "id"])),
      path(["viewer", "organizations", "edges"])
    )
  );

export const userCanAdministerOrg = async (org, token) =>
  await graphQl(
    gql`
      query {
        viewer {
          organization(login: "1ven-org") {
            viewerCanAdminister
          }
        }
      }
    `,
    token
  ).then(path(["viewer", "organization", "viewerCanAdminister"]));
