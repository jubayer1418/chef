/* eslint-disable no-unused-vars */
import React from "react";
import Button from "./Button";

const Home = () => {
  return (
    <div className="grid md:grid-cols-2 md:w-[80%] w-[90%] mx-auto my-9">
      <div className="space-y-10">
        <h1 className="md:text-8xl text-3xl font-semibold">
          Get Fresh <span className="text-yellow-400">Food </span>
          in a Easy Way
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
          reiciendis quaerat nobis deleniti amet non inventore. Reprehenderit
          recusandae voluptatibus minus tenetur itaque numquam cum quos dolorem
          maxime. Quas, quaerat nisi. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Cumque facilis, quaerat cupiditate nulla quibusdam
          quo sunt esse tempore inventore vel voluptate, amet laudantium
          adipisci veniam nihil quam molestiae omnis mollitia.
        </p>
        <Button>Order Now</Button>
      </div>
      <div>
        <img src="../../public/assets/main_img.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
