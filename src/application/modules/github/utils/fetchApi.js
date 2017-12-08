import fetch from "node-fetch";
import join from "url-join";

export default async ({ path, token, method }) => {
  const res = await fetch(join("https://api.github.com", path), {
    method,
    headers: {
      authorization: token
    }
  });

  const body = await res.json();

  if (!res.ok) {
    const err = new GitHubError({
      status: res.status,
      data: body
    });
    throw err;
  }

  return body;
};

export class GitHubError extends Error {
  constructor({ status, data }) {
    super();
    this.status = status;
    this.data = data;
  }
}
