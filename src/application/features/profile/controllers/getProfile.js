import { merge, withStatus } from "litera";
import { withJson } from "litera-response-body";
import { getProfile } from "../models";

export default async (req, { db }) =>
  merge(
    withStatus(200),
    withJson(await getProfile(db, req.headers.authorization))
  );
