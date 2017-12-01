import url from "url";
import queryString from "querystring";
import axios from "axios";
import { method, fork } from "litera-router";

export default fork(
  method("POST", () => async req => {
    const { code } = req.body;
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
      status: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        access_token: response.data.access_token
      })
    };
  })
);
