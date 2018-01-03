import { compose } from "ramda";
import { merge, withStatus } from "litera";
import { withJson } from "litera-response-body";
import { readBody } from "litera-request-body";
import { addIssue } from "modules/sprint/models";

export default async (req, { db, params }) => {
  await addIssue(
    {
      ...readBody(req),
      sprint_id: params.id
    },
    db,
    req.headers.authorization
  );
  return merge(withStatus(200));
};
