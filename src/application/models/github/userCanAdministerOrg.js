import { defaultTo, compose, isNil, path } from "ramda";
import { graphQl, gql } from "core/graphql";

export default async (orgName, token) =>
  compose(
    defaultTo(false),
    path(["viewer", "organization", "viewerCanAdminister"])
  )(
    await graphQl(
      gql`
      query {
        viewer {
          organization(login: "${orgName}") {
            viewerCanAdminister
          }
        }
      }
    `,
      token
    )
  );
