/* eslint-disable no-unused-vars */
import React from "react";
import Button from "./Button";
const About = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 w-[80%] mx-auto my-9">
        <div>
          <img src="../../public/assets/Food-Plate.png" alt="" />
        </div>
        <div className="space-y-10">
          <h1 className="text-8xl font-semibold">
            <span className="text-yellow-400">About </span>
            Us
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
      </div>
    </div>
  );
};

export default About;
