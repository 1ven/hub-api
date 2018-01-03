import { match, fork } from "litera-router";
import issues from "./issues";

// prettier-ignore
export default fork(
  match("/issues*", issues)
)
