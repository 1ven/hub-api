import fetch from "node-fetch";
import { merge, withStatus } from "litera";
import { withJson } from "litera-response-body";

export default atom => async (req, data) => {
  const res = await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      authorization: req.headers.authorization
    }
  });

  if (!res.ok) {
    return merge(withStatus(res.status), withJson(await res.json()));
  }

  return atom(req, { ...data, user: await res.json() });
};
