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
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-red-400 mr-5 font-bold"
                : " hover:text-red-400 mr-5 font-bold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"blogs"}
            className={({ isActive }) =>
              isActive
                ? "text-red-400 mr-5 font-bold"
                : "mr-5 hover:text-red-400 font-bold"
            }
          >
            Blogs
          </NavLink>
        </nav>
        <span className="hover:text-red-400 pr-8">{user?.email}</span>
        <div className="flex items-center gap-10 h-32">
          {user ? (
            <>
              <button
                onClick={HandleLogOut}
                className=" hover:bg-red-400 inline-flex items-center bg-gray-100 border-0  px-5  focus:outline-none hover:text-white hover:font-semibold rounded text-base  md:mt-0"
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
          <div className="  w-10 rounded-full ">
            <img src="https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
