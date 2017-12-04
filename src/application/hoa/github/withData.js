import fetch from "node-fetch";
import join from "url-join";
import { merge, withStatus } from "litera";
import { withJson } from "litera-response-body";

export default ({ path, key }) => atom => async (req, data) => {
  const res = await fetch(join("https://api.github.com", path), {
    method: "GET",
    headers: {
      authorization: req.headers.authorization
    }
  });

  if (!res.ok) {
    return merge(withStatus(res.status), withJson(await res.json()));
  }

  return atom(req, { ...data, [key]: await res.json() });
};
