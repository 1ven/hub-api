import http from "http";
import { adapter } from "litera";
import router from "litera-router";
import routes from "./routes";

http.createServer(adapter(router(routes))).listen(8080, () => {
  console.log("Listening at 8080");
});
