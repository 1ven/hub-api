import { compose } from "ramda";
import { merge, withStatus } from "litera";
import { withJson } from "litera-response-body";
import { hoa } from "application/modules/github/modules/orgs";
import { getAllByOrgs } from "../../models";

export default compose(hoa.withOrgs)(async (req, { db, orgs }) =>
  merge(withStatus(200), withJson(await getAllByOrgs(orgs, db)))
);
