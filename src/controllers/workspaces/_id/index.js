import { match, fork } from "litera-router";
import sprints from "./sprints";

// prettier-ignore
export default fork(
  match("/sprints*", sprints)
)
