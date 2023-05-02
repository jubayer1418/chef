/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button className=" hover:bg-yellow-400 inline-flex items-center bg-gray-300 border-0  px-5  py-2 focus:outline-none hover:text-white hover:font-semibold rounded text-base  md:mt-0">
        {children}
      </button>
    </div>
  );
};

export default Button;
