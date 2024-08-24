import App from "@/App";
import { routeGenerators } from "@/utils/routeGenerators";
import { createBrowserRouter } from "react-router-dom";
import { routePaths } from "./routePath";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerators(routePaths),
  },
]);

export default router;
