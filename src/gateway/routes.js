import { fork, match, method } from "litera-router";
import * as userAuthGithub from "modules/user/auth/github";
import * as userProfile from "modules/user/profile";
import * as workspaces from "modules/workspaces";

// prettier-ignore
export default match("/v1*", fork(
  match("/user", userProfile.controllers.getProfile),
  match("/auth*", fork(
    match("/github*", method("GET", fork(
      match("/", userAuthGithub.controllers.getCode),
      match("/callback", userAuthGithub.controllers.getToken)
    )))
  )),
  match("/workspaces", fork(
    method("GET", workspaces.controllers.getAll),
    method("POST", workspaces.controllers.create)
  ))
))
