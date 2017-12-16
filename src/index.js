import http from "http";
import { adapter } from "litera";
import { db } from "core/database";
import app from "./gateway";

http.createServer(adapter(app, { db })).listen(8080, () => {
  console.log("Listening at 8080");
});
