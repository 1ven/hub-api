import { compose } from "ramda";
import { merge, withStatus } from "litera";
import { withJson } from "litera-response-body";
import { getAll } from "modules/sprint/models";

export default async (req, { db, params }) =>
  merge(
    withStatus(200),
    withJson(
      await getAll({ workspace_id: params.id }, db, req.headers.authorization)
    )
  );
