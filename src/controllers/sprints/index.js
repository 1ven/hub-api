import { match, fork, method } from "litera-router";
import _id from "./_id";

// prettier-ignore
export default fork(
  match("/:id*", _id)
)
