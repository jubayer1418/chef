import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import Blogs from "../Components/Blogs";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "about",
    element: <About></About>,
  },
]);
export default router;
