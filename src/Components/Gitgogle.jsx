/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvder";
const Gitgogle = () => {
  const { handlegoogle, handlegithub } = useContext(AuthContext);
  const handlegoog = () => {
    handlegoogle
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="md:space-y-0 space-y-3  md:my-5 gap-4 md:flex justify-center">
      <div>
        <button
          onClick={handlegoogle}
          className="btn btn-outline btn-warning w-80  "
        >
          <FaGoogle className="mr-2 text-3xl"></FaGoogle>Sign up with Google
        </button>
      </div>

      <div>
        <button
          onClick={handlegithub}
          className="btn btn-outline btn-warning w-80"
        >
          <FaGithub className="mr-2 text-3xl"></FaGithub>Sign up with Github
        </button>
      </div>
    </div>
  );
};

export default Gitgogle;
