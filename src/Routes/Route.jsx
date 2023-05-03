/* eslint-disable react/jsx-no-undef */
import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import Blogs from "../Components/Blogs";
import ChefRecipes from "../Components/ChefRecipes";
import ErrorPage from "../Components/Error";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Spiner from "../Components/Spiner";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/chef/:id",

        element: (
          <PrivateRoute>
            <ChefRecipes></ChefRecipes>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/sk",
    element: <Spiner></Spiner>,
  },
]);
export default router;
