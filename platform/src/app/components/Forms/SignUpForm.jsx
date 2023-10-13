"use client";
import Link from "next/link";
import React, { useState } from "react";
import CountryPhoneInputSelect from "./FormComponents/CountryPhoneInput";
import CountrySelect from "./FormComponents/CountrySelect";
import { useRegisterUserMutation } from "@/src/redux/services/userApi";

const SignUpForm = () => {
  const [country, setCountry] = useState("");
  const [phoneVal, setPhoneVal] = useState({ code: 234, phone: "" });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userDetails, setUserDetails] = useState({
    business_name: "",
    first_name: "",
    last_name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleCountry = (country) => {
    setCountry(country);
  };

  const handlePhone = (value, phoneInfo) => {
    if (phoneInfo) {
      setPhoneVal(phoneInfo);
      setPhoneNumber(value);
    }
    // console.log("phoneInfo", phoneInfo);
    // console.log("value", value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const [registerUser] = useRegisterUserMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      business_name: userDetails.business_name,
      representative_firstname: userDetails.first_name,
      representative_lastname: userDetails.last_name,
      representative_email: userDetails.email,
      representative_phone: phoneNumber,
      country_iso2_code: phoneVal.short,
      default_currency: "AED",
      password: userDetails.password,
    };

    // console.log("final info", userInfo);
    registerUser(userInfo)
      .unwrap()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-2 gap-6">
          <div>
            <label className="text-gray-700 font-bolder mb-3" htmlFor="country">
              Country
            </label>
            {/*  <input
              id="country"
              type="text"
              className="block w-full h-[42px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
              name="country"
              autoComplete="off"
            /> */}
            <CountrySelect handleChange={handleCountry} />
          </div>
          <div>
            <label
              className="text-gray-700 font-bolder mb-3"
              htmlFor="business_name"
            >
              Business Name
            </label>
            <input
              id="business_name"
              type="text"
              className="block w-full h-[42px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
              name="business_name"
              autoComplete="off"
              value={userDetails.business_name}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="w-full md:w-1/2">
              <label
                className="text-gray-700 font-bolder mb-3"
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                id="first_name"
                type="text"
                className="block w-full h-[42px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                name="first_name"
                autoComplete="off"
                value={userDetails.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2">
              <label
                className="text-gray-700 font-bolder mb-3"
                htmlFor="last_name"
              >
                Last Name
              </label>
              <input
                id="last_name"
                type="text"
                className="block w-full h-[42px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                name="last_name"
                autoComplete="off"
                value={userDetails.last_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="text-gray-700 font-bolder mb-3" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="block w-full h-[42px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
              name="email"
              autoComplete="off"
              value={userDetails.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <CountryPhoneInputSelect
              name={"phone"}
              label={"Phone number"}
              itemProps={""}
              phoneVal={phoneVal}
              handleChange={handlePhone}
            />

            {/* <label className="text-gray-700 font-bolder mb-3" htmlFor="phone">
              Phone number
            </label>
            <input
              id="phone"
              type="text"
              className="block w-full h-[42px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
              name="phone"
              autoComplete="off"
            /> */}
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

        <div className="flex w-full mt-6 mb-4">
          <button className="h-[50px] py-2 px-4  bg-[#A15DDF] hover:bg-[#A15DDF]/90 focus:ring-purple-500 focus:ring-offset-none text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-none rounded-[80px] flex items-center justify-center">
            Create Account
          </button>
        </div>

        <div className="flex items-center my-4 ">
          <p className="text-left font-normal text-[#474545] text-sm">
            By clicking the create account button, you agree to Solramp&apos;s{" "}
            <Link href={""} className="text-[#A15DDF]">
              terms of use
            </Link>{" "}
            and{" "}
            <Link href={""} className="text-[#A15DDF]">
              Privacy policy
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
