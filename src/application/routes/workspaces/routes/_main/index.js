import { method, fork } from "litera-router";
import get from "./get";
import post from "./post";

export default fork(method("GET", get), method("POST", post));
