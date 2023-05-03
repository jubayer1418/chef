/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { useParams } from "react-router-dom";
const ChefRecipes = () => {
  // eslint-disable-next-line no-unused-vars
  const [recipe, setRecipe] = useState([]);
  const { name, experience, recipes, like, image, banner, bio } = recipe;

  const id = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://server-jubayer1418.vercel.app/chef/${id.id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);
  return (
    <>
      {" "}
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-96 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={banner}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={image} />
                  </div>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    {name}
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>

                  <p className="text-base font-medium">
                    <span>Experience: </span>
                    {experience}
                  </p>

                  <div className="flex gap-4 mt-4">
                    <AiTwotoneLike className="text-2xl hover:text-yellow-600"></AiTwotoneLike>
                    <p className="text-yellow-600">{like}</p>
                  </div>
                </div>
              </div>
              <ul className="menu bg-base-100 w-56 p-2 rounded-box pt-7 mx-auto">
                <li className="menu-title">
                  <span className="text-xl">Chef Recipes</span>
                </li>
                <span className="pl-7">
                  <li>
                    <a>Kung Pao chicken</a>
                  </li>
                  <li>
                    <a>Peking duck</a>
                  </li>
                  <li>
                    <a>Sweet and sour pork</a>
                  </li>
                </span>
              </ul>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h1 className="text-2xl font-bold">Description</h1>
                <p className="leading-relaxed text-lg mb-4">{bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefRecipes;
