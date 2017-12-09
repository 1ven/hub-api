import { merge, withStatus, withBody } from "litera";
import * as errors from "./errors";

export const errorHandler = atom => async (req, data) => {
  try {
    return await atom(req, data);
  } catch (err) {
    const body = withBody(err.message);

    if (err instanceof errors.NotFound) {
      return merge(withStatus(404), body);
    } else if (err instanceof errors.NotAllowed) {
      return merge(withStatus(403), body);
    } else if (err instanceof errors.ModelError) {
      return merge(withStatus(400), body);
    } else {
      throw err;
    }
  }
};
