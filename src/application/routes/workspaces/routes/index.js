import { match, fork } from "litera-router";
import main from "./_main";

export default fork(match("/", main));
