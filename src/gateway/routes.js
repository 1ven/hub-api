import { fork, match, method } from "litera-router";
import * as auth from "application/features/auth/controllers";
import * as profile from "application/features/profile/controllers";
import * as workspaces from "application/features/workspaces/controllers";

// prettier-ignore
export default match("/v1*", fork(
  match("/user", profile.getProfile),
  match("/auth*", fork(
    match("/github*", method("GET", fork(
      match("/", auth.getCode),
      match("/callback", auth.getToken)
    )))
  )),
  match("/workspaces", fork(
    method("GET", workspaces.getAll),
    method("POST", workspaces.create)
  ))
))
