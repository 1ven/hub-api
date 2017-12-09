import { merge, withStatus } from "litera";
import { withJson } from "litera-response-body";

// TODO: handle errors from graphql instead
export default atom => async (req, data) => {
  try {
    return await atom(req, data);
  } catch (err) {
    if (err instanceof GitHubError) {
      return merge(withStatus(err.status), withJson(err.data));
    }
    throw err;
  }
};
