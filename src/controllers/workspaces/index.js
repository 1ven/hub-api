import { match, fork, method } from "litera-router";
import getAll from "./getAll";
import create from "./create";
import _id from "./_id";

// prettier-ignore
export default fork(
  match("/", fork(
    method("GET", getAll),
    method("POST", create)
  )),
  match("/:id*", _id)
)
