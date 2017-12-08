import { compose } from "ramda";
import { match, fork } from "litera-router";
import auth from "./auth";
import workspaces from "./workspaces";
import github from "./github";

// prettier-ignore
export default match("/v1*", fork(
  match("/auth*", auth),
  match('/workspaces*', workspaces),
  match('/github*', github)
));
