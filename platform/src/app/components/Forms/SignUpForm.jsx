"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CountryPhoneInputSelect from "./FormComponents/CountryPhoneInput";
import CountrySelect from "./FormComponents/CountrySelect";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Timer } from "iconsax-react";

const SignUpForm = () => {
    const apiURL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const [country, setCountry] = useState([]);
    const [phone, setPhone] = useState();
    const [error, setError] = useState(null);
    const [errMessage, setErrMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const business = React.useRef(null);
    const firstname = React.useRef(null);
    const lastname = React.useRef(null);
    const password = React.useRef(null);
    const email = React.useRef(null);

    const { push } = useRouter();

    const registerBusiness = async (e) => {
        setLoading(true);
        e.preventDefault();

        const data = {
            business_name: business.current.value,
            representative_firstname: firstname.current.value,
            representative_lastname: lastname.current.value,
            representative_email: email.current.value,
            representative_phone: "+" + phone.code + phone.phone,
            default_currency: country.currency,
            country_iso2_code: String(country.alpa2).toUpperCase(),
            password: password.current.value,
        };

        axios
            .post(`${apiURL}/business/new`, data)
            .then((res) => {
                push("/auth/login?email=" + email.current.value + "&new=true");
            })
            .catch((err) => {
                console.log("err", err);
                setError(true);
                setErrMessage(err.response?.data?.message);
                setLoading(false);
            });
    };

    return (
        <>
            {error && (
                <div
                    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5"
                    role="alert"
                >
                    <strong class="font-bold">
                        There was an error in your submission
                    </strong>
                    {errMessage && (
                        <ul className="text-sm list-disc ml-5">
                            <li>{errMessage}</li>
                        </ul>
                    )}
                </div>
            )}
            <form action="#" onSubmit={registerBusiness}>
                <div className="flex flex-col mb-2 gap-6">
                    <div>
                        <label
                            className="text-gray-700 font-bolder mb-3"
                            htmlFor="country"
                        >
                            Country
                        </label>

                        <CountrySelect onUpdate={setCountry} />
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
                            ref={business}
                            min={5}
                            required
                            className="block w-full h-[42px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                            name="business_name"
                            autoComplete="off"
                        />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <div className="w-full md:w-1/2">
                            <label
                                className="text-gray-700 font-bolder mb-3"
                                htmlFor="first_name"
                            >
                                Firstname
                            </label>
                            <input
                                id="first_name"
                                type="text"
                                required
                                ref={firstname}
                                className="block w-full h-[42px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                                name="first_name"
                                autoComplete="off"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <label
                                className="text-gray-700 font-bolder mb-3"
                                htmlFor="last_name"
                            >
                                Lastname
                            </label>
                            <input
                                id="last_name"
                                type="text"
                                required
                                ref={lastname}
                                className="block w-full h-[42px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                                name="last_name"
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            className="text-gray-700 font-bolder mb-3"
                            htmlFor="email"
                        >
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            ref={email}
                            className="block w-full h-[42px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                            name="email"
                            autoComplete="off"
                        />
                    </div>

                    <div>
                        <CountryPhoneInputSelect
                            name={"phone"}
                            label={"Phone number"}
                            itemProps={""}
                            onUpdate={setPhone}
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
                            ref={password}
                            required
                            autoComplete="off"
                        />
                    </div>

                    <div className="flex w-full mb-2">
                        {loading ? (
                            <a className="disabled cursor-not-allowed h-[50px] py-2 px-4 w-full  bg-[#A15DDF] hover:bg-[#A15DDF]/90 focus:ring-purple-500 focus:ring-offset-none text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-none rounded-[80px] flex items-center justify-center ">
                                <Timer className="animate-spin mr-1" />{" "}
                                Processing
                            </a>
                        ) : (
                            <button className="h-[50px] py-2 px-4 w-full bg-[#A15DDF] hover:bg-[#A15DDF]/90 focus:ring-purple-500 focus:ring-offset-none text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-none rounded-[80px] flex items-center justify-center ">
                                Create Account
                            </button>
                        )}
                    </div>

                    <div className="flex items-center my-4 ">
                        <p className="text-left font-normal text-[#474545] text-sm">
                            By clicking the create account button, you agree to
                            Algoramp&apos;s{" "}
                            <Link href={""} className="text-[#A15DDF]">
                                terms of use
                            </Link>{" "}
                            and{" "}
                            <Link href={""} className="text-[#A15DDF]">
                                Privacy policy
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SignUpForm;
