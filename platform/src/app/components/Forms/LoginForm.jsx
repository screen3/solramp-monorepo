import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { Timer } from "iconsax-react";

const LoginForm = () => {
    const apiURL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const searchParams = useSearchParams();
    const [email, setEmail] = useState(searchParams.get("email"));
    const [password, setPassword] = useState("");
    const newCustomer = searchParams.get("new");

    const [error, setError] = useState(null);
    const [errMessage, setErrMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const { push } = useRouter();

    const loginBusiness = async (e) => {
        setLoading(true);
        e.preventDefault();

        const data = {
            email,
            password,
        };

        axios
            .post(`${apiURL}/account/login`, data, { withCredentials: true })
            .then((res) => {
                push("/dashboard");
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
            {newCustomer && !error ? (
                <div
                    class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                    role="alert"
                >
                    <div class="flex">
                        <div>
                            <p class="font-bold">
                                Account was successdully created
                            </p>
                            <p class="text-sm">
                                Login to start accepting payment.
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
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
            <form action="#" className="mt-5" onSubmit={loginBusiness}>
                <div className="flex flex-col gap-2">
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
                            className="block w-full h-[42px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                            name="email"
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                            min="3"
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 " htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300  rounded-md  focus:outline-none focus:ring-none focus:border-gray-400 h-[42px]"
                            name="password"
                            autoComplete="off"
                        />
                    </div>
                </div>
                <div className="flex justify-end items-center my-3">
                    <a
                        href="#"
                        className="text-sm text-[#474545] hover:underline"
                    >
                        Forgot your Password?
                    </a>
                </div>

                <div className="flex w-full mb-4">
                    {loading ? (
                        <a className="disabled cursor-not-allowed h-[50px] py-2 px-4 bg-[#A15DDF] hover:bg-[#A15DDF]/90 focus:ring-purple-500 focus:ring-offset-none text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-none rounded-[80px] flex items-center justify-center ">
                            <Timer className="animate-spin mr-1" /> Processing
                        </a>
                    ) : (
                        <button
                            type="submit"
                            className="h-[50px] py-2 px-4 bg-[#A15DDF] hover:bg-[#A15DDF]/90 focus:ring-purple-500 focus:ring-offset-none text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-none rounded-[80px] flex items-center justify-center "
                        >
                            Log in
                        </button>
                    )}
                </div>
            </form>
        </>
    );
};

export default LoginForm;
