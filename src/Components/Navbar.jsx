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
    <header className="text-gray-600 body-font ">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <Link to={"/"}>
          <img className="h-10" src="../../public/assets/logo.png" alt="logo" />
        </Link>
        <nav className="md:mx-auto  md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 mr-5 font-bold"
                : " hover:text-yellow-400 mr-5 font-bold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"blogs"}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 mr-5 font-bold"
                : "mr-5 hover:text-yellow-400 font-bold"
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to={"about"}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 mr-5 font-bold"
                : "mr-5 hover:text-yellow-400 font-bold"
            }
          >
            About us
          </NavLink>
        </nav>
        <span className="hover:text-yellow-400 pr-8 text-2xl font-bold">
          {user?.email}
        </span>

        <div className="flex items-center gap-10 h-32">
          {user ? (
            <>
              <button
                onClick={HandleLogOut}
                className=" hover:bg-yellow-400 inline-flex items-center bg-gray-100 border-0  px-5 py-2 focus:outline-none hover:text-white hover:font-semibold rounded text-base  md:mt-0"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to={"/login"}
              className="inline-flex items-center bg-gray-300 border-0 py-1 px-5  focus:outline-none hover:bg-yellow-200 rounded text-base mt-4 md:mt-0"
            >
              Login
            </NavLink>
          )}
          <div className=" w-10 rounded-full ">
            <img
              title={user?.displayName}
              className="rounded-full "
              src={user?.photoURL}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
