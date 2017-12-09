import { compose } from "ramda";
import { merge, withStatus } from "litera";
import { withJson } from "litera-response-body";
import { hoa } from "application/modules/github/modules/orgs";
import { getAll } from "../../models";

export default async (req, { db }) =>
  merge(withStatus(200), withJson(await getAll(db, req.headers.authorization)));
