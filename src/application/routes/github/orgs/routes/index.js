import { compose } from "ramda";
import { merge, withStatus } from "litera";
import { withJson } from "litera-response-body";
import { match, method } from "litera-router";
import { models } from "application/modules/github/modules/orgs";

export default compose(match("/"), method("GET"))(async req =>
  merge(
    withStatus(200),
    withJson(await models.getUserAdminOrgs(req.headers.authorization))
  )
);
