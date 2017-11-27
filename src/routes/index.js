import { match, fork } from "litera-router";
import auth from "./auth";

export default fork(match("/auth*", auth));
