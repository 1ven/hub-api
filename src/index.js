import http from "http";
import { compose } from "ramda";
import { adapter } from "litera";
import router from "litera-router";
import errorHandler from "litera-error-handler";
import cors from "litera-cors";
import { db } from "core/database";
import app from "./application";

const atom = compose(errorHandler(), cors(), router)(app);

http.createServer(adapter(atom, { db })).listen(8080, () => {
  console.log("Listening at 8080");
});
