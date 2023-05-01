/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvder";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const HandleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center cursor-pointer text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 font-bold text-gray-400 text-3xl ">
            Food recipes
          </span>
        </Link>
        <nav className="md:mx-auto  md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <NavLink to={"/"} className="mr-5 hover:text-gray-900">
            Home
          </NavLink>
          <NavLink to={"blogs"} className="mr-5 hover:text-gray-900">
            Blogs
          </NavLink>
        </nav>
        <div className="flex items-center gap-10">
          {user ? (
            <>
              <span>{user.email}</span>

              <button
                onClick={HandleLogOut}
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-5  focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to={"/login"}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-5  focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              Login
            </NavLink>
          )}
          <div className="  w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
