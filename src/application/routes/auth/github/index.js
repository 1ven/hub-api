import { merge, withStatus } from "litera";
import { method, fork, match } from "litera-router";
import { readQuery } from "litera-querystring";
import { readCookie, withCookie } from "litera-cookie";
import { withRedirect } from "litera-redirect";
import join from "url-join";
import axios from "axios";

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

export default fork(
  method(
    "GET",
    fork(
      match("/", () => async req => {
        const { redirect_uri } = readQuery(req);

        return merge(
          withRedirect(
            `https://github.com/login/oauth/authorize?scope=user:email%20read:org&client_id=${
              GITHUB_CLIENT_ID
            }`
          ),
          !!redirect_uri &&
            withCookie("redirect_uri", redirect_uri, { maxAge: 60 })
        );
      }),
      match("/callback", () => async req => {
        const { code } = readQuery(req);
        const { redirect_uri } = readCookie(req);

        const response = await axios({
          url: "https://github.com/login/oauth/access_token",
          method: "POST",
          headers: {
            accept: "application/json"
          },
          data: {
            code,
            client_id: GITHUB_CLIENT_ID,
            client_secret: GITHUB_CLIENT_SECRET
          }
        });

        return merge(
          withRedirect(join(redirect_uri, response.data.access_token))
        );
      })
    )
  )
);
