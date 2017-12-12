import { prop } from "ramda";
import fetch from "node-fetch";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://api.github.com/graphql", fetch }),
  cache: new InMemoryCache()
});

export const graphQl = async (query, token) => {
  try {
    return await client
      .query({
        query,
        context: {
          headers: {
            authorization: token
          }
        }
      })
      .then(prop("data"));
  } catch (err) {
    // do not handle errors here, do that in github error handler instead
    console.log(err);
    throw err;
  }
};

export { default as gql } from "graphql-tag";
