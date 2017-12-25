import { match, fork, method } from "litera-router";
import getAll from "./getAll";
import create from "./create";

// prettier-ignore
export default match("/", fork(
  method("GET", getAll),
  method("POST", create)
))
