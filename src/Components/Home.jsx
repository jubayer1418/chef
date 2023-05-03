/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import About from "./About";
import Button from "./Button";
import ChefProfile from "./ChefProfile";
import Fedback from "./Fedback";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://server-jubayer1418.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <>
      <div className="grid md:grid-cols-2 md:w-[80%] w-[90%] mx-auto my-9">
        <div className="space-y-10">
          <h1 className="md:text-8xl text-3xl font-semibold">
            Get Fresh <span className="text-yellow-400">Food </span>
            in a Easy Way
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            reiciendis quaerat nobis deleniti amet non inventore. Reprehenderit
            recusandae voluptatibus minus tenetur itaque numquam cum quos
            dolorem maxime. Quas, quaerat nisi. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Cumque facilis, quaerat cupiditate
            nulla quibusdam quo sunt esse tempore inventore vel voluptate, amet
            laudantium adipisci veniam nihil quam molestiae omnis mollitia.
          </p>
          <Button>Order Now</Button>
        </div>
        <div>
          <img src="../../public/assets/main_img.png" alt="" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 w-[80%] mx-auto my-10">
        {chefs.map((chef) => (
          <ChefProfile key={chef.id} chef={chef}></ChefProfile>
        ))}
      </div>
      <About></About>
      <Fedback></Fedback>
    </>
  );
};

export default Home;
