import { compose } from "ramda";
import router from "litera-router";
import errorHandler from "litera-error-handler";
import cors from "litera-cors";
import { hoa as githubHoa } from "./modules/github";
import routes from "./routes";

export default compose(errorHandler(), githubHoa.handleErrors, cors(), router)(
  routes
);
