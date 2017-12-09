import { merge, withStatus, withBody } from "litera";
import { isDatabaseError } from "./utils";

// probably move to litera-knex-error-handler
export const errorHandler = atom => async (req, data) => {
  try {
    return await atom(req, data);
  } catch (err) {
    if (isDatabaseError(err)) {
      return merge(
        withStatus(400),
        process.env.NODE_ENV !== "production" &&
          withBody("Knex request failure")
      );
    }

    throw err;
  }
};
