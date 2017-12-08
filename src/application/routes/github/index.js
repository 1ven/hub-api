import { match } from "litera-router";
import orgs from "./orgs";

export default match("/orgs*", orgs);
