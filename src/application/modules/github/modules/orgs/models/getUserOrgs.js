import { compose, path, map } from "ramda";
import { graphQl, gql } from "core/graphql";

export default async token =>
  compose(
    map(path(["node", "login"])),
    path(["viewer", "organizations", "edges"])
  )(
    await graphQl(
      gql`
        query {
          viewer {
            organizations(first: 50) {
              edges {
                node {
                  login
                }
              }
            }
          }
        }
      `,
      token
    )
  );
