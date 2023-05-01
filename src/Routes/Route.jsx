import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import Home from "../Components/Home";
import Main from "../Layout/Main";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "about",
    element: <About></About>,
  },
]);
export default router;
