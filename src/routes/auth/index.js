import { match, fork } from "litera-router";
import github from "./github";

export default fork(match("/github", github));
