import { isNil } from "ramda";
import errorCodes from "./pg-error-codes";

export const isDatabaseError = err => !isNil(errorCodes[err.code]);
export const isUniqueViolation = err =>
  isDatabaseError(err) && err.code === "23505";
