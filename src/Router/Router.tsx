import { createBrowserRouter } from "react-router-dom";
import Layout from "../Block/Layout";
import Write from "../Pages/Write";
import Layout1 from "../Asset2/Static2/Layout";
import Layout2 from "../components1/Common/Layout";
import Signin from "../Pages/Signin";
import About from "../components1/Pages/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout1 />,
  },
  {
    path: "/write",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Write />,
      },
    ],
  },
  {
    path: "/membership",
    element: <Layout2 />,
  },
  {
    path: "/About",
    element: <About />,
  },
]);

export default Router;
