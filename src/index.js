import http from "http";
import { compose } from "ramda";
import { adapter } from "litera";
import router from "litera-router";
import errorHandler from "litera-error-handler";
import cors from "litera-cors";
import routes from "./routes";

const app = compose(errorHandler(), cors())(router(routes));

http.createServer(adapter(app)).listen(8080, () => {
  console.log("Listening at 8080");
});
