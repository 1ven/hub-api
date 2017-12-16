import { merge } from "litera";
import { readQuery } from "litera-querystring";
import { withCookie } from "litera-cookie";
import { withRedirect } from "litera-redirect";

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

export default async req => {
  const { redirect_uri } = readQuery(req);

  return merge(
    withRedirect(
      `https://github.com/login/oauth/authorize?scope=user:email%20read:org&client_id=${GITHUB_CLIENT_ID}`
    ),
    !!redirect_uri && withCookie("redirect_uri", redirect_uri, { maxAge: 60 })
  );
};
