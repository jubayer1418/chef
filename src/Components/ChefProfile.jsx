/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "./Button";

const ChefProfile = ({ chef }) => {
  // eslint-disable-next-line react/prop-types
  const { id, name, experience, recipes, like, image, banner, bio } = chef;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mt-6">
        <div className="avatar mx-auto pt-10 ">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={image} />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title ">{name}</h2>
          <div className="flex gap-4">
            <h1 className="font-semibold">Experience</h1>
            <p className="text-yellow-600"> {experience}</p>
          </div>
          <AiTwotoneLike className="text-2xl hover:text-yellow-600"></AiTwotoneLike>
          <span className="text-yellow-600">{like}</span>

          <ul className="menu bg-base-100 w-56 p-2 rounded-box">
            <li className="menu-title">
              <span className="text-xl">Chef Recipes</span>
            </li>
            <span className="pl-7">
              <li>
                <a>{recipes[0]}</a>
              </li>
              <li>
                <a>{recipes[1]}</a>
              </li>
              <li>
                <a>{recipes[2]}</a>
              </li>
            </span>
          </ul>
          <Link to={`/chef/${id}`}>
            <Button>View Recipes</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefProfile;
