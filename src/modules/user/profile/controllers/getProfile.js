import { merge, withStatus } from "litera";
import { withJson } from "litera-response-body";
import * as models from "../models";

export default async (req, { db }) =>
  merge(
    withStatus(200),
    withJson(await models.getProfile(db, req.headers.authorization))
  );
