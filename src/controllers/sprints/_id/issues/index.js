import { match, fork, method } from "litera-router";
import add from "./add";

// prettier-ignore
export default match("/", fork(
  method("POST", add)
))
