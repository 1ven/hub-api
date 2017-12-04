import { compose } from "ramda";
import { match, fork } from "litera-router";
import { authorizeGitHub } from "../hoa";
import auth from "./auth";
import workspaces from "./workspaces";

// prettier-ignore
export default match("/v1*", fork(
  match("/auth*", auth),
  match('/workspaces*', compose(authorizeGitHub)(workspaces))
));
