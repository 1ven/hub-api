import { method, fork } from "litera-router";
import get from "./get";

export default fork(method("GET", get));
