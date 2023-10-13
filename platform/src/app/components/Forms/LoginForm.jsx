"use client";
import React, { useState } from "react";
import { useLoginUserMutation } from "@/src/redux/services/userApi";

const LoginForm = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [loginUser] = useLoginUserMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(userDetails)
      .unwrap()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form action="#" className="mt-5" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-2 gap-6">
          <div>
            <label className="text-gray-700 font-bolder mb-3" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="block w-full h-[42px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
              name="email"
              min="3"
              autoComplete="off"
              value={userDetails.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-gray-700 " htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300  rounded-md  focus:outline-none focus:ring-none focus:border-gray-400 h-[42px]"
              name="password"
              autoComplete="off"
              value={userDetails.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-end items-center my-7">
          <a href="#" className="text-sm text-[#474545] hover:underline">
            Forgot your Password?
          </a>
        </div>

        <div className="flex w-full mb-4">
          <button className="h-[50px] py-2 px-4 bg-[#A15DDF] hover:bg-[#A15DDF]/90 focus:ring-purple-500 focus:ring-offset-none text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-none rounded-[80px] flex items-center justify-center ">
            Log in
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
