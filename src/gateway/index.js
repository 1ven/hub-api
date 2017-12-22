import { compose } from "ramda";
import router from "litera-router";
import errorHandler from "litera-error-handler";
import cors from "litera-cors";
import { hoa as modelsHoa } from "core/models";
import { hoa as dbHoa } from "core/database";
import * as githubHoa from "application/hoa/github";
import routes from "./routes";

export default compose(
  errorHandler(),
  githubHoa.errorHandler,
  modelsHoa.errorHandler,
  dbHoa.errorHandler,
  cors({
    allowedHeaders: ["Content-type", "Accept", "Authorization"]
  }),
  router
)(routes);
