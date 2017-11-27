import url from "url";
import queryString from "querystring";
import axios from "axios";
import { method, fork } from "litera-router";

export default fork(
  method("GET", () => async req => {
    const { query } = url.parse(req.url);
    const { code } = queryString.parse(query);
    const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

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

    return {
      status: 301,
      headers: {
        Location: `http://localhost:3000/auth/github/set-token?access_token=${
          response.data.access_token
        }`
      }
    };
  })
);
