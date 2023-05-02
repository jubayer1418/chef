/* eslint-disable no-unused-vars */
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
const Gitgogle = () => {
  return (
    <div className="  my-5 gap-4 flex justify-center">
      <div>
        <button className="btn btn-outline btn-warning w-80 ">
          <FaGoogle className="mr-2 text-3xl"></FaGoogle>Sign up with Google
        </button>
      </div>

      <div>
        <button className="btn btn-outline btn-warning w-80">
          <FaGithub className="mr-2 text-3xl"></FaGithub>Sign up with Github
        </button>
      </div>
    </div>
  );
};

export default Gitgogle;
