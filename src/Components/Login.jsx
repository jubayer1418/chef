/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvder";
import Gitgogle from "./gitgogle";

const Login = () => {
  const [error, setError] = useState("");
  const { singIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/chef";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    singIn(email, password)
      .then((result) => {
        const loguser = result.user;
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const err = error.message;
        setError("email address or password doesn't match");
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center ">
            <h1 className="text-red-500">{error}</h1>
            <h1 className="text-5xl font-bold"> Please Login!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Login</button>
              </div>
            </form>
            <Link
              to={"/register"}
              className="label-text-alt link link-hover p-5 text-blue-700 underline"
            >
              New to auth master?Please register?
            </Link>
          </div>
        </div>
      </div>
      <Gitgogle></Gitgogle>
    </>
  );
};

export default Login;
