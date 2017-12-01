import { match, fork } from "litera-router";
import auth from "./auth";

export default match("/v1*", fork(match("/auth*", auth)));
