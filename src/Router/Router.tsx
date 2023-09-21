import { createBrowserRouter } from "react-router-dom";
import Layout from "../Block/Layout";
import Write from "../Pages/Write";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Write />,
      },
    ],
  },
]);

export default Router;
