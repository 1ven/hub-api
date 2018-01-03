import { compose } from "ramda";
import { merge, withStatus } from "litera";
import { withJson } from "litera-response-body";
import { readBody } from "litera-request-body";
import { create } from "modules/sprint/models";

export default async (req, { db, params }) =>
  merge(
    withStatus(201),
    withJson(
      await create(
        {
          ...readBody(req),
          workspace_id: params.id
        },
        db,
        req.headers.authorization
      )
    )
  );
