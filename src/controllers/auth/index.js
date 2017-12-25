import { fork, match, method } from "litera-router";
import getCode from "./getCode";
import getToken from "./getToken";

// prettier-ignore
export default method("GET", fork(
  match("/", getCode),
  match("/callback", getToken)
))
