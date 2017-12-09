import { compose, path, prop, map } from "ramda";
import { graphQl, gql } from "core/graphql";

export default token =>
  graphQl(
    gql`
      query {
        viewer {
          organizations(first: 50) {
            edges {
              node {
                id
                login
                viewerCanAdminister
              }
            }
          }
        }
      }
    `,
    token
  ).then(
    compose(map(prop("node")), path(["viewer", "organizations", "edges"]))
  );
