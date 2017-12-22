import { compose } from "ramda";
import { merge, withStatus } from "litera";
import { withJson } from "litera-response-body";
import { readBody } from "litera-request-body";
import { create } from "../models";

export default async (req, { db }) =>
  merge(
    withStatus(201),
    withJson(await create(readBody(req), db, req.headers.authorization))
  );
