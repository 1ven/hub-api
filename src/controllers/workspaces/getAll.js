import { compose } from "ramda";
import { merge, withStatus } from "litera";
import { withJson } from "litera-response-body";
import { getAll } from "modules/workspace/models";

export default async (req, { db }) =>
  merge(withStatus(200), withJson(await getAll(db, req.headers.authorization)));
