import { compose } from "ramda";
import router, { match, fork } from "litera-router";
import errorHandler from "litera-error-handler";
import cors from "litera-cors";
import { hoa as modelsHoa } from "core/models";
import { hoa as dbHoa } from "core/database";
import * as githubHoa from "modules/github/hoa";
import auth from "./auth";
import user from "./user";
import workspaces from "./workspaces";
import sprints from "./sprints";

// prettier-ignore
const app = match("/v1*", fork(
  match('/auth*', auth),
  match('/user*', user),
  match('/workspaces*', workspaces),
  match('/sprints*', sprints),
))

export default compose(
  errorHandler(),
  githubHoa.errorHandler,
  modelsHoa.errorHandler,
  dbHoa.errorHandler,
  cors({
    allowedHeaders: ["Content-type", "Accept", "Authorization"]
  }),
  router
)(app);
