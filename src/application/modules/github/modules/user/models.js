import { utils } from "application/modules/github";

export const getUser = async token =>
  await utils.fetchApi({
    path: "/user",
    method: "GET",
    token
  });
