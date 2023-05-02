/* eslint-disable no-unused-vars */
import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvder";

const Register = () => {
  const [error, setError] = useState("");
  const { user, createUser, nameImg } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;

    const img = form.img.value;

    const email = form.email.value;
    const password = form.password.value;
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError("password not valid need 8 char ");
      return;
    }
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const logUser = result.user;
        updateData(result.user);
        form.reset();
        console.log(logUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    const updateData = (user) => {
      updateProfile(user, {
        displayName: name,
        photoURL: img,
      })
        .then(() => {
          console.log("updatae");
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex">
        {!user && error}
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Please Register!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">URl</span>
              </label>
              <input
                type="url"
                name="img"
                placeholder="Your image url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link
                  to={"/login"}
                  className="label-text-alt link link-hover text-blue-700"
                >
                  Already have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
