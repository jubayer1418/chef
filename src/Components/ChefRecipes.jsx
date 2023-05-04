/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ChefRecipes = () => {
  // eslint-disable-next-line no-unused-vars
  const [recipe, setRecipe] = useState([]);
  const { name, experience, like, image, banner, bio } = recipe;
  const notify = () => toast("Wow so easy!");
  const id = useParams();

  useEffect(() => {
    fetch(`https://server-jubayer1418.vercel.app/chef/${id.id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);
  return (
    <>
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
      <div className="md:flex gap-8 w-[80%] mx-auto ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold ">Sweet and sour porks</h2>
            <p>
              <span className="text-xl font-bold">Method: </span>
              {bio}
            </p>
            <h1 className="text-xl font-bold">Ingredients </h1>
            <ul>
              <li>1. Hoisin sauce</li>
              <li>2. Ginger</li>
              <li>3. Black bean and garlic sauce</li>
              <li>4. Soy sauce</li>
              <li>5 .Five-spice powder</li>
            </ul>
            <div className="card-actions justify-between items-center ">
              <Rating style={{ maxWidth: 120 }} value={5} readOnly />
              <button onClick={notify} className="btn btn-warning">
                Favorite
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold">Kung Pao chicken</h2>
            <p>
              <span className="text-xl font-bold">Method: </span>
              {bio}
            </p>
            <h1 className="text-xl font-bold">Ingredients </h1>
            <ul>
              <li>1. Hoisin sauce</li>
              <li>2. Ginger</li>
              <li>3. Black bean and garlic sauce</li>
              <li>4. Soy sauce</li>
              <li>5 .Five-spice powder</li>
            </ul>

            <div className="card-actions justify-between items-center ">
              <Rating style={{ maxWidth: 120 }} value={5} readOnly />
              <button onClick={notify} className="btn btn-warning">
                Favorite
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold">Peking duck</h2>
            <p>
              <span className="text-xl font-bold">Method: </span>
              {bio}
            </p>
            <h1 className="text-xl font-bold">Ingredients </h1>
            <ul>
              <li>1. Hoisin sauce</li>
              <li>2. Ginger</li>
              <li>3. Black bean and garlic sauce</li>
              <li>4. Soy sauce</li>
              <li>5 .Five-spice powder</li>
            </ul>
            <div className="card-actions justify-between items-center ">
              <Rating style={{ maxWidth: 120 }} value={5} readOnly />
              <button onClick={notify} className="btn btn-warning">
                Favorite
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefRecipes;
