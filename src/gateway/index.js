import { compose } from "ramda";
import router from "litera-router";
import errorHandler from "litera-error-handler";
import cors from "litera-cors";
import { hoa as modelsHoa } from "core/models";
import { hoa as dbHoa } from "core/database";
import { hoa as githubHoa } from "modules/github";
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
