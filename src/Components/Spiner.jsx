/* eslint-disable no-unused-vars */
import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
const Spiner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <PacmanLoader color="#36d7b7" />
      </div>
    </div>
  );
};

export default Spiner;
