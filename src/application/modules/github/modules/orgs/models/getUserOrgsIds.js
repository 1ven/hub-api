import { map, prop } from "ramda";
import getUserOrgs from "./getUserOrgs";

export default async token => map(prop("id"), await getUserOrgs(token));
